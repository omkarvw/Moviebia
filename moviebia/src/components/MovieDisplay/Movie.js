import MovBanner from "./MovBanner";
import Navmenu from "../Navmenu";
import Navbar from "../Navbar";
import classes from "./Movie.module.scss"
const Movie = (props) => {
    return (<><div className={classes["background-container"]}>
    </div>
        <Navmenu />
        <MovBanner />
        <Navbar />
    </>);
}

export default Movie;