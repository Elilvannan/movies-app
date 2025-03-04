import { Link } from "react-router-dom";
import '../css/NavBar.css'


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie App </Link>
      </div>

      <div className="navbar-links">
        <Link to="/movies-app" className="nav-link">
          Home{" "}
        </Link>
        <Link to="/movies-app/favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
