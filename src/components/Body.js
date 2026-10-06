import Login from "./Login";
import Browse from "./Browse";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();  
    const appRouter = createBrowserRouter([
        {
            path: "/", 
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ]);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                 const {uid,email,displayName} = user;
                // User is signed in, you can dispatch an action to update the Redux store
                dispatch(addUser({uid:uid,email:email,displayName:displayName}));     
            } else {
                // User is signed out, you can dispatch an action to update the Redux store
                dispatch(removeUser());
            }
        });

    }, []);     

    return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
)};

export default Body;
