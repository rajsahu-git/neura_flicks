import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import MovieTitle from './MovieTitle'
import ShimmerUi from './ShimmerUi'

function MainContainer() {

  const movie = useSelector((store)=>store.movies?.movie)
  if(movie === null){
    return <ShimmerUi />
  }
  const mainMovie = movie[0]
  const { original_title,overview,id} = mainMovie
  
  return  (
    <div>
      <MovieTitle original_title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  )
}

export default MainContainer