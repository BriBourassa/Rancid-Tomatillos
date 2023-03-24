import React, { Component } from "react";
import './Movie.css'

// class component

// state - clicked/unclicked 
    // clicked = modal shows

// also needs hover state (conditionally rendered)
// unhovered: poster & movie title
// hovered: overlay w/ rating

class Movie extends Component {
    constructor() {
        super()
    }
    
    render(){
        const {movie} = this.props
        // same thing ^^ const movie = props.movie ^^
        const {id, poster_path, backdrop_path, title, average_rating, release_date} = movie

        


        return (
        <div className="movie">
           <img src={poster_path} className="poster"/>
            <div>
                
            </div>
        </div>
        )
    }
};

export default Movie

// every time something passed, props obj created so it must be destructured