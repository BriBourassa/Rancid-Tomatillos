import React, { Component } from 'react';
import movieData from '../../movieData';
import Nav from '../Nav/Nav';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          id: 726739,
          poster_path: "https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg",
          backdrop_path: "https://image.tmdb.org/t/p/original//t22fWbzdnThPseipsdpwgdPOPCR.jpg",
          title: "Cats & Dogs 3: Paws Unite",
          average_rating: 7.4,
          release_date: "2020-10-02"
        }
      ]
    }
  }

  render() {
    return (
      <>
        <Nav />
        <Collection />
      </>

       // return instance of Collection (which has instances of Movie inside) here
    )
  }

};

export default App;
