"use client"

import { useEffect } from "react"
import React from 'react';
import Slider from "react-slick"
import Link from "next/link";
import { popularMovies } from "@/utils/queries";
import { settings } from "@/utils/sliders";
import { widthMage } from "@/utils/api";



export const TopMovies = () => {

    const listmove = popularMovies()

    useEffect(() => {
       listmove
    }, [])

  

    return (
        <div className="container flex mx-auto flex-col w-[100vw]">
            <h2 className="text-2xl font-bold mb-4 ml-4 uppercase">Filmes populares:</h2>
            <div className="w-full m-auto">

                <Slider {...settings}>
                    {listmove?.data?.results.map((d:any) => (
                        <div key={d.id}>
                            
                            <div  className={"h-[450px] relative border-slate-200 dark:border-black cursor-pointer border-2"}>
                                <div className="">
                                    <img className="rounded-md w-full absolute h-full  md:hover:scale-125 transition-transform 
                            " src={`${widthMage}${d.poster_path}`} alt={''} />
                                </div>

                                <div className="flex flex-col justify-center items-center h-full w-full translate-y-[65%] hover:translate-y-0 transition-all ">
                                    <div className=" absolute  hover:from-black/80 hover:via-black/80 hover:to-black/80 "></div>


                                    <Link href={`/datail/${d.id}`} key={d.id}>
                                        <button className="p-3  bg-slate-400 text-black dark:bg-red-600 dark:hover:bg-red-400 dark:text-white hover:bg-slate-200 rounded-md uppercase mt-4">Detalhe</button>
                                    </Link>

                                </div>
                            </div>
                            
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}