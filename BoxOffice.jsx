
const BoxOffice = ({movie:
    {rnum, openDt, movieNm, rank}}) =>{
    return (
        <div className="movie" key={rnum}>
            <div>
                <p>{openDt}</p>

            </div>
            <div>
                <img src={"http://via.placeholder.com/400"}
                alt={movieNm} />
            </div>
            <div>
                <span>{movieNm}</span>
                <h3>{rank}</h3>
            </div>
        </div>
    )
}
export default BoxOffice;