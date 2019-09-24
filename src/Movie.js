import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

function Movie(props) {
    return (
        <div className="Movie">
            <div className="Columns">
                <MoviePoster poster={props.poster} alt={props.title}/>
            </div>
            <div className="Columns">
                <h1>{props.title}</h1>
                <div className="Genres">
                    {props.genres.map((genre, index) => <MovieGenre genre = {genre} key={index} />)}
                </div>
                <div className="Synopsis">
                    <LinesEllipsis
                        text={props.synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'/>
                </div>
            </div>
        </div>
    );
}

function MoviePoster(props) {
    return (<img src={props.poster} alt={props.alt} title={props.alt} className="Poster"/>);
}

function MovieGenre(props) {
    return (<span className="Genre">{props.genre}</span>);
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}


export default Movie;