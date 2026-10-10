import { useEffect } from "react";
import {API_OPTIONS,NOW_PLAYING_MOVIE} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
 // fetch data TMDB API and store in redux store   
    const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIE, API_OPTIONS );
        const jsonData = await data.json();        
        dispatch(addNowPlayingMovies(jsonData.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

};

export default useNowPlayingMovies;