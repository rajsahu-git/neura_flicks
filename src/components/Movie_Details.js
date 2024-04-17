import React from 'react'
import { useParams } from 'react-router-dom'
import useMovieDetails from '../hooks/useMovieDetailsAPi'
import { IMG_CDN } from '../utils/Constant'
import { USER_IMG_LOGO } from '../utils/Constant'

function Movie_Details() {
  const {movie_id} = useParams()
  const movieData = useMovieDetails(movie_id)
  console.log()
  return (
    <div className='grid grid-cols-3 gap-1 text-white bg-black h-[100vh]'>
      <div className='col-span-1'>
        <img className='pt-10 pb-5 px-10 w-96' src={IMG_CDN+movieData?.poster_path} alt={movieData?.title} />
        <h1 className='text-white px-10 text-3xl w-full'>{movieData?.title}</h1>
      </div>
      <div className='col-span-2'>
        <span className='flex space-x-10'>
        <h3 className='text-gray-400 pt-10 text-5xl '>{movieData?.original_title.toUpperCase()}   </h3>
        <h5 className='pt-14 font-serif text-green-600'>  {movieData?.tagline}</h5>
        </span>
        <div className='text-white pt-5 pb-2 flex '>
          <p className='pr-4 text-red-700'>Released Country :- </p>
          <ul className='flex space-x-4'>
            {movieData?.production_countries?.map((data)=>(
              <li className=''>{data?.name} ({data?.iso_3166_1}),</li>
            ))}
          </ul>
        </div>
        <div>
          <span className='flex pt-3'>
              <h3 className='pr-12  text-red-700'>Release Date :-</h3>
              <p>{movieData?.release_date}</p>
          </span>
          <span className='flex pt-3'>
              <h3 className='pr-20 text-red-700'>Runtime :- </h3>
              <p>{movieData?.runtime} Min.</p>
          </span>
          <span className='flex pt-3'>
          <h3 className='pr-[5.5rem] text-red-700'>Budget :- </h3>
              <p>{(movieData?.budget===0)?"UPCOMING":   movieData?.budget}</p>
          </span>
          <span className='flex pt-3'>
          <h3 className='pr-20 text-red-700'>Revenue :- </h3>
              <p>{(movieData?.revenue===0)?"UPCOMING":   movieData?.revenue}</p>
          </span>
          <span className='flex pt-3'>
          <h3 className='pr-24 text-red-700'>Rating :- </h3>
              <p>{(movieData?.vote_average===0)?"UPCOMING":movieData?.vote_average}</p>
          </span>
        </div>
        <div className='flex pt-3'>
          <h4 className='text-red-700 pr-16'>Description :-</h4>
          <p className='w-3/4'>{movieData?.overview}</p>
        </div>
        {/* <div >
          <h1>Poduction Companies</h1>
          <span className='flex flex-wrap space-x-3'>
          {movieData?.production_companies?.map((data)=>(
            <div>
              <img className='w-20' src={(data?.logo_path === null)?USER_IMG_LOGO:IMG_CDN+data?.logo_path} alt={data.name} />
              <h6>{data?.name}</h6>
            </div>
          ))}
          </span>
        </div> */}
      </div>
    </div>
  )
}

export default Movie_Details