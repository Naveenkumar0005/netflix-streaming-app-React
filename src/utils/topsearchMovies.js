import {API_OPTIONS} from "./constants";

const useTopsearchMovies = async (searchText) => {
  const response = await fetch( `https://api.themoviedb.org/3/search/movie?query=${searchText}&page=1`,
        API_OPTIONS);
  if (!response.ok) {
    throw new Error("Failed to fetch movies from TMDB");
  }
  const jsonData = await response.json();
  return jsonData.results;
};

export default useTopsearchMovies;