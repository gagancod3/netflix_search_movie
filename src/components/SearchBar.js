import React, { useRef } from "react";
import {lang} from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constants";
import { searchQuery, searchedMovies } from "../utils/searchMovieSlice";

const SearchBar = () => {
    const dispatch = useDispatch();
    const queryText = useRef(null);
    const langIdentifier = useSelector((store)=> store?.language?.language);
    // console.log(lang[langIdentifier]);

    //Movie Search 
    const handleMovieSearch = async () => {
      console.log(queryText.current.value);
      const query = queryText.current.value;
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+query+'&include_adult=false&language=en-US&page=1', API_options);

      const json = await data.json();

      // console.log(json.results);
      dispatch(searchedMovies(json.results));
      dispatch(searchQuery(query));
    }
  return (
    <>
      <div className="flex justify-center pt-[10%]">
        <form className="grid grid-cols-12 p-4 m-4 w-1/2 bg-black rounded-lg" onSubmit={(e)=> { 
          console.log(e);
          return e.preventDefault()}}>
          <input
            ref={queryText}
            className="col-span-9 p-2 rounded-lg"
            type="text"
            placeholder={lang[langIdentifier].SearchPlaceholder}
          />
          <button className="mx-2 col-span-3 bg-red-700 text-white rounded-lg " onClick={handleMovieSearch}>
          {lang[langIdentifier].searchBtnText}
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;