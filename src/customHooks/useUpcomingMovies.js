import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingHeader, addUpcomingMovies } from "../utils/movieSlice";
import { API_options } from "../utils/constants";


const useUpcomingMovies = () => {
  const nowUpcomingMovies = useSelector((store)=> store?.movies?.nowUpcomingMovies);
  
    
const dispatch = useDispatch();
// GET API call (TMDB.org)
const getMovieData = async function (){
  const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_options)

  const json = await data.json();
  console.log(json.results);
  dispatch(addUpcomingMovies(json.results));
  dispatch(addUpcomingHeader("Upcoming"));
}

useEffect(()=>{
  (!nowUpcomingMovies && getMovieData());
  // getMovieData();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);

}
export default useUpcomingMovies;