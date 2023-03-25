import React, { Component } from "react";
import './MovieInfoView'

// functional component
const MovieInfoView = ({movie}) => {
  const {title} = movie
  return (
    <h1>{title}</h1>
  )
}

export default MovieInfoView