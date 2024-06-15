"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import { widthMage } from "@/utils/api";

function DetalhesMovie() {

    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState<any>()


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWM4ZTE0ZThlOWM2ZDAwMzNiNWRiMmQ3YWRkOWFjMyIsInN1YiI6IjY2MzY0NTE0OTU5MGUzMDEyM2JjMzAzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M-TXyNxyRTwJnwGqwTWWK8Vs0162YrUsgXDA0OA-0fY",
        }
    };

    async function requestMovieDetails() {
        try {
            let requestMovieDetails = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, options);
            let movieDetailsData = await requestMovieDetails.json();

            setMovieDetails(movieDetailsData);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        requestMovieDetails();
    }, [id]);




    const realBr = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })



    
    return (
        <div className="flex flex-col justify-center self-center items-center w-screen lg:h-screen overflow-x-hidden overflow-y-hidden ">
            <Link href={'/'}><FaWindowClose className="text-[30px] mt-16 cursor-pointer  lg:hidden " /></Link>
            <div className=" bg-purple-600 mt-4 dark:bg-red-600 lg:h-[600px] lg:w-[1000px] xl:h-[600px] xl:w-[1300px] h-[1200px]
            md:w-[660px] w-[300px] rounded-md border justify-center ">
                <div className="lg:flex">
                    <div>
                        {movieDetails?.poster_path ? <img className="lg:h-[598px] lg:w-[650px] md:h-[598px] md:w-[660px]  md:rounded-tl-md md:rounded-bl-md  rounded-tl-md rounded-tr-md" src={`${widthMage}${movieDetails?.poster_path}`} alt="" />
                    :
                    <img className=" md:h-[598px] md:w-[650px] lg:h-[598px] lg:w-[650px] h-[300px] w-[350px]  md:rounded-tl-md md:rounded-bl-md" src={'Los.gif'} alt="" />  
                    
                    }
                        
                    </div>

                    <div className=" xl:ml-4 md:w-[650px] ml-1 " >
                        <div className=" items-center w-[550px] xl:ml-[14%] ">
                            <div className="md:flex md:justify-between ">
                                <h1 className="xl:text-3xl text-md  font-bold mt-4">{movieDetails?.title}</h1>
                                <Link href={'/'}><FaWindowClose className="md:text-[30px] cursor-pointer hidden lg:flex" /></Link>
                            </div>
                        </div>

                        {/* Área de classificação dos filmes e orçamento */}
                        <div>
                            <div className="my-4 flex flex-col gap-2">
                                <div>
                                    <p className="font-bold">Orçamento:</p>
                                    <p>{realBr.format(movieDetails?.budget)}</p>
                                </div>
                                <div>
                                    <div>
                                        <p className="font-bold">Receita:</p>
                                        <p>{realBr.format(movieDetails?.revenue)}</p>
                                    </div>
                                </div>
                                <div className=""> 
                                    <p className="font-bold">Média de votos:</p>
                                    <div className="flex items-center">
                                        <p>{movieDetails?.vote_average?.toFixed(1)}</p>
                                        <FaStar />
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold">Minutos:</p>
                                    <p className="capitalize">{movieDetails?.runtime} minutos</p>
                                </div>

                                <div>
                                    <button className="p-2 text-white  bg-blue-600 rounded-md">Assistir Trailer</button>
                                </div>
                            </div>


                            <div className="">
                                <img className="md:w-4 " src={movieDetails?.logo_path} alt="" />
                            </div>


                        </div>

                        {/* Descrição do Filme */}
                        <div className="">
                            <div className="font-bold md:text-ellipsis text-wrap">
                                <p>{movieDetails?.overview}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DetalhesMovie;