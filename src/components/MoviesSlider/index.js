// Write your code here
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movieDetails} = props

  return (
    <div>
      <MovieItem movieDetails={movieDetails} />
    </div>
  )
}
export default MoviesSlider
