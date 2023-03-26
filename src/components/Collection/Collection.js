import React from "react";
import MiniMovie from "../MiniMovie/MiniMovie";
import './Collection.css'
import PropTypes from 'prop-types';

const Collection = ({movies, handleMovieView}) => {
    const movieList = movies.map(movie => {
        return (
            <MiniMovie
                movie = {movie}
                key={movie.id}
                isHoveredOn={true}
                handleMovieView={handleMovieView}
            />
        )
    })
    return movieList
};

export default Collection

Collection.propTypes = {
   movies: PropTypes.array 
};

