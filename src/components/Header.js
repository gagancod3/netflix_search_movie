import React, { useEffect, useState } from "react";

//firebase
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

import { useNavigate } from "react-router-dom"; //hook
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { changeSearchPageState } from "../utils/showSearchPageSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/languageSlice";
import { searchQuery, searchedMovies } from "../utils/searchMovieSlice";

const Header = () => {
  const isSearchPage = useSelector((store) => store?.searchPage?.isSearchPage);

  //Returns the dispatch function from the Redux store.
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [avatarDropdown, setAvatarDropdown] = useState(false);

  //Sign out button event
  const handleSignOut = () => {
    // Signs out the current user
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // If an error occured
        navigate("/error");
      });
  };
  const handleAvatarClick = () => {
    if (avatarDropdown) setAvatarDropdown(false);
    else setAvatarDropdown(true);
  };

  const handleToggleSearchPage = () => {
    dispatch(changeSearchPageState());

    // Clearing the searchQuery and movie results on Search Page
    dispatch(searchQuery(null));
    dispatch(searchedMovies(null));
  };

  // called initially (we added OnAuthStateChanged() in Header.js since it's rendered on every page of our webApp)
  useEffect(() => {
    //firebase provided function - Adds an observer for changes to the user's sign-in state.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // Redirect to '/browse' using 'useNavigate' Hook
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        // Navigates to '/' <Login /> component
        navigate("/");
        // Sign-out successful
      }
    });
    return () => unsubscribe;
  }, [dispatch, navigate]);

  const handleSelectLanguage = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
        <img className="w-44" src={NETFLIX_LOGO} alt="netflix_logo" />

        {/* Conditional Rendering ; Here, only if 'user' is having user details in redux store then only following div is rendered */}
        {user && (
          <div className="flex">
            {isSearchPage && (
              <select
                className=" h-8 p-1 my-1 bg-gray-500 text-white rounded-lg"
                onClick={handleSelectLanguage}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="px-2 py-0 mx-6 my-1 h-8 bg-purple-700 text-white rounded-lg"
              onClick={handleToggleSearchPage}
            >
              {isSearchPage ? "Homepage" : "Search"}
            </button>
            <img
              className="h-9 w-9 rounded-md"
              src={user?.photoURL}
              alt="usericon"
              onClick={handleAvatarClick}
            />

            {avatarDropdown && (
              <div className=" flex absolute mt-12 ml-28 p-2 w-40 bg-black text-white border-2 border-red-700 rounded-lg">
                <ul className="w-32 my-1">
                  <li className="my-1 hover:text-gray-400 cursor-pointer">
                    Change profile
                  </li>
                  <li className="my-1 hover:text-gray-400 cursor-pointer">
                    Settings
                  </li>
                  <li className="my-1 hover:text-gray-400 cursor-pointer">
                    Info
                  </li>
                </ul>
              </div>
            )}

            <button
              className="ml-4 mt-2 w-28 h-7 bg-red-700 text-white border-s-red-700 rounded-lg hover: cursor-pointer"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;