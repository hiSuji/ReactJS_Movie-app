import React from 'react';
import PropTypes from 'prop-types';
// import './Movie.css';

function Movie(props) {
    return (
        <div>
            <MoviePoster poster={props.poster}/>
            <h1 >
                {props.title}
            </h1>
        </div>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

function MoviePoster(props) {
    return (<img src={props.poster} alt="movie poster"/>);
}

export default Movie;