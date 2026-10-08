import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {

    const movies = useSelector((store) => store.movies.nowPlaying);

    if(!movies || movies.length === 0) {return <div>Loading...</div>;}

    const mainMovie = movies[0];

    const {original_title, overview} = mainMovie;
    return (
        <div className="main-container">
            <VideoTitle title={original_title} overview={overview} />
             <VideoBackground />               
        </div>
    );
}

export default MainContainer;