import React, { useState } from "react";

//firebase
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom"; //hook
import { useSelector } from "react-redux";

//material ui
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const [avatarDropdown, setAvatarDropdown] = useState(false);

  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  // console.log(user);

  const handleSignOut = () => {
    // Signs out the current user
    signOut(auth)
      .then(() => {
        // Navigates to '/' <Login /> component
        navigate("/");
        // Sign-out successful
      })
      .catch((error) => {
        // If an error occured
        navigate("/error");
      });
  };
  const handleAvatarClick = () => {
    setAvatarDropdown(true);
  };

  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
        <img
          className="w-44"
          src={NETFLIX_LOGO}
          alt="netflix_logo"
        />

        {/* Conditional Rendering ; Here, only if 'user' is having user details in redux store then only following div is rendered */}
        {user && (
          <div className="flex">
            <div>
              <FormControl variant="filled" sx={{ m: 1, minWidth: 70 }}>
                <InputLabel id="demo-simple-select-filled-label">
                  <img
                    className="h-9 w-9 rounded-md"
                    src={user?.photoURL}
                    alt="usericon"
                    onClick={handleAvatarClick}
                  />
                </InputLabel>
                {avatarDropdown && (
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    // value={age}
                    // onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Profiles</em>
                    </MenuItem>
                    <MenuItem value={10}>Change profile</MenuItem>
                    <MenuItem value={20}>Settings</MenuItem>
                    <MenuItem value={30} onClick={handleSignOut}>⬇ Sign out</MenuItem>
                  </Select>
                )}
              </FormControl>
            </div>
            {/* <button onClick={handleSignOut}>
              <span className="m-2 p-2">⬇ Sign out</span>
            </button> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
