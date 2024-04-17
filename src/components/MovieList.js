import React from 'react'
import MovieCard from './MovieCard'
import ShimmerUi from './ShimmerUi'
import { Link } from 'react-router-dom'



function MovieList(moiveList) {
  const movie = moiveList?.movieList?.results
    
    if(movie === null){
      return <ShimmerUi />
    }  

  return (
    <div  className='flex relative items-center'>
      
        {/* <MdChevronLeft size={40}  className="sticky cursor-pointer text-zinc-200" /> */}
        
            {movie?.map((data)=>( 
                <Link key={data.id} to={"/movie_details/"+data.id}>
                  <MovieCard  id='slider' className="card" key={data.id} movie={data} />
                </Link>
                ))}
        {/* <MdChevronRight  size={40} className="sticky right-0 cursor-pointer text-zinc-200 " /> */}
    </div>
    
  )
}

export default MovieList