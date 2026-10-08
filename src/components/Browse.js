import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {   
    useNowPlayingMovies();

    return (<div>
        <Header />
        <MainContainer />
        <SecondaryContainer />  
        {/*
          Main container
            1. video background
            2. vedio title
            3. vedio description
            4. play button

          secondary container
            1. list of movies * sn
                1. movie cards * n 

        */ 
    }
    </div>
)};

export default Browse;
