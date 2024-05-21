import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularHeader, addPopularMovies } from "../utils/movieSlice";
import { API_options } from "../utils/constants";


const usePopularMovies = () => {
  const nowPopularMovies = useSelector((store)=> store?.movies?.nowPopularMovies);

    
const dispatch = useDispatch();
// GET API call (TMDB.org)
const getMovieData = async function (){
  const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_options)

  const json = await data.json();
  // console.log(json.results);
  dispatch(addPopularMovies(json.results));
  dispatch(addPopularHeader("Popular"));
}

useEffect(()=>{
  (!nowPopularMovies && getMovieData());
  // getMovieData();
},[]);

}
export default usePopularMovies;