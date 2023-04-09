import classes from "./AboutUs.module.scss";
import Navmenu from "./Navmenu";
import Navbar from "./Navbar";
const AboutUs = props => {
    return (<>
        <div className={classes["background-container"]}></div><Navmenu />
        <div className={classes.center}>Welcome to our ultimate recommender system! This is finally a recommender system tailored specifically to each person's interests.<br></br> Trained across a vast dataset, this platform uses data from contemporary real time users.<br></br> And... that's not the end. Join the community and rate regularly to earn awesome rewards. An income merely by watching a movie would definitely interest you more than the painstaking 9 to 5 jobs during the day. <br></br>Hope you get a good bucket list that never dries out and have tons of fun with some good juicy bucks at the end of the day.</div><Navbar />
    </>);
}

export default AboutUs;