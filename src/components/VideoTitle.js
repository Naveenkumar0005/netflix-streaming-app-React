
const VideoTitle = ({ title ,overview}) => {
    return (
        <div className="pt-32 px-12">
            <h1 className="text-6xl font-bold" >{title}</h1>
            <p className="text-lg" >{overview}</p>
            <div>
             <button className="bg-red-600 text-white w-32 px-6 py-3 rounded-md hover:bg-red-700">  Play  </button>
             <button className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 ml-4">More Info</button>
             </div>
        </div>
    );
}

export default VideoTitle;