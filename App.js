import { useState } from 'react';
import './App.css';
import SearchIcon from './imgs/search.svg';
import { useEffect } from 'react';
import BoxOffice from './components/BoxOffice';


//id와 key 겂을 갖고 있는 url
const API_URL_BOX= "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //movie title를 이용하여 movie 들을 검색하는 함수
  //서버에 가서 검색결과를 가져오는 처리를 비동기로 수행함
  //fetch() -> then() --> then()
  //async()(함수에 키워드를 붙는 형식) -> await() --> await()
  const searchMovies = async(date) => {
    console.log('date: ' + date);
    //https://www.omdbapi.com/?i=tt3896198&apikey=60fe8e01&s=antman
    const response = await fetch(`${API_URL_BOX}&targetDt=${date}`);
    const data = await response.json();

    console.log(data);
    //movies 변수에 저장
    setMovies(data);
  }
  //함수 기능 테스트
  //useEffect() 이용하여 처음 렌더링될때, 한번만 호출
  useEffect(()=>{
    searchMovies('20220801');
    // searchMovies('spiderman');
  },[]);

  return (
    <div className="App">
      <h1 style={{color:'white'}}> Box Office(Kofic API)</h1>
      <div className='search'>
        <input placeholder='Search for movies'
                value={searchTerm}
                onChange={(e)=>{
                  setSearchTerm(e.target.value)
                }} />
        <img src={SearchIcon} alt='search' 
              onClick={()=> searchMovies(searchTerm)} />


      </div>
      {movies.length !=0 ? (
        <div className='container'>{
          movies.boxOfficeResult.dailyBoxOfficeList.map((movie)=>{
            console.log(movie);
            return(
              <BoxOffice movie = {movie} key={movie.OpenDt} />
            )
          })
        }
        </div>
        ) : (
          <div>
            <h2>No movies found!!!</h2>
          </div>
        
      )}

    </div>
  );
}

export default App;
