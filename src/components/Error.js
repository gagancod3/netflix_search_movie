import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate();
  const handleGotoHome = () => {
    navigate("/");
  }
  return (
    <>
    <div className='bg-slate-800 w-full h-screen'>
    <div className='p-2 pt-[20%] flex justify-center text-white'>
      <h1 className='mr-2 font-bold'>Sorry...looks like the website is down right now!</h1>
      <h2>Please try again after sometime.</h2>
    </div>
    <div className='flex justify-center'>
      <button className='w-36 p-2 bg-gray-500 text-white rounded-lg' onClick={handleGotoHome}>Home</button>
    </div>
    </div>
    </>
  )
}

export default Error