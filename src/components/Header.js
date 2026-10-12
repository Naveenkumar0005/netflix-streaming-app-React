import { signOut,onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "../utils/firebase";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL } from "../utils/constants";
import topsearchMovies from "../utils/topsearchMovies";
import { addTopsearchMovies } from "../utils/movieSlice";

const Header = () => {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
    const user=useSelector((store)=>store.user);
    const dispatch = useDispatch();
    
    const handleMovieSearch = async () => {       
      if (!searchText.trim()) return;
      try {
        const movies  = await topsearchMovies(searchText);
        dispatch(addTopsearchMovies(movies));        
      } catch (error) {
        console.error("Movie search failed:", error);
        }
    }

    const handleSignOut = () => {       
        signOut(auth).then(() => {   
        }).catch((error) => {
            navigate("/error");

        });
    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                 const {uid,email,displayName,photoURL} = user;
                // User is signed in, you can dispatch an action to update the Redux store
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));     
                navigate("/browse"); // Redirect to browse page
            } else {
                // User is signed out, you can dispatch an action to update the Redux store
                dispatch(removeUser());
                navigate("/"); // Redirect to login page
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);  

    return (
    <div className="absolute w-screen px-4 py-2 bg-gradient-to-b from-black to-transparent z-10 flex justify-between">
        <img className="w-44 h-12" src={NETFLIX_LOGO_URL} alt="Netflix Logo"  />    
   
        {user && (
            <div className="flex gap-1">
                <input type="text" className="border border-black bg-gray-300 py-2 px-2 " placeholder="Search movies shows" value={searchText} 
                    onChange={(e) => { setSearchText(e.target.value);  }} />
                    <button className="bg-red-600 text-white w-14 py-2 rounded-md hover:bg-red-800 font-bold" onClick={handleMovieSearch} >Search</button>                
                <img className="w-12 h-12 mx-4" src={user.photoURL || ""} alt="User Avatar" />
                <button className="text-white font-bold py-2 px-4 rounded" onClick={handleSignOut}>Sign Out</button>
            </div>
        )}
    </div>
)};

export default Header;
