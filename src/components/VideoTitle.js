
const VideoTitle = ({ title ,overview}) => {
    return (
        <div className="w-screen aspect-vedio pt-32 px-12 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-5xl font-bold" >{title}</h1>
            <p className="text-lg w-1/4" >{overview}</p>
            <div>
             <button className="bg-red-600 text-white w-32 px-6 py-3 rounded-md hover:bg-red-800 font-bold" >  Play  </button>
             <button className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-800 ml-4 font-bold">More Info</button>
             </div>
        </div>
    );
}

export default VideoTitle;