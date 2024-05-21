import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({movie_poster,movie_name}) => {
  if(!movie_poster) return null;

  return (
    <div className='w-40'>
      {movie_poster && (<img src={IMG_CDN_URL+movie_poster} alt={movie_name} />)}
        
    </div>
  )
}

export default MovieCard