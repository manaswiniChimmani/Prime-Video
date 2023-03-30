// Write your code here
import Slider from 'react-slick'
import MoviesSlider from '../MoviesSlider'
import './index.css'
import 'slick-carousel/slick/slick.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="img"
      />
      <div className="category-container">
        <h1 className="h1">Action Movies</h1>
        <Slider {...settings}>
          {moviesList.map(
            each =>
              each.categoryId === 'ACTION' && (
                <MoviesSlider key={each.id} movieDetails={each} />
              ),
          )}
        </Slider>
      </div>
      <div className="category-container">
        <h1 className="h1">Comedy Movies</h1>
        <Slider {...settings}>
          {moviesList.map(
            each =>
              each.categoryId === 'COMEDY' && (
                <MoviesSlider key={each.id} movieDetails={each} />
              ),
          )}
        </Slider>
      </div>
    </div>
  )
}

export default PrimeVideo
/* {moviesList
            .filter(each => each.categoryId === 'ACTION')
            .map(each => (
              <MoviesSlider key={each.id} movieDetails={each} />
            ))} */
