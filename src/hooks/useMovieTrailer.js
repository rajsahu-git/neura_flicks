import { API_OPTIONS } from '../utils/Constant'
import { addTrailer } from '../utils/MovieSlice'
import { useDispatch } from 'react-redux'
import  { useEffect } from 'react'

const useMovieTrailer = (id)=>{
    const dispatch = useDispatch()
    const BackgroundVideoApi = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', API_OPTIONS)
        const json = await data.json()
        const filterData = json.results.filter((video)=>video.type=== "Trailer")
        const trailer = filterData.length ? filterData[0]:json[0]
        dispatch(addTrailer(trailer))
    }
    useEffect(()=>{
        BackgroundVideoApi()
    },[])
    
}

export default useMovieTrailer