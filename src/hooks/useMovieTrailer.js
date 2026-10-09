import {API_OPTIONS} from "../utils/constants";
import {addMovieTrailer} from  "../utils/movieSlice" ;
import { useDispatch } from "react-redux";
import { useEffect } from "react";
 
const useMovieTrailer = (movieId) => {
    const dispatch  = useDispatch();

const getVideoBackground = async () => {
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
    );
    const jsonData = await data.json();
    console.log(jsonData.results);

    const trailerData = jsonData.results.filter(
        (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    const trailer=trailerData.length?trailerData[0] : jsonData.results[0];
    console.log(trailer);
    dispatch(addMovieTrailer(trailer))
}

useEffect(() => {
    getVideoBackground();
}, []);
}

export default useMovieTrailer;


