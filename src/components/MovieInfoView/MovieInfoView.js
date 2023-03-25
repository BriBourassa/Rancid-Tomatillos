import React, { Component } from "react";
import './MovieInfoView'

// functional component
const MovieInfoView = ({movie, handleMovieView}) => {
  const {title} = movie

  return (
    <>
      <button id="button" onClick={(event) => handleMovieView(event.target.id)}>Go Back to Main View</button>
      <h1>{title}</h1>
    </>
  )
}

export default MovieInfoView