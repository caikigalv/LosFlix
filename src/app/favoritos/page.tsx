"use client"

import { widthMage } from "@/utils/api";
import { useFavorites } from "@/utils/functions";


const Favorites = () => {

  const moviesFavorite = useFavorites()

  return (
    <div className="w-screen flex flex-col justify-center  self-center bg-slate-200 dark:bg-black">
      <h1 className="md:text-2xl uppercase font-bold m-10 ">Meus filmes favoritos:</h1>
      <div className="w-screen flex flex-col justify-center items-center self-center">
        {moviesFavorite.favorites.length === 0 &&
          <h3 className="md:text-2xl animate-bounce uppercase text-center">Nenhum filme Favoritado..</h3>
        }
        <div className="grid md:grid-cols-4 2xl:grid-cols-5 justify-center md:h-full  gap-6 md:m-16 items-center ">
          {moviesFavorite.favorites.map((item: any) => (
            <div className="border bg-purple-600 dark:bg-red-600 border-black dark:border-white hover:scale-105 transition-transform truncate rounded-md p-4 flex flex-col justify-center items-center box-border">
              <div className="">
                {!item?.poster_path ?
                  <img className="w-[340px] h-[360px]" src={`Los.gif`} alt="" />
                  :
                  <img className="w-[340px] h-[360px]" src={`${widthMage}${item.poster_path}`} alt="" />
                }
                <h1>{item?.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Favorites; 
