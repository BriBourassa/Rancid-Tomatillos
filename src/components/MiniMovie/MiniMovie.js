import React, { Component } from "react";
import './MiniMovie.css'

// class component

// state - clicked/unclicked 
    // clicked = modal shows

// also needs hover state (conditionally rendered)
// unhovered: poster & movie title
// hovered: overlay w/ rating

class MiniMovie extends Component {
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
                isHoveredOn: !prevState.isHoveredOn
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
                {this.state.isHoveredOn && 
                <div className="rating-display">
                    <h3 className="rating-label">Rating:</h3>
                    <h2 className="rating-number">{average_rating.toFixed(1)}</h2>
                </div>}
            
        </div>
        )
    }
};

export default MiniMovie

// every time something passed, props obj created so it must be destructured