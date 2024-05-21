import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const VideoTitle = ({title, description}) => {
  return (
    <div className='absolute w-full aspect-video pt-[10%] text-white bg-gradient-to-r from-black'>
        <h1 className='pt-20 pb-2 px-5 text-2xl font-bold'>{title}</h1>
        <p className='ml-4 px-2 w-1/3 text-lg'>{description}</p>
        <div>
            <button className='w-32 ml-6 mt-2 p-2 bg-white rounded-md text-black font-bold opacity-100 hover:opacity-80'> 
            ▶️
            {/* <FontAwesomeIcon icon="fa-solid fa-play" /> */}
            Play
            </button>
            <button className='w-32 ml-2 mt-2 p-2 bg-slate-700 rounded-md text-white font-bold opacity-100 hover:opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle