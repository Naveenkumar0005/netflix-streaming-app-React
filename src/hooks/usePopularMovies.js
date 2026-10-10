import { useEffect } from "react";
import {POPULAR_MOVIE,API_OPTIONS} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
 // fetch data TMDB API and store in redux store   
    const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIE,API_OPTIONS);
        const jsonData = await data.json();        
        dispatch(addPopularMovies(jsonData.results));
    };

    useEffect(() => {
        getPopularMovies();
    }, []);

};

export default usePopularMovies;