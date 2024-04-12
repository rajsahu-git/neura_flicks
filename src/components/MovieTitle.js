import React from 'react'

function MovieTitle({ original_title, overview }) {
  return (
    <div className='w-screen h-screen aspect-video pt-[22%] px-8 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-3xl w-80 font-bold font-mono'> {original_title}</h1>
      <p className='w-1/2 font-serif py-2'>{overview}</p>
      <div >
        <button className='px-8 border py-3 border-slate-500 hover:bg-red-600 rounded-xl'>Play</button>
        <button className='mx-4 px-8 py-3 border border-slate-500 rounded-xl hover:bg-red-600 '>More Info</button>
      </div>
    </div>
  )
}

export default MovieTitle