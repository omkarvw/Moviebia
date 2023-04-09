
import Banner from './Banner';
import Navmenu from './Navmenu';
import classes from './Dashboard.module.scss';
import ContentSlider from './ContentSlider';

const Dashboard = () => {

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

    // const genreee = genreList.map(g => {
    //     <ContentSlider title={`${g} Movies`} endpoint={`genre/${g}`} />
    // })

    return (<>

        <div className={classes["background-container"]}>
        </div>
        <Navmenu />
        <Banner endpoint="trending" />

        <ContentSlider title="Suggested For You" endpoint="suggestions" />
        <ContentSlider title="Highly Rated" endpoint="highly_rated" />

        {/* {genreee} */}

        <ContentSlider title="Action Movies" endpoint="genre/Action" />
        <ContentSlider title="Adventure Movies" endpoint="genre/Adventure" />
        <ContentSlider title="War Movies" endpoint="genre/War" />
        <ContentSlider title="Fantasy Movies" endpoint="genre/Fantasy" />
        <ContentSlider title="Horror Movies" endpoint="genre/Horror" />
        <ContentSlider title="Documentary Movies" endpoint="genre/Documentary" />
        <ContentSlider title="Mystery Movies" endpoint="genre/Mystery" />
        <ContentSlider title="Drama Movies" endpoint="genre/Drama" />
        <ContentSlider title="Kids' Movies" endpoint="genre/Children" />
        <ContentSlider title="Romance Movies" endpoint="genre/Romance" />
        <ContentSlider title="IMAX Movies" endpoint="genre/IMAX" />
        <ContentSlider title="Comedy Movies" endpoint="genre/Comedy" />
        <ContentSlider title="Western Movies" endpoint="genre/Western" />
        <ContentSlider title="Animation Movies" endpoint="genre/Animation" />
        <ContentSlider title="Crime Movies" endpoint="genre/Crime" />
        <ContentSlider title="Musical Movies" endpoint="genre/Musical" />
        <ContentSlider title="Thriller Movies" endpoint="genre/Thriller" />
        <ContentSlider title="Sci-Fi Movies" endpoint="genre/Sci_Fi" />
        <ContentSlider title="Film Noir Movies" endpoint="genre/Film_Noir" />
    </>)
}
export default Dashboard;