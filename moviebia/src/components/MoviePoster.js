import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import classes from "./MoviePoster.module.scss";
// import { useEffect } from "react";
const MoviePoster = props => {
    const Navigate = useNavigate();
    const ViewMovieHandler = () => {
        Navigate('/Dashboard/Movie')
    }

    const [moviePath, setMoviePath] = useState('');

    const fetchDetails = useCallback(async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${props.movieId}?api_key=4b11b7e0cdfd1a7257e990731db91e96`)
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        // console.log(data);
        setMoviePath(data.poster_path)
    }, [props.movieId])

    useEffect(() => {
        fetchDetails();
    }, [fetchDetails])

    return (<>
        <div className={classes.imgcontainer}><img className={classes.posterimg} src={`http://image.tmdb.org/t/p/w500${moviePath}.jpg`} alt={props.movieTitle} onClick={ViewMovieHandler} /></div></>);
}

export default MoviePoster;