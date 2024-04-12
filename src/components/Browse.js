import Header from './Header'
import useMovie from '../hooks/useMovieApi'
import MainContainer from './MainContainer'
import MovieListContainer from './MovieListContainer'


function Browse() {
  useMovie()
  return (
    <div>
      <Header />
      <MainContainer />
      <MovieListContainer />
      {/*
        MainContainer
          VideoBackground
          Video Title
        Secondary Container
          - MovieList *n
            Cards *n

      */}
    </div>
  )
}

export default Browse