import { useEffect } from "react";
import {TOPRATED_MOVIE,API_OPTIONS} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopratedMovies } from "../utils/movieSlice";

const useTopratedMovies = () => {
 // fetch data TMDB API and store in redux store   
    const dispatch = useDispatch();

  const getTopratedMovies = async () => {
    const data = await fetch(TOPRATED_MOVIE,API_OPTIONS);
        const jsonData = await data.json();        
        dispatch(addTopratedMovies(jsonData.results));
    };

    useEffect(() => {
        getTopratedMovies();
    }, []);

};

export default useTopratedMovies;