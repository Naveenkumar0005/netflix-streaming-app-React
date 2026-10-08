
const VideoTitle = ({ title ,overview}) => {
    return (
        <div>
            <h1 className="video-title">{title}</h1>
            <p className="video-description">{overview}</p>
             <button className="play-button">Play</button>
        </div>
    );
}

export default VideoTitle;