import { useEffect, useState } from "react";
import { API_OPTIONS, MOVIE_LIST_OPTIONS } from "../utils/Constant";


export const useMovieList=()=>{
    const [movieLists,setMovieLists] = useState()
    useEffect(()=>{
        movieList()
    },[])

    const movieList = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',MOVIE_LIST_OPTIONS)
        const json = await data.json()
        setMovieLists(json)
    }
    return movieLists
}

export const useUpComingMovie = ()=>{
    const [upComingMovie,setUpComingMovie] = useState()
    useEffect(()=>{
        upComingMovies()
    },[])
    const upComingMovies = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",API_OPTIONS)
        const json = await data.json()
        setUpComingMovie(json)
    }
    return upComingMovie
}

export const usePopularMovie = ()=>{
    const [upPopularMovie,setPopularMovie] = useState()
    useEffect(()=>{
        upPopularMovies()
    },[])
    const upPopularMovies = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",API_OPTIONS)
        const json = await data.json()
        setPopularMovie(json)
    }
    return upPopularMovie
}
