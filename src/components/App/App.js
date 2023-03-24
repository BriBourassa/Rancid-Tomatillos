import React, { Component } from 'react';
import movieData from '../../movieData';
import Collection from '../Collection/Collection';
import Nav from '../Nav/Nav';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies:  movieData.movies
    }
  }

  render() {
    return (
      <>
        <Nav />
          <div className='movie-container'>
            <Collection movies={this.state.movies}/>
          </div>
    
      </>

       // return instance of Collection (which has instances of Movie inside) here
    )
  }

};

export default App;
