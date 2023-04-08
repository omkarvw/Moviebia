import classes from "./Genrepage.module.scss";
import Navmenu from "../Navmenu";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
const Page = (props) => {
    return (<><div className={classes["background-container"]}></div><Navmenu />
        <div className={classes.center}><div className={classes.title}>ALL GENRES</div>
            <div className={classes.grid}><Link to="/Dashboard/Genre/Action"><button className={classes.griditem}>Action</button></Link><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button><button className={classes.griditem}>Action</button></div>
        </div>




        <Navbar /></>)
}

export default Page;