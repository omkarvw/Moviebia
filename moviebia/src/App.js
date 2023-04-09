
import Home from './components/Homepage/Home'
import Dashboard from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Movie from './components/MovieDisplay/Movie'
import Page from './components/MoviePage/Page';
import Genrepage from './components/MoviePage/Genrepage';
import AboutUs from './components/AboutUs';
import Profile from "./components/Profile.js";
import Suggested from './components/Suggested';
import MostRated from './components/MostRated';
import Trending from './components/Trending';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard/:movieId" element={<Movie />} />
        <Route path="/Dashboard/Genre" element={<Genrepage />} />
        <Route path="/Dashboard/Genre/:genreName" element={<Page />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Dashboard/Aboutus" element={<AboutUs />} />
        <Route path="/Dashboard/Profile" element={<Profile />} />
        <Route path="/Dashboard/Suggested" element={<Suggested />} />
        <Route path="/Dashboard/Trending" element={<Trending />} />
        <Route path="/Dashboard/Mostrated" element={<MostRated />} />




      </Routes>


    </>
  );
}

export default App;
