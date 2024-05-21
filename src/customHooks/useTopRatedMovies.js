import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedHeader, addTopRatedMovies } from "../utils/movieSlice";
import { API_options } from "../utils/constants";


const useTopRatedMovies = () => {
  const nowTopRatedMovies = useSelector((store)=> store?.movies?.nowTopRatedMovies);

    
const dispatch = useDispatch();
// GET API call (TMDB.org)
const getMovieData = async function (){
  const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_options)

  const json = await data.json();
  // console.log(json.results);
  dispatch(addTopRatedMovies(json.results));
  dispatch(addTopRatedHeader("Top Rated"));
}

useEffect(()=>{
  (!nowTopRatedMovies && getMovieData());
  // getMovieData();
},[]);

}
export default useTopRatedMovies;