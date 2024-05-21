import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingHeader, addNowPlayingMovies } from "../utils/movieSlice";
import { API_options } from "../utils/constants";


const useNowPlayingMovies = () => {

  const nowPlayingMovies = useSelector((store)=> store?.movies?.nowPlayingMovies);
  console.log(nowPlayingMovies);
  // console.log('API key....',API_options);
    
const dispatch = useDispatch();
// GET API call (TMDB.org)
const getMovieData = async function (){
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_options)
  const json = await data.json();
  // console.log(json.results);
  dispatch(addNowPlayingMovies(json.results));
  dispatch(addNowPlayingHeader("Now Playing"));
}

// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(()=>{
  (!nowPlayingMovies && getMovieData())
  // getMovieData();
},[]);

}
export default useNowPlayingMovies;