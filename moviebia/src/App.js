
import Home from './components/Homepage/Home'
import Dashboard from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Movie from './components/MovieDisplay/Movie'
import Page from './components/MoviePage/Page';
import Genrepage from './components/MoviePage/Genrepage';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard/Movie" element={<Movie />} />
        <Route path="/Dashboard/Genre" element={<Genrepage />} />
        <Route path="/Dashboard/Genre/Action" element={<Page />} />
        <Route path="/Dashboard" element={<Dashboard />} />



      </Routes>


    </>
  );
}

export default App;
