import React, { Component } from 'react';
import Collection from '../Collection/Collection';
import Nav from '../Nav/Nav';
import MovieInfoView from '../MovieInfoView/MovieInfoView';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      collectionView: true,
      currentMovie: null
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(res => res.json())
      .then(data => {
        // console.log('fetched data', data.movies)
        this.setState({ movies: data.movies })
      })
  }

  handleMovieView = (id) => {
    if(id === "button"){
      this.setState({collectionView: true})
    } else if(id){
      const movie = this.state.movies.find(movie => movie.id === +id)

      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        .then(res => res.json())
        .then(data => {
          console.log('dataaaaaaaaa', data.movie)
          this.setState({collectionView: false, currentMovie: data.movie})
        })
    }
  }

  render() {
    return (
      <>
        <Nav />
        <div className='movie-container'>
          {this.state.collectionView && <Collection movies={this.state.movies} handleMovieView={this.handleMovieView}/>}
          {!this.state.collectionView && <MovieInfoView movie={this.state.currentMovie} handleMovieView={this.handleMovieView}/> } 
        </div>
      </>
    )
  }

};

export default App;
