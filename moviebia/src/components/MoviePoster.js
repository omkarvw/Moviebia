import { useNavigate } from "react-router-dom";
import classes from "./MoviePoster.module.scss";
const MoviePoster = props => {
    const Navigate = useNavigate();
    const ViewMovieHandler = () => {
        Navigate('/Dashboard/Movie')
    }
    return (<>
        <div className={classes.imgcontainer}><img className={classes.posterimg} src={`http://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg`} onClick={ViewMovieHandler} /></div></>);
}

export default MoviePoster;