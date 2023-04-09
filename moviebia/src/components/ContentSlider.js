import classes from './ContentSlider.module.scss';
import MoviePoster from './MoviePoster';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState, useCallback, useEffect } from 'react';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${classes.arrow} ${classes.right}`}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${classes.arrow} ${classes.left}`}
            onClick={onClick}
        />
    );
}
const ContentSlider = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 0,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        variableWidth: true,
        adaptiveHeight: true
    };

    const [movies, setMovies] = useState([]);

    // console.log('content slider props :', props)
    const fetchMovies = useCallback(async () => {
        const response = await fetch(`http://127.0.0.1:8000/${props.endpoint}/?page=1`, { mode: "cors", headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgxMTM3MTYxLCJpYXQiOjE2ODEwNTA3NjEsImp0aSI6IjBkNzIxNTMxOTAyZjQ5NTQ5MWJhMTEzYjA2ZWIyNDY2IiwidXNlcl9pZCI6M30.GE_zQtzxVLQtSanRQF2VqQhkaEpd6J5sJiJIfxg6i1s" } });
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        const responseData = await response.json();
        // console.log(responseData);
        // console.log(responseData);
        const loadedMovies = [];
        for (const key in responseData.results) {
            // console.log(key);
            // console.log("somejdnsdjv ", responseData[key]);
            loadedMovies.push(responseData.results[key]);
        }
        setMovies(loadedMovies);
        // console.log(loadedMovies);
    }, [props.endpoint])

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies])

    const moviesList = movies.map((movie) => {
        return (
            <div className={classes.posterDiv}>
                <MoviePoster movie={movie} />
            </div>
        )
    })

    return (<>
        <div >
            <h2 className={classes.movType}>{props.title}<p className={classes.viewall}>View All<div className={classes["arrow-container"]}>
                <div className={classes.arrowt}></div>
                <div className={classes.arrowt}></div>
                <div className={classes.arrowt}></div>
            </div></p></h2>
            <Slider {...settings} className={classes.slider}>
                {moviesList}
                {/* <div className={classes.posterDiv}>
                    <MoviePoster />
                </div>
                <div className={classes.posterDiv}>
                    <MoviePoster />
                </div>
                <div className={classes.posterDiv}>
                    <MoviePoster />
                </div>
                <div className={classes.posterDiv}>
                    <MoviePoster />
                </div>
                <div className={classes.posterDiv}>
                    <MoviePoster />
                </div>
                <div className={classes.posterDiv}>
                    <MoviePoster />
                </div>
                <div className={classes.posterDiv}><MoviePoster />
                </div>
                <div className={classes.posterDiv}>
                    <MoviePoster />
                </div> */}
            </Slider>
        </div >
    </>);
}
export default ContentSlider;


