import { signOut,onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "../utils/firebase";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";


const Header = () => {
    const navigate = useNavigate();
    const user=useSelector((store)=>store.user);
    const dispatch = useDispatch();  

    const handleSignOut = () => {
        console.log("Sign Out clicked");
        signOut(auth).then(() => {   
        }).catch((error) => {
            navigate("/error");

        });
    }

     useEffect(() => {
        onAuthStateChanged(auth, (user) => {
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
    }, []);  

    return (
    <div className="absolute w-screen px-4 py-2 bg-gradient-to-b from-black to-transparent flex justify-between">
        <img className="w-44 h-12" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-08-21/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo"  />    
   
        {user && (
            <div className="flex gap-1">
                <img className="w-12 h-12" src={user.photoURL || ""} alt="User Avatar" />
                <button className="text-white font-bold py-2 px-4 rounded" onClick={handleSignOut}>Sign Out</button>
            </div>
        )}
    </div>
)};

export default Header;
