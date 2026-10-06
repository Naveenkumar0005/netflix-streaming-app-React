import Header from "./Header";
import { useState,useRef } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [IsSignInForm, setIsSignInForm] = useState(true);
    const navigate = useNavigate();

    const toggelForm = () => {
        setIsSignInForm(!IsSignInForm);
    }

    const email = useRef(null);
    const password = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleButtonClick = () => {

        const errMessage = checkValidData(email.current.value, password.current.value);
        setErrorMessage(errMessage);
        if(errMessage) { return; }

        if(!IsSignInForm) {
            // Handle sign-up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            const user = userCredential.user;
            console.log("User signed up:", user);
            navigate("/browse");
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + ":: " + errorMessage);
        
        });
        } else {
            // Handle sign-in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User signed in:", user);   
            navigate("/browse");
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + ":: " + errorMessage);
    });
            
        }   
    }

  return (
    <div>
      <Header />
      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Netflix Background" className="w-full" />
     </div>
     <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-3/12 absolute p-8 bg-black opacity-80 my-36 mx-auto right-0 left-0 text-white rounde-lg">
        <h1 className="text-3xl font-bold py-2">{IsSignInForm ? "Sign In" : "Sign Up"}</h1>
        {IsSignInForm ? "" : <input className="p-2 my-4 w-full bg-gray-700" type="text" placeholder="Full Name" id="name" />}
        <input ref={email} className="p-2 my-4 w-full bg-gray-700" type="email" placeholder="Email Address" />
        
        <input ref={password} className="p-2 my-4 w-full bg-gray-700" type="password" placeholder="Password" />
        <p className="text-red-600 ">{errorMessage}</p>
        <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 font-bold" onClick={toggelForm}>{IsSignInForm ? "new to Netflix? Sign Up Now" : " Already have an account? Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
