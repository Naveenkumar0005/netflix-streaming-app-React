import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import MovieList from "./MovieList";


const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)

  return (movies.nowPlaying && 
    <div className="bg-black">
      <div className="-mt-64 relative z-25">
        <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
        <MovieList title={"Popular"} movies={movies.popularMovie} />
        <MovieList title={"Trending"} movies={movies.nowPlaying} /> 
        <MovieList title={"Upcoming"} movies={movies.nowPlaying} /> 
      </div>
    </div>

)}   

export default SecondaryContainer;