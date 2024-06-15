"use client"
import { useEffect} from "react";
import style from "@/app/components/style.module.css";
import Slider from "react-slick"
import Link from "next/link";
import { settings } from "@/utils/sliders";
import { popularSerie } from "@/utils/queries";
import { widthMage } from "@/utils/api";

export const TopSeries = () => {

    const serie = popularSerie()
    useEffect(() => {
        serie
    }, [])

    return (
        <div>
            <div className="container mx-auto flex flex-col w-[100vw] mt-[50px]   ">


                <div className="">
                    <h2 className="text-2xl font-bold mb-4 ml-4 uppercase">Series populares:</h2>
                    <div className="w-full m-auto">
                        <Slider {...settings}>
                            {serie?.data?.results.map((item:any) => (
                                <>
                                    <div key={item.id} className={"h-[450px] relative border-slate-200 dark:border-black cursor-pointer border-2"}>

                                        <div  className="" >
                                            <img className="rounded-md w-full absolute h-full  md:hover:scale-125 transition-transform" src={`${widthMage}${item.poster_path}`} alt={item.title} />
                                        </div>

                                        <div className={`flex flex-col justify-center items-center h-full w-full translate-y-[80%] hover:translate-y-0 transition-all ${style.show_detalhe}`}>

                                            <div className="flex flex-col justify-center items-center text-right w-full">
                                                <Link href={`/datailserie/${item.id}`} key={item.id}>
                                                    <button className="p-3 mt-4 bg-slate-400 text-black dark:bg-red-600 dark:text-white hover:bg-slate-200 rounded-md uppercase">Detalhe</button>
                                                </Link>
                                            </div>

                                        </div>
                                    </div>

                                </>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}