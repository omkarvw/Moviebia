
import classes from "./MovBanner.module.scss";
import banimage from "../sampleBanner.jpg";
import { useState, useCallback, useEffect } from "react";
import StarRatings from 'react-star-ratings';

const MovBanner = (props) => {
    const [currRating, setCurrRating] = useState({ rating: 0 });
    function changeRating(newRating) {
        setCurrRating({
            rating: newRating
        });
    }

    console.log(props);

    const [movieData, setMovieData] = useState({});

    const fetchDetails = useCallback(async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${props.movieId}?api_key=4b11b7e0cdfd1a7257e990731db91e96`)
        // if (!response.ok) {
        //     throw new Error('Something went wrong');
        // }
        const data = await response.json();

        console.log(data);
        setMovieData(data)
    }, [props.movieId])

    useEffect(() => {
        fetchDetails();
    }, [fetchDetails])

    const year = new Date(movieData.release_date).getFullYear();
    const lang = (movieData.original_language)

    // console.log(year, lang);
    // console.log(movieData.genres);
    let gen = []
    for (let m in movieData.genres) {
        // console.log(m);
        // console.log((movieData.genres)[0])
        gen.push((movieData.genres)[m].name)
    }

    console.log((gen));

    return (

        <><div className={classes["img-shadow"]}>
            <img src={`http://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} className={classes.bannerImage} />
            <div className={classes.movInfo}><h2 className={classes.movName}>{movieData.original_title}</h2>
                <h3 className={classes.movProps}><ul className={classes.movGenre}><li className={classes.firstGen}>{year}</li><li>{gen[0]}</li><li>{gen[1]}</li><li>Lang {lang}</li></ul></h3><div className={classes.plot}>{movieData.overview}</div><div className={classes.cast}><b>Tagline: </b>{movieData.tagline}<br></br><b>Budget: </b>{movieData.budget}<br></br><b>Revenue: </b>{movieData.revenue}<br></br><b>Duration: </b>{movieData.runtime} min<br></br><b>Rating: </b>{movieData.vote_average / 2}/5</div>
                <div className={classes.rating}>Rate this Movie:<br></br><br></br><StarRatings rating={currRating.rating}
                    starDimension="40px"
                    starSpacing="15px" changeRating={changeRating} /></div></div>

        </div></>
    );
}

export default MovBanner;
