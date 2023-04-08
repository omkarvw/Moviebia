import classes from "./Page.module.scss";
import Navmenu from "../Navmenu";
import Navbar from "../Navbar";
import Pagination from "./Pagination";
import { useState } from "react";
import Movielist from "./Movielist";
const Page = (props) => {
    const [MovieData, setMovieData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(15);

    // useEffect(async () => {
    //     const response = await axios.get(
    //         "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    //     );

    //     setCoinsData(response.data);
    // }, []);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = MovieData.slice(firstPostIndex, lastPostIndex);
    return (<><div className={classes["background-container"]}></div><Navmenu />
        <Movielist coinsData={currentPosts} />
        <Pagination
            totalPosts={MovieData.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
        />



        <Navbar /></>)
}

export default Page;