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
      collectionView: true
    }
  }

  //on click of movie changes state of App, because App is what is displaying the collection. So if we want to conditionally render the movie info view (or component), it should happen in App. So we write a method in App and pass it in the props to the movie component, and when that movie component is clicked the method will run, change the state of App, and that will decide the render.  
  //Do we need a new component? 

  //id of poster/ miniMovie, then this app state can be set to the id
  handleMovieView = (event, id) => {
    this.setState({collectionView: false})
    //set state to be the id as well
  }

  //pass in the id as a prop of Movie Info View
  render() {
    return (
      <>
        <Nav />
          <div className='movie-container'>
            {this.state.collectionView && <Collection movies={this.state.movies} handleMovieView={this.handleMovieView}/>}
            {!this.state.collectionView && <MovieInfoView movie={this.state.movies[10]}/> } 
          </div>
    
      </>

       // return instance of Collection (which has instances of Movie inside) here
    )
  }

};

export default App;
