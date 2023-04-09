import MovBanner from "./MovBanner";
import Navmenu from "../Navmenu";
import Navbar from "../Navbar";
import classes from "./Movie.module.scss"
import { useParams } from "react-router-dom";

const Movie = (props) => {

    const { movieId } = useParams();



    return (<><div className={classes["background-container"]}>
    </div>
        <Navmenu />
        <MovBanner movieId={movieId} />
        <Navbar />
    </>);
}

export default Movie;