import {API_OPTIONS} from "../utils/constants";
import { useEffect } from "react";
import {addMovieTrailer} from  "../utils/movieSlice" ;
import { useDispatch, useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
    const dispatch  = useDispatch();
    const trailerVedio = useSelector(store => store.movies?.trailerVedio);

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
}, [movieId]);

    return (
        <div>
            <iframe width="800" height="500" 
            src={"https://www.youtube.com/embed/"+trailerVedio?.key}
            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe>
        </div>
 )};

 export default VideoBackground;