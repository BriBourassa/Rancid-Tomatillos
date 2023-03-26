import React, { Component } from 'react';
import Collection from '../Collection/Collection';
import Nav from '../Nav/Nav';
import MovieInfoView from '../MovieInfoView/MovieInfoView';
import getData from '../../apiCall';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      collectionView: true,
      currentMovie: null,
      error: ''
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(res => res.json())
      .then(data => {
        this.setState({ movies: data.movies })
      })
      .catch(err => this.setState({error: err.message}))
  }

  handleMovieView = (id) => {
    if(id === "button"){
      this.setState({collectionView: true})
    } else if(id){
      getData(id)
        .then(data => {
          this.setState({ currentMovie: data.movie, collectionView: false })
        })
        .catch(err => {
          this.setState({ error: err.message })
        })
    }
}

  render() {
    let mainView;
    if(!this.state.collectionView){
      mainView = <MovieInfoView movie={this.state.currentMovie} handleMovieView={this.handleMovieView}/>
    } else if (this.state.movies.length > 0) {
      mainView = <Collection movies={this.state.movies} handleMovieView={this.handleMovieView}/>
    } else if (this.state.error) {
      mainView = <h2>{this.state.error}</h2>
    }

    return (
      <>
        <Nav />
        <div className='movie-container'>
          {mainView}
        </div>
      </>
    )
  }
};

export default App;