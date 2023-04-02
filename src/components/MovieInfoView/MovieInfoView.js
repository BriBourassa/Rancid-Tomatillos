import React, { Component } from "react";
import './MovieInfoView.css'
import PropTypes from 'prop-types';
import { getSingleMovie } from "../../apiCall";
import { NavLink } from 'react-router-dom'


class MovieInfoView extends Component {
  constructor(){
    super();
    this.state = {
      currentMovie: '',
    }
  }

  componentDidMount = () => {    
    getSingleMovie(this.props.movieid)
        .then(data => {
          this.setState({ currentMovie: data.movie})
          // console.log('data.movoie<>>>>>>>>>', data.movie)
        })
        .catch(err => {
          this.setState({ error: err.message })
        })
  }

  render() {
    const { backdrop_path, title, average_rating, release_date, tagline, runtime, overview, genres} = this.state.currentMovie
    const backgroundStyle = {  
      backgroundImage: "url(" + backdrop_path + ")",
      height: '100vh',
      width: '100vw',
      backgroundSize: "cover"
    }
    if(this.state.currentMovie){
      return (
        <>
          <div style={backgroundStyle}>
            <NavLink to="/">
              <button id="button" onClick={(event) => this.props.handleMovieView(event.target.id)}>🍅 Go Back to Main View 🍅</button>
            </NavLink>
            <div className="movie-details">
              <h1>🍅 {title} 🍅</h1>
              <p className="tagline">{tagline}</p>
              <p>Release Date: {release_date}</p>
              <p>Average Rating: {average_rating.toFixed(1)} &#9733;</p>
              <p>Runtime: {runtime} minutes</p>
              <p>{overview}</p>
              <p>{genres.join(', ')}</p>
            </div>
          </div>
        </>
      )
    }
  }  
};


export default MovieInfoView

MovieInfoView.propTypes = {
  movie: PropTypes.object
}