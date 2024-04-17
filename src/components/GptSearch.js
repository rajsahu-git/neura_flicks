import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggetion from './GptMovieSuggetion'


function GptSearch() {
  return (
    <div className="bg-[#130f40] h-[100vh]">
      <GptSearchBar />
      <GptMovieSuggetion />
    </div>
  )
}

export default GptSearch