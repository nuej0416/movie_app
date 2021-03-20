import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./SearchMovie.css";


function SearchMovie({ id, year, title, summary, poster, genres, rating, runtime}) {
    return (
            <div className = "s_movie">
                <Link to = {
                    {pathname : `/movie/${id}`,
                    state : {
                        year,
                    title,
                    summary,
                    poster,
                    genres,
                    rating,
                    runtime,
                    }
                }}
                >
                    <img src = {poster} alt = {title} title = {title} />
                    <div className = "s_movie_data">
                        <h3 className = "s_movie_title"> {title} </h3>
                        <p className = "s_movie_rating"> {rating} </p>
                        <p className = "s_movie_year"> {year} </p>
                    </div>
                </Link>
            </div>
    )
};

SearchMovie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired
}

export default SearchMovie;