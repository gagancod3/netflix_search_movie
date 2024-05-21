import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const MovieSuggestions = () => {
  const movies = useSelector((store)=> store?.searchMovie?.searchMovieResults);
  const searchQuery = useSelector((store)=> store?.searchMovie?.searchQuery);
  
  if(!searchQuery && !movies) return null;

  // if searchQuery is empty - don't show any results
  if(searchQuery.length <= 0) return null;

  // console.log(movies);
  return (
    <div>
      <MovieList title={"Top Searches for - "+searchQuery} content={movies}/>
    </div>
  )
}

export default MovieSuggestions