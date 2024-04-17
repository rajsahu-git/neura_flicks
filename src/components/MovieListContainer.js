import React from 'react'
import { useMovieList, useUpComingMovie, usePopularMovie } from '../hooks/useMovieList'


import MovieList from './MovieList'


function MovieListContainer() {
  const movieList = useMovieList()
  const upComingMovie = useUpComingMovie()
  const PopularMovie = usePopularMovie()
  return (
    <div className='bg-black '>


      <div className='no-scrollbar  overflow-x-scroll scroll relative scroll-smooth items-center  '>
      <h1 className='text-white px-4 font-light text-3xl pt-5'>Now Playing</h1>
      
        <div className='flex'>
          < MovieList movieList={movieList} />
        </div>

      </div>
      <div className='no-scrollbar overflow-x-scroll'>
        <h1 className='px-4 text-white font-light text-3xl pt-5'>Upcoming</h1>
        <div className='flex'>
          < MovieList  movieList={upComingMovie} />
        </div>
      </div>

      <div className='no-scrollbar overflow-x-scroll'>
        <h1 className='px-4 text-white font-light text-3xl pt-5'>Trending</h1>
        <div className='flex'>
          < MovieList movieList={PopularMovie} />
        </div>
      </div>
      </div>
      
    
  )
}

export default MovieListContainer


