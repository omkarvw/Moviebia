import MoviePoster from "../MoviePoster";
import classes from "./Movielist.module.css";

const CryptoList = (props) => {
    return (
        <div className={classes.movie_list}>
            {props.movie.map((movieId, movieTitle) => {
                return (
                    <MoviePoster
                        key={movieId}
                        title={movieTitle}
                    />
                );
            })}
        </div>
    );
};

export default CryptoList;