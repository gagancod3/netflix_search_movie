import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const PrimaryContainer = () => {

   const movies = useSelector((store) => store.movies?.nowPlayingMovies);
   if(!movies) return

   const mainMovie = movies[0];
//    console.log(movies, mainMovie);

   const {original_title, overview, id} = mainMovie;
//    console.log(original_title);

  return (
    <div>
        <VideoTitle title={original_title} description={overview}/>
        <VideoBackground movieId={id} />
    </div>
  )
}

export default PrimaryContainer