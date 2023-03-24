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

  //on click of movie changes state of App, because App is what is displaying the collection. So if we want to conditionally render the movie info view (or component), it should happen in App. So we write a method in App and pass it in the props to the movie component, and when that movie component is clicked the method will run, change the state of App, and that will decide the render.  
  //Do we need a new component? 

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
