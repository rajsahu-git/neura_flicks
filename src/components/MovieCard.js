import React from 'react'
import { IMG_CDN } from '../utils/Constant'


function MovieCard(moive) {
  let card = document.getElementById("slider")
  
  return (
    <div className='w-40 p-4'>
      <img id='slider' src={IMG_CDN+moive?.movie?.poster_path} alt={moive.movie?.title} />
    </div>
    
  )
}

export default MovieCard