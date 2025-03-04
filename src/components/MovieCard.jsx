import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { addFavorites, removeFavorite, isFavorites } = useMovieContext();
  const favorite = isFavorites(movie.id)  

  function onFavClick(e) {
    e.preventDefault()
    console.log(favorite.length === 1)
    if(favorite.length === 1) removeFavorite(movie.id)
        else addFavorites(movie)
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="{movie.title}"
        />
        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite.length === 1 ? "active" : ""}`} onClick={onFavClick}>
            ♡
          </button>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
