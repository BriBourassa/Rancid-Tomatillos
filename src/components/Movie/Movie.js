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
        this.state = {
            potato: false
        }
    }

    handleHover = event => {
        console.log('hi')
        // this runs 3 times each hover for some reason
        this.setState(prevState => {
            return {
                potato: !prevState.potato
            }
        })
    }
    
    render(){
        const {movie} = this.props
        // same thing ^^ const movie = props.movie ^^
        const {id, poster_path, backdrop_path, title, average_rating, release_date} = movie

        


        return (
        <div className="movie" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
           <img src={poster_path} className="poster"/>
           
                {this.state.potato && 
                <div className="rating-display">
                    <h2 className="rating-number">{average_rating.toFixed(1)}</h2>
                </div>}
            
        </div>
        )
    }
};

export default Movie

// every time something passed, props obj created so it must be destructured