"use client"

import { widthMage } from "@/utils/api";
import { useFavorites } from "@/utils/functions";
import Link from "next/link";
import { FaHeart, FaStar } from "react-icons/fa";


const Favorites = () => {

  const {favorites, removeFavorite} = useFavorites() ;


  return (
    <div className="w-screen flex flex-col justify-center  self-center bg-slate-200 dark:bg-black">
      <h1 className="md:text-2xl uppercase font-bold m-10 ">Meus filmes favoritos:</h1>
      <div className="w-screen flex flex-col justify-center items-center self-center">
        {favorites.length === 0 &&
          <h3 className="md:text-2xl animate-bounce  uppercase text-center">Nenhum filme Favoritado..</h3>
        }
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center md:h-full  m-8 ml-8 gap-6 mt-8 md:m-16 items-center">
          {favorites.map((item: any) => (
            <div className="border bg-purple-600 dark:bg-red-600 border-black dark:border-white hover:scale-105 transition-transform truncate rounded-md p-4 flex flex-col justify-center items-center box-border">
              <div className="">
                <Link href={`/datail/${item.id}`}>
                    {!item?.poster_path ?
                      <img className="w-[340px] h-[360px]" src={`Los.gif`} alt="" />
                      :
                      <img className="w-[340px] h-[360px]" src={`${widthMage}${item.poster_path}`} alt="" />
                    }
                    <h1>{item?.title}</h1>
                </Link>
                
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <FaStar className="text-yellow-400 font-bold text-[20px]" />
                  </div>

                  <div>
                    <button onClick={() => removeFavorite(item?.id)}><FaHeart className="text-2xl font-bold cursor-pointer"/></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Favorites; 
