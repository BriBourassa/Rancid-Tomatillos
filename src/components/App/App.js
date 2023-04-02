import React, { Component } from 'react';
import Collection from '../Collection/Collection';
import Nav from '../Nav/Nav';
import MovieInfoView from '../MovieInfoView/MovieInfoView';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Error from '../Error/Error';
import { getAllMovies } from '../../apiCall';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      collectionView: true,
      error: '',
      isLoading: true
    }
  }

  componentDidMount = () => {
    getAllMovies()
    .then(data => {
      this.setState({ movies: data.movies, isLoading: false })
    })
    .catch(err => this.setState({error: err.message, isLoading: false}))
  }

  handleMovieView = (id) => {
    if(id === "button"){
      this.setState({collectionView: true})
    } else if(id){
      this.setState({collectionView: false})
    }
  }

  render() {

    const loading = this.state.isLoading && <h2 className="loading-text">Loading...</h2>

    let routes= (
      <Switch>
        <Route exact path="/" render={() => <Collection movies={this.state.movies} handleMovieView={this.handleMovieView}/>}/>
        <Route path="/movies/:movieid" render={({match}) => {
          return <MovieInfoView movieid={match.params.movieid} handleMovieView={this.handleMovieView}/>}}/>
        <Route path="/*" render={() => <Error />}/>
        <Route path="/movies/*" render={() => <Error />}/>
      </Switch>
    )

    let errMessage = this.state.error && <div className='err-container'><h2 className="error-message">{this.state.error}</h2></div>

    return (
      <>
        <Nav />
          {errMessage}
          <div className='movie-container'>
            {loading}
            {routes}
          </div>
      </>
    )
  }
};

export default App;