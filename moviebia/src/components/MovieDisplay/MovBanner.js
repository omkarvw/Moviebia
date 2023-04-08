
import classes from "./MovBanner.module.scss";
import banimage from "../sampleBanner.jpg";
import { useState } from "react";
import StarRatings from 'react-star-ratings';

const MovBanner = (props) => {
    const [currRating, setCurrRating] = useState({ rating: 0 });
    function changeRating(newRating) {
        setCurrRating({
            rating: newRating
        });
    }
    return (

        <><div className={classes["img-shadow"]}>
            <img src={banimage} className={classes.bannerImage} />
            <div className={classes.movInfo}><h2 className={classes.movName}>John Wick 4</h2>
                <h3 className={classes.movProps}><ul className={classes.movGenre}><li className={classes.firstGen}>2023</li><li>Action</li><li>Adventure</li><li>16+</li></ul></h3><div className={classes.plot}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra, libero sit amet finibus condimentum, lorem quam elementum massa, quis commodo eros odio sed augue. Maecenas lobortis maximus elit, sit amet ultrices sem faucibus quis. Nunc sit amet feugiat libero. Morbi eu sapien feugiat, ornare ex id, facilisis augue.</div><div className={classes.cast}><b>Star Cast: </b>Omkar Wadekar, Naman Bhagat<br></br><b>Director: </b>Omkar Wadekar, Naman Bhagat<br></br><b>Producer: </b>Omkar Wadekar, Naman Bhagat<br></br><b>Duration: </b>120 min<br></br><b>Rating: </b>5/5</div>
                <div className={classes.rating}>Rate this Movie:<br></br><br></br><StarRatings rating={currRating.rating}
                    starDimension="40px"
                    starSpacing="15px" changeRating={changeRating} /></div></div>

        </div></>
    );
}

export default MovBanner;
