import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";


const usePlayTrailer = (movieId) => {

const dispatch = useDispatch();
  // console.log(movieId);

  const getVideoBackground = async function () {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_options
    );
    const json = await data.json();
    // console.log(json);
    const filterTrailerData = json.results.filter((data) => {
      if (data.type === "Trailer") return data;
    });
    const trailer = filterTrailerData.length ? filterTrailerData[0] : json.results[0];
    dispatch(addTrailer(trailer));
  }; 

  useEffect(() => {
    getVideoBackground();
  }, []);

}

export default usePlayTrailer;