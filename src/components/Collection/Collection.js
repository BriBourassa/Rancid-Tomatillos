import React from "react";
import './Collection.css'

// functional componenet
// map through movies


const Collection = ({movies}) => {

    const movieList = movies.map(movie => {
        return (
            <Movie
                id={movie.id}
                poster={movie.poster_path}
                backdrop={movie.backdrop_path}
                title={movie.title}
                rating={movie.average_rating}
                releaseData={movie.release_date}
                key={movie.id}
            />
            // destructure?^^
        )
    })

    // return (
   
    // )
};

export default Collection


