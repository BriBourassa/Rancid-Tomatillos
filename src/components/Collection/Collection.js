import React from "react";
import MiniMovie from "../MiniMovie/MiniMovie";
import './Collection.css'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

const Collection = ({movies, handleMovieView}) => {
    const movieList = movies.map(movie => {
        return (
            <NavLink to={`/${movie.id}`} key={movie.id}>
                <MiniMovie
                    movie = {movie}
                    key={movie.id}
                    isHoveredOn={true}
                    handleMovieView={handleMovieView}
                    />
            </NavLink>
            
        )
    })
    return movieList
};

export default Collection

Collection.propTypes = {
   movies: PropTypes.array 
};

