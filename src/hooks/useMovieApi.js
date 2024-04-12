import { addMovie } from "../utils/MovieSlice"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/Constant"
import { useEffect } from "react"


const useMovie = () =>{
    const dispatch = useDispatch()
    const movies_api = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
      const json = await data.json()
      
        dispatch(addMovie(json.results))
    }


    useEffect(()=>{
      movies_api()
    },[])
}

export default useMovie;