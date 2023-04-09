import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import classes from "./MoviePoster.module.scss";
// import { useEffect } from "react";
const MoviePoster = props => {

    const { movie } = props;

    const Navigate = useNavigate();
    const ViewMovieHandler = () => {
        Navigate(`/Dashboard/${movie.movieId}`)
    }

    return (<>
        <div className={classes.imgcontainer}><img className={classes.posterimg} src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} onClick={ViewMovieHandler} /></div>
    </>);
}

export default MoviePoster;