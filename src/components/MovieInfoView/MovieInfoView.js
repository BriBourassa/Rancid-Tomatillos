import React from "react";
import './MovieInfoView.css'

const MovieInfoView = ({movie, handleMovieView}) => {
  const {id, poster_path, backdrop_path, title, average_rating, release_date} = movie
  const backgroundStyle = {  
    backgroundImage: "url(" + backdrop_path + ")",
    height: '100vh',
    width: '100vw',
    backgroundSize: "cover"
  }


  return (
    <>
      <div style={backgroundStyle}>
      <button id="button" onClick={(event) => handleMovieView(event.target.id)}>🍅 Go Back to Main View 🍅</button>
        <div className="movie-details">
          <h1>🍅 {title} 🍅</h1>
          <p>tagline:</p>
          <p>release date: {release_date}</p>
          <p>average rating: {average_rating.toFixed(1)}</p>
          <p>runtime:</p>
          <p>overview:</p>

        </div>
      </div>
    </>
  )
}

export default MovieInfoView