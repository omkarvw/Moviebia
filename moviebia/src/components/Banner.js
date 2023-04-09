import classes from './Banner.module.scss';
import Slider from 'react-slick';
import Navbar from './Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import banimage from "./sampleBanner.jpg";
import BannerChild from './BannerChild';
import { useState, useCallback, useEffect } from 'react';

const Banner = props => {
    var settings = {
        infinite: true,
        fade: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

    };

    // console.log(props)

    const { endpoint } = props
    // console.log(endpoint);

    const [movies, setMovies] = useState([]);

    // console.log('content slider props :', props)
    const fetchMovies = useCallback(async () => {
        const response = await fetch(`http://127.0.0.1:8000/` + endpoint + `/?page=1`, {
            mode: "cors", headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgxMTM3MTYxLCJpYXQiOjE2ODEwNTA3NjEsImp0aSI6IjBkNzIxNTMxOTAyZjQ5NTQ5MWJhMTEzYjA2ZWIyNDY2IiwidXNlcl9pZCI6M30.GE_zQtzxVLQtSanRQF2VqQhkaEpd6J5sJiJIfxg6i1s"
            }
        });
        // if (!response.ok) {
        //     throw new Error('Something went wrong!');
        // }
        const responseData = await response.json();
        // console.log("response Data :", responseData.results[0]);

        const loadedMovies = [];
        for (const key in responseData.results) {
            // console.log(key);
            // console.log("somejdnsdjv ", responseData[key]);
            if (responseData.results[key].backdrop_path !== "-1") {
                loadedMovies.push(responseData.results[key]);
            }

        }
        // console.log(loadedMovies)
        setMovies(loadedMovies);
    }, [props.endpoint])


    useEffect(() => {
        fetchMovies();
    }, [fetchMovies])


    // console.log(movies);

    const BannerList = movies.map(movie => {
        return (
            <BannerChild movie={movie} >  </BannerChild>
        )
    })

    return (<>
        <div>

            <Slider {...settings} className={classes.slider}>
                {/* <div className={classes["img-shadow"]}>
                    <img src={banimage} className={classes.bannerImage} />
                    <div className={classes.movInfo}><h2 className={classes.movName}>John Wick 4</h2>
                        <h3 className={classes.movProps}><ul className={classes.movGenre}><li className={classes.firstGen}>2023</li><li>Action</li><li>Adventure</li><li>16+</li></ul></h3><div className={classes.plot}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra, libero sit amet finibus condimentum, lorem quam elementum massa, quis commodo eros odio sed augue. Maecenas lobortis maximus elit, sit amet ultrices sem faucibus quis. Nunc sit amet feugiat libero. Morbi eu sapien feugiat, ornare ex id, facilisis augue.</div><button className={classes.btn} >Preview / Rate Now</button></div>
                </div>
                <div className={classes["img-shadow"]}>
                    <img src={banimage} className={classes.bannerImage} />
                    <div className={classes.movInfo}><h2 className={classes.movName}>John Wick 4</h2>
                        <h3 className={classes.movProps}><ul className={classes.movGenre}><li className={classes.firstGen}>2023</li><li>Action</li><li>Adventure</li><li>16+</li></ul></h3><div className={classes.plot}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra, libero sit amet finibus condimentum, lorem quam elementum massa, quis commodo eros odio sed augue. Maecenas lobortis maximus elit, sit amet ultrices sem faucibus quis. Nunc sit amet feugiat libero. Morbi eu sapien feugiat, ornare ex id, facilisis augue.</div><button className={classes.btn} >Preview / Rate Now</button></div>
                </div>
                <div className={classes["img-shadow"]}>
                    <img src={banimage} className={classes.bannerImage} />
                    <div className={classes.movInfo}><h2 className={classes.movName}>John Wick 4</h2>
                        <h3 className={classes.movProps}><ul className={classes.movGenre}><li className={classes.firstGen}>2023</li><li>Action</li><li>Adventure</li><li>16+</li></ul></h3><div className={classes.plot}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra, libero sit amet finibus condimentum, lorem quam elementum massa, quis commodo eros odio sed augue. Maecenas lobortis maximus elit, sit amet ultrices sem faucibus quis. Nunc sit amet feugiat libero. Morbi eu sapien feugiat, ornare ex id, facilisis augue.</div><button className={classes.btn} >Preview / Rate Now</button></div>
                </div>
                <div className={classes["img-shadow"]}>
                    <img src={banimage} className={classes.bannerImage} />
                    <div className={classes.movInfo}><h2 className={classes.movName}>John Wick 4</h2>
                        <h3 className={classes.movProps}><ul className={classes.movGenre}><li className={classes.firstGen}>2023</li><li>Action</li><li>Adventure</li><li>16+</li></ul></h3><div className={classes.plot}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra, libero sit amet finibus condimentum, lorem quam elementum massa, quis commodo eros odio sed augue. Maecenas lobortis maximus elit, sit amet ultrices sem faucibus quis. Nunc sit amet feugiat libero. Morbi eu sapien feugiat, ornare ex id, facilisis augue.</div><button className={classes.btn} >Preview / Rate Now</button></div>
                </div>
                <div className={classes["img-shadow"]}>
                    <img src={banimage} className={classes.bannerImage} />
                    <div className={classes.movInfo}><h2 className={classes.movName}>John Wick 4</h2>
                        <h3 className={classes.movProps}><ul className={classes.movGenre}><li className={classes.firstGen}>2023</li><li>Action</li><li>Adventure</li><li>16+</li></ul></h3><div className={classes.plot}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra, libero sit amet finibus condimentum, lorem quam elementum massa, quis commodo eros odio sed augue. Maecenas lobortis maximus elit, sit amet ultrices sem faucibus quis. Nunc sit amet feugiat libero. Morbi eu sapien feugiat, ornare ex id, facilisis augue.</div><button className={classes.btn} >Preview / Rate Now</button></div>
                </div>
                <div className={classes["img-shadow"]}>
                    <img src={banimage} className={classes.bannerImage} />
                    <div className={classes.movInfo}><h2 className={classes.movName}>John Wick 4</h2>
                        <h3 className={classes.movProps}><ul className={classes.movGenre}><li className={classes.firstGen}>2023</li><li>Action</li><li>Adventure</li><li>16+</li></ul></h3><div className={classes.plot}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra, libero sit amet finibus condimentum, lorem quam elementum massa, quis commodo eros odio sed augue. Maecenas lobortis maximus elit, sit amet ultrices sem faucibus quis. Nunc sit amet feugiat libero. Morbi eu sapien feugiat, ornare ex id, facilisis augue.</div><button className={classes.btn} >Preview / Rate Now</button>
                    </div>
                </div> */}
                {BannerList}
            </Slider></div><Navbar /></>
    );
}
export default Banner;