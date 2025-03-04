import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);


  //add fav
  const addFavorites = (movie)=>{
    setFavorites(prev => [...prev,movie])
  }

  //remove fav
  const removeFavorite = (id) =>{
    console.log("removeFavorite cheacking")
    setFavorites(prev => prev.filter(movie => movie.id !==id))
  }

  const isFavorites = (id) =>{
        return favorites.filter(movie => movie.id === id);
  }

  const value={
    favorites,
    addFavorites,
    removeFavorite,
    isFavorites
  }

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
