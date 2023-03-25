import React, { Component } from "react";
import './MovieInfoView'

// functional component
const MovieInfoView = ({movie}) => {
  //pass in the whole movie object

  //render something based on the id?
  //{title ⬇️}
  return (
    <h1>{movie.title}</h1>
  )
}

export default MovieInfoView