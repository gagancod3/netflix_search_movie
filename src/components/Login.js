import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

//firebase import
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AvatarIcon, NETFLIX_BG } from "../utils/constants";

const Login = () => {
  const [signup, setSignup] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  //useRef is used
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  // Toggles between Sign up & Sign in
  const handleFormChange = () => {
    setSignup(!signup);
  };
  // sign in/sign up button event
  const handleButtonClick = () => {
    //Validate form data

    // console.log(email.current.value, password.current.value);
    // console.log('user name  ',userName.current.value);

    //sign up
    if (signup && userName?.current?.value !== null) {
      const message = checkValidData(
        email.current.value,
        password.current.value,
        userName.current.value
      );
      // console.log(message);
      setErrorMessage(message);
      //if error message = 'string' ; otherwise message = null ; so if it's 'string' it'll exit on next line
      if (message) return;

      // **Sign up / Sign in (LOGIC)

      //Sign up
      if (signup) {
        // console.log('sign up if entered');

        //Creates a new user account associated with the specified email address and password
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;

            // Updates user's profile data
            updateProfile(user, {
              displayName: userName.current.value,
              photoURL: AvatarIcon
                
            })
              .then(() => {
                // console.log(auth, ' auth current user check');
                const { uid, email, displayName, photoURL } = auth.currentUser; // Destructuring Object (currentUser)

                // Updating redux store user details
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
    }
    //Sign in
    else {
      const message = checkValidData(
        email.current.value,
        password.current.value
      );
      // console.log(message);
      setErrorMessage(message);

      // sign in
      if (!signup) {
        // console.log('sign in if entered');

        // Asynchronously signs in using an email and password
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            // const user = userCredential.user;
            // console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            //setting error message from firebase api response
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
    }
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src= {NETFLIX_BG}
          alt="background_img"
        />
      </div>
      {/* below statement, we've used "onSubmit={(e)=> e.preventDefault()} to avoid direct submit of form values */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md"
      >
        <h1 className="font-bold text-3xl py-4">
          {signup ? "Sign Up" : "Sign In"}
        </h1>
        {signup ? (
          <>
            <input
              ref={userName}
              type="text"
              placeholder="Name"
              className="p-4 my-4 w-full bg-gray-800 rounded-lg"
            />
          </>
        ) : null}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {signup ? "Sign Up" : "Sign In"}
        </button>
        <p onClick={handleFormChange} className="font-bold cursor-pointer">
          {signup ? "Already a user, Sign in" : "New to Netflix? Sign up Now"}
        </p>
        {/* <button onClick={handleFormChange} className='font-bold'>{signup ? "sign up" :"sign in"}</button> */}
      </form>
    </>
  );
};

export default Login;