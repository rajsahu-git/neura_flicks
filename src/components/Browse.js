import Header from './Header'
import useMovie from '../hooks/useMovieApi'
import MainContainer from './MainContainer'
import MovieListContainer from './MovieListContainer'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'


function Browse() {
  useMovie()
  const showGptSearchView = useSelector(store=>store.gpt.showGptSearch)
  
  return (
    <div>
        <Header />
      {showGptSearchView? <GptSearch />:<>
      
        <MainContainer />
        <MovieListContainer />
      </>}
      
    </div>
  )
}

export default Browse