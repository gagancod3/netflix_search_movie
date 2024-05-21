// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//firebase Auth import
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAO1BlKM-lOB08Gv7XppXGbXgBRZ32pknY",
  authDomain: "netflixgpt1-498a1.firebaseapp.com",
  projectId: "netflixgpt1-498a1",
  storageBucket: "netflixgpt1-498a1.appspot.com",
  messagingSenderId: "833749287442",
  appId: "1:833749287442:web:91ed9c20d41662bddececb",
  measurementId: "G-N18VPLPSZH"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// common place for getAuth()
export const auth = getAuth();