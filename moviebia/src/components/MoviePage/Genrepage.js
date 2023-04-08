import classes from "./Genrepage.module.scss";
import Navmenu from "../Navmenu";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const Page = (props) => {

    const genreList = ["War",
        "Fantasy",
        "Adventure",
        "Horror",
        "Documentary",
        "Mystery",
        "Drama",
        "Children",
        "Romance",
        "IMAX",
        "Comedy",
        "Western",
        "Animation",
        "No_genre",
        "Crime",
        "Musical",
        "Thriller",
        "Sci_Fi",
        "Action",
        "Film_Noir",]

    const buttonList = genreList.map((genre) => {
        return (
            <Link to={`/Dashboard/Genre/${genre}`}><button className={classes.griditem}>{genre}</button></Link>
        )
    })

    return (<><div className={classes["background-container"]}></div><Navmenu />
        <div className={classes.center}><div className={classes.title}>ALL GENRES</div>
            <div className={classes.grid}>{buttonList}</div>
            {/* <div className={classes.grid}><Link to="/Dashboard/Genre/Action"><button className={classes.griditem}>Action</button></Link><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button></div> */}
        </div>




        <Navbar /></>)
}

export default Page;