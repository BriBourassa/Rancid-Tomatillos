import React, { Component } from 'react';
import movieData from '../../movieData';
import Collection from '../Collection/Collection';
import Nav from '../Nav/Nav';
import MovieInfoView from '../MovieInfoView/MovieInfoView';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies:  movieData.movies,
      collectionView: true,
      currentMovie: null
    }
  }

  handleMovieView = (id) => {
    if(id === "button"){
      this.setState({collectionView: true})
    } else if(id){
      const movie = this.state.movies.find(movie => movie.id === +id)
      this.setState({collectionView: false, currentMovie: movie})
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
