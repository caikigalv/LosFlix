
import { useState, useEffect } from 'react';

type AddMovie = {
  id:number;
  title: string;
  poster_path: string;
  
};


export const useFavorites = () => {
  const [favorites, setFavorites] = useState<AddMovie[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addFavorite = (id:number, title:string, poster_path:string) => {
    const newFavorites = [...favorites, {id:id , title:title, poster_path:poster_path}];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const removeFavorite = (id:number) => {
    const newFavorites = favorites.filter((movie) =>  movie.id !== id);
    setFavorites(newFavorites)
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return { favorites, addFavorite, removeFavorite };

};
