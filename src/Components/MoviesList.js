import MoviesCard from "./MoviesCard"
import FilterMovies from "./FilterMovies"
import AjoutMovies from "./AjoutMovies"

const MoviesList=({liste, title, rate, setTitle, setRate, setListe})=>{

    var a = liste.filter((el)=>el.titre.toUpperCase().includes(title.toUpperCase()) && el.rating >= rate)
    return(
<div>
        <div className='top'>
        <FilterMovies title={title} rate={rate} setTitle={setTitle} setRate={setRate} />
        <AjoutMovies setListe={setListe} liste={liste}/>
        </div>
        <div className="lol">

            {
                
            a.length === 0 ? <h1>Movie Not Found</h1> : a.map((el)=> <MoviesCard el ={el}/>)
            }
        </div>
        </div>
    )
}

export default MoviesList