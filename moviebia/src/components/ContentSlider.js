import classes from './ContentSlider.module.scss';
import MoviePoster from './MoviePoster';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState } from 'react';


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
        slidesToShow: 6,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        variableWidth: true,
        adaptiveHeight: true
    };

    const [movies, setMovies] = useState([]);

    // console.log('content slider props :', props)
    const fetchMovies = async () => {
        const response = await fetch('http://127.0.0.1:8000/suggestions/?page=1');
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        const responseData = await response.json();
        // console.log(responseData);

        const loadedMovies = [];
        for (const key in responseData) {
            loadedMovies.push({
                id: key,
                title: responseData[key].title,
            });
        }
        setMovies(loadedMovies);
    }

    const moviesList = movies.map((movie) => {
        return (
            <div className={classes.posterDiv}>
                <MoviePoster movieId={movie.key} />
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


