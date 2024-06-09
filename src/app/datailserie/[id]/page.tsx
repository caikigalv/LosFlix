"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import { widthMage } from "@/utils/api";





export default function DetalheSerie() {


    const { id } = useParams();
    const [serieDetails, setSerieDetails] = useState<any>()

  
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWM4ZTE0ZThlOWM2ZDAwMzNiNWRiMmQ3YWRkOWFjMyIsInN1YiI6IjY2MzY0NTE0OTU5MGUzMDEyM2JjMzAzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M-TXyNxyRTwJnwGqwTWWK8Vs0162YrUsgXDA0OA-0fY",
        }
    };

    async function requestSerieDetails() {
        try {
            let requestSerieDetails = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=pt-BR`, options);
            let serieDetailsData = await requestSerieDetails.json();

            setSerieDetails(serieDetailsData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        requestSerieDetails();
    }, [id]);

    const realBr = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })



    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <Link href={'/'}><FaWindowClose className="text-[30px] cursor-pointer hidden md:flex" /></Link>
            <div className=" bg-purple-600 dark:bg-red-600 h-[600px] w-[1300px] rounded-md border">
                <div className="flex">
                    <div>
                    {serieDetails?.poster_path ? <img className="h-[598px] w-[650px]  rounded-tl-md rounded-bl-md" src={`${widthMage}${serieDetails?.poster_path}`} alt="" />
                    :
                    <img className="h-[598px] w-[650px]  rounded-tl-md rounded-bl-md" src={'Los.gif'} alt="" />  
                    
                    }
                    </div>

                    <div className=" ml-4 w-[650px] " >
                        <div className=" items-center w-[550px] ml-[14%] ">
                            <div className="flex justify-between">
                                <h1 className="text-3xl font-bold mt-4">{serieDetails?.original_name}</h1>
                                <Link href={'/'}><FaWindowClose className="text-[30px] cursor-pointer hidden md:flex" /></Link>
                            </div>
                        </div>

                        {/* Área de classificação dos filmes e orçamento */}
                        <div>
                            <div className="my-4 flex flex-col gap-2">
                                <div>
                                    <p className="font-bold">Orçamento:</p>
                                    <p>{realBr.format(serieDetails?.budget)}</p>
                                </div>
                                <div>
                                    <div>
                                        <p className="font-bold">Receita:</p>
                                        <p>{realBr.format(serieDetails?.revenue)}</p>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="font-bold">Média de votos:</p>
                                    <div className="flex items-center">
                                        <p>{serieDetails?.vote_average?.toFixed(1)}</p>
                                        <FaStar />
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold">Minutos:</p>
                                    <p className="capitalize">{serieDetails?.runtime} minutos</p>
                                </div>
                            </div>

                            <div className="">
                                <img className="w-4" src={serieDetails?.logo_path} alt="" />
                            </div>
                        </div>

                        {/* Descrição do Filme */}
                        <div className="">
                            <div className="font-bold">
                                <p>{serieDetails?.overview}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
