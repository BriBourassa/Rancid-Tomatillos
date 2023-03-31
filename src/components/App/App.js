import React, { Component } from 'react';
import Collection from '../Collection/Collection';
import Nav from '../Nav/Nav';
import MovieInfoView from '../MovieInfoView/MovieInfoView';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { getAllMovies } from '../../apiCall'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      collectionView: true,
      error: ''
    }
  }

  componentDidMount = () => {
    getAllMovies()
    .then(data => {
      this.setState({ movies: data.movies })
    })
    .catch(err => this.setState({error: err.message}))
  }

  handleMovieView = (id) => {
    if(id === "button"){
      this.setState({collectionView: true})
    } else if(id){
      this.setState({collectionView: false})
    }
  }

  render() {

    let routes= (
      <Switch>
        <Route exact path="/" render={() => <Collection movies={this.state.movies} handleMovieView={this.handleMovieView}/>}/>
        <Route path="/:movieid" render={({match}) => {
        return <MovieInfoView movieid={match.params.movieid} handleMovieView={this.handleMovieView}/>}   
      }/>
      </Switch>
    )

    return (
      <>
        <Nav />
            {this.state.error && <div className='err-container'><h2 className="error-message">{this.state.error}</h2></div>}
            <div className='movie-container'>
              {routes}
          </div>
      </>
    )
  }
};

export default App;