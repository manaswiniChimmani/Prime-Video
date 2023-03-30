// Write your code here
import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <Popup
      modal
      trigger={<img src={thumbnailUrl} alt="thumbnail" />}
      className="popup-content"
    >
      {close => (
        <>
          <div>
            <ReactPlayer url={videoUrl} controls />
          </div>
          <button
            type="button"
            data-testid="closeButton"
            className="btn"
            onClick={() => close()}
          >
            <IoMdClose className="icon" />
          </button>
        </>
      )}
    </Popup>
  )
}
export default MovieItem
