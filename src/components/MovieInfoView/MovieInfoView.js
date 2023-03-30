import React from "react";
import './MovieInfoView.css'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

const MovieInfoView = ({movie, handleMovieView}) => {
  const { backdrop_path, title, average_rating, release_date, tagline, runtime, overview, genres} = movie
  const backgroundStyle = {  
    backgroundImage: "url(" + backdrop_path + ")",
    height: '100vh',
    width: '100vw',
    backgroundSize: "cover"
  }
console.log('hi hello this is movie', movie)
  return (
    <>
      <div style={backgroundStyle}>
      <NavLink to="/">
        <button id="button" onClick={(event) => handleMovieView(event.target.id)}>🍅 Go Back to Main View 🍅</button>
      </NavLink>
        <div className="movie-details">
          <h1>🍅 {title} 🍅</h1>
          <p>tagline: {tagline}</p>
          <p>release date: {release_date}</p>
          <p>average rating: {average_rating.toFixed(1)}</p>
          <p>runtime: {runtime}</p>
          <p>overview: {overview}</p>
          <p>genres: {genres.join(', ')}</p>
        </div>
      </div>
    </>
  )
};

export default MovieInfoView

MovieInfoView.propTypes = {
  movie: PropTypes.object
};