import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store?.movies);
  if (!movies) return


  return (
    <div className='bg-black'>
    <div className='-mt-40 relative z-20'>
      <MovieList title={movies?.movieCategoryHeader?.nowPlaying} content={movies?.nowPlayingMovies}/>
      <MovieList title={movies?.movieCategoryHeader?.nowPopular} content={movies?.nowPopularMovies}/>
      <MovieList title={movies?.movieCategoryHeader?.nowTopRated} content={movies?.nowTopRatedMovies}/>
      <MovieList title={movies?.movieCategoryHeader?.nowUpcoming} content={movies?.nowUpcomingMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer