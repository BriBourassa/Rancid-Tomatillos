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
        // console.log('fetched data', data.movies)
        this.setState({ movies: data.movies })
      })
      .catch(err => this.setState({error: err.message}))
  }

  handleMovieView = (id) => {
    if(id === "button"){
      this.setState({collectionView: true})
    } else if(id){
      const movie = this.state.movies.find(movie => movie.id === +id)

      // fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      // .then(res => {
      //   if(!res.ok){
      //     console.log('res.status>>>>>>>>', res.status)
      //     throw new Error('Issue with request: ', res.status);
      //   }
      //   return res.json()}
      // )
      getData(id)
        .then(data => {
          // console.log(data)
          this.setState({ ideas: data })
        })
        .catch(err => {
          // console.log('this is err>>>>>>', err)
          this.setState({ error: err.message })
        })
    }
}

  render() {
    return (
      <>
        <Nav />
        <div className='movie-container'>
          {this.state.error && <h2>{this.state.error}</h2>}
          {this.state.collectionView && <Collection movies={this.state.movies} handleMovieView={this.handleMovieView}/>}
          {!this.state.collectionView && <MovieInfoView movie={this.state.currentMovie} handleMovieView={this.handleMovieView}/> } 
        </div>
      </>
    )
  }

};

export default App;
