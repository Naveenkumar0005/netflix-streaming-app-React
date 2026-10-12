import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)

  return (movies.nowPlaying && 
    <div className="bg-black">
      
      <div className="-mt-64 relative z-25">  
         {movies.topsearchMovie?.length >0 && <MovieList title={"Top Search"} movies={movies.topsearchMovie} />}     
        <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
        <MovieList title={"Popular"} movies={movies.popularMovie} />
        <MovieList title={"Top Rated"} movies={movies.topratedMovie} />
       
      </div>
    </div>

)}   

export default SecondaryContainer;