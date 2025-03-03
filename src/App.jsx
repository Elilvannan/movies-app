import { Routes,Route  } from "react-router-dom";
import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="movies-app/" element={<Home/>}/>
          <Route path="movies-app/favorites" element={<Favorites/>}/>
          </Routes>
      </main>
      </>
  );
}

export default App;
