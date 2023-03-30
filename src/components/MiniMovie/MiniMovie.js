import React, { Component } from "react";
import './MiniMovie.css'
import { NavLink } from 'react-router-dom'

class MiniMovie extends Component {
    constructor() {
        super()
        this.state = {
            isHoveredOn: false
        }
    }

    handleHover = () => {
        this.setState(prevState => {
            return {
                isHoveredOn: !prevState.isHoveredOn
            }
        })
    }
    
    render(){
        const {movie} = this.props
        const {id, poster_path, average_rating} = movie
        const {handleMovieView} = this.props
        
        return (
        // <NavLink to={`/${id}`} key={id}>
            
            <div id={id} className="movie" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} onClick={(event) => handleMovieView(event.target.id)}>

                
            <img id={id} src={poster_path} className="poster"/>
            

                    {this.state.isHoveredOn && 
                    <div id={id} className="rating-display">
                        <h3 id={id} className="rating-label">Rating:</h3>
                        <h2 id={id} className="rating-number">{average_rating.toFixed(1)}</h2>
                    </div>}
            </div>
        // </NavLink>
        )
    }
};

export default MiniMovie