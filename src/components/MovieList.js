import React from 'react'
import MovieCard from './MovieCard'


function MovieList(moiveList) {
    const movie = moiveList?.movieList?.results    

    
  return (
    <div  className='flex relative items-center'>
        {/* <MdChevronLeft size={40}  className="sticky cursor-pointer text-zinc-200" /> */}
        
            {movie?.map((data)=>( 
                <MovieCard id='slider' className="card" key={data.id} movie={data} />
            ))}
        
        {/* <MdChevronRight  size={40} className="sticky right-0 cursor-pointer text-zinc-200 " /> */}
    </div>
    
  )
}

export default MovieList