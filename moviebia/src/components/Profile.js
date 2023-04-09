import classes from "./Profile.module.scss";
import Navbar from "./Navbar";
import Navmenu from "./Navmenu";
const Profile = () => {
    return (<><div className={classes["background-container"]}>
    </div>
        <Navmenu />
        <div className={classes.center}><h1 className={classes.title}>USER PROFILE</h1>Username : OmkarLUND<br></br><br></br> E-mail : Omkarvw@gmail.com<br></br><br></br> Tokens Earned : 69<br></br></div>
        <Navbar />

    </>);
}

export default Profile;