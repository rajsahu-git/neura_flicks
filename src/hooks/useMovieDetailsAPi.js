import { useEffect, useState } from "react"
import { API_OPTIONS } from "../utils/Constant"

const useMovieDetails=(movie_id)=>{
    const [movieData, useMovieData] = useState()
    

    const Movie_details = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movie_id+'?language=en-US', API_OPTIONS)
        const json = await data.json()
        useMovieData(json)
    }
    useEffect(()=>{
        Movie_details()
    },[])
    return movieData
}

 export default useMovieDetails