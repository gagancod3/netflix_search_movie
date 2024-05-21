import React from 'react'
import SearchBar from './SearchBar'
import MovieSuggestions from './MovieSuggestions'
import { NETFLIX_BG } from '../utils/constants'

const SearchPage = () => {
  return (
    <div>
         <div className='absolute -z-20'>
    <img
        src= {NETFLIX_BG}
        alt="background_img"
      />
    </div>
        <SearchBar />
        <MovieSuggestions />
    </div>
  )
}

export default SearchPage