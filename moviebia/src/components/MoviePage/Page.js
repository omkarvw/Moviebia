import classes from "./Page.module.scss";
import Navmenu from "../Navmenu";
import Navbar from "../Navbar";
import Pagination from "./Pagination";
const Page = (props) => {
    return (<><div className={classes["background-container"]}></div><Navmenu />

        <Pagination />


        <Navbar /></>)
}

export default Page;