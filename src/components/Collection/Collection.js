import React from "react";
import MiniMovie from "../MiniMovie/MiniMovie";
import './Collection.css'

// functional componenet
// map through movies


const Collection = ({movies, handleMovieView}) => {
    const movieList = movies.map(movie => {

        return (
            <MiniMovie
                movie = {movie}
                // id={movie.id}
                // poster={movie.poster_path}
                // backdrop={movie.backdrop_path}
                // title={movie.title}
                // rating={movie.average_rating}
                // releaseData={movie.release_date}
                key={movie.id}
                isHoveredOn={true}
                handleMovieView={handleMovieView}
            />
        )
    })

    return movieList
};

export default Collection


