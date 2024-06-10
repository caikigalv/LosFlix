
"use client"
import { SearchMoviesAll, moviesAll } from "@/utils/queries"
import { ChangeEvent, useEffect, useState } from "react"
import React from "react";
import { Pagination } from "@nextui-org/pagination";
import { FaRegHeart } from "react-icons/fa6";
import { widthMage } from "@/utils/api";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import { filterOptions, genreOptions, typePopulare } from "@/utils/constoptions";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "@/utils/functions";
import { AiOutlineLoading } from "react-icons/ai";



export const AllMovies = () => {
    const { favorites, addFavorite, removeFavorite } = useFavorites();


    const [pageNumber, setPageNumber] = useState(1)
    const [generPage, setGenerPage] = useState(0)
    const [evaluated, setEvaluated] = useState('vote_average')
    const [average, setAverage] = useState('')


    const [delayedInputValue, setDelayedInputValue] = useState('');
    const [searchText, setSearchText] = useState('')

    const timeInput = setTimeout(() => {
        setDelayedInputValue(searchText)
    }, 1000)

    const gapMovie = searchText ? SearchMoviesAll(pageNumber, searchText) : moviesAll(pageNumber, generPage, evaluated, average, searchText);

    const handlePage = (page: number) => {
        setPageNumber(page)
    }

    const handleAddGener = (event: ChangeEvent<HTMLSelectElement>) => {
        setGenerPage(Number(event.target.value))

    }
    const handleAddEvaluated = (event: ChangeEvent<HTMLSelectElement>) => {
        setEvaluated(event.target.value)
    }
    const handleAddAverage = (event: ChangeEvent<HTMLSelectElement>) => {
        setAverage(event.target.value)
    }


    useEffect(() => {
        const timeInput = setTimeout(() => {
            setDelayedInputValue(searchText);
        }, 1000);
        return () => clearTimeout(timeInput);  // Limpeza do timeout
    }, [searchText]);

    useEffect(() => {
        gapMovie
    }, [pageNumber, generPage, evaluated, average, searchText, timeInput])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pageNumber])

    const colors = ["primary", "secondary", "success", "warning", "danger"]
    const sizes = ["sm", "md", "lg"]

    return (

        // aqui é o campo de opções de gêneros
        <>


            <div className="flex flex-col  items-center w-screen mt-8">
                <div className="flex justify-end items-center">
                    <div className="flex justify-end items-center">
                        <input
                            autoComplete="off"
                            id="input"
                            type="text"
                            className={"md:w-[500px] md:h-[50px] outline-none rounded-md pl-4 border-2  border-black bg-transparent text-2xl text-black dark:border-white dark:text-white ml-2"} placeholder="Buscar filmes, series ...."
                            value={searchText}
                            onChange={e => setSearchText(e.target.value)}
                        />

                        <AiOutlineSearch className="md:absolute hidden md:flex md:mr-2 h-[30px] w-[30px] " />

                    </div>

                    <Link href={'/'} >
                        <IoMdCloseCircleOutline className="md:ml-4 h-[30px] w-[30px] cursor-pointer" />
                    </Link>

                </div>

            </div>

            <div className="md:container md:mx-auto ">
                <div className="md:ml-16 w-full mt-16 md:flex gap-8 ">
                    <div>
                        <h4 className="font-bold ml-2">Gênero:</h4>

                        <select onChange={handleAddGener}
                            className="p-2 m-2 bg-slate-100 outline-none w-[390px] md:w-[200px] text-black rounded-md border border-black" >
                            {genreOptions.map(item => (
                                <option value={item.type} key={item.id} >{item.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <h4 className="font-bold ml-2">Exibir por:</h4>
                        <select onChange={handleAddEvaluated} className="p-2 m-2 border w-[390px] md:w-[200px] outline-none border-black bg-slate-100  text-black rounded-md" >
                            {filterOptions.map(item => (
                                <option key={item.id} value={item.type}>{item.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <h4 className="font-bold ml-2">Ordenar por:</h4>
                        <select onChange={handleAddAverage} className="p-2 m-2 outline-none w-[390px] md:w-[200px] bg-slate-100 border border-black  text-black rounded-md" >
                            {typePopulare.map(item => (
                                <option key={item.id} value={item.type}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Aqui ficará os filmes */}

            <div className="w-screen flex flex-col justify-center items-center self-center bg-slate-200 dark:bg-black">
                {gapMovie.isLoading && <AiOutlineLoading className="animate-spin w-[50px] h-[50px]" />}

                {!gapMovie.isLoading && gapMovie.isFetching && <AiOutlineLoading className="animate-spin" />}

                {delayedInputValue &&
                    <div>
                        <p className="font-bold text-xl mt-8">Resultados para: {delayedInputValue}</p>
                    </div>
                }



                <div className="">
                    <div className="grid md:grid-cols-4 2xl:grid-cols-5 justify-center md:h-full  m-8 ml-4  gap-6 mt-8 md:m-16 items-center">
                        {gapMovie?.data?.results.map((item: any) => (

                            <>

                                <div key={item.id} className="border bg-purple-600 dark:bg-red-600 border-black dark:border-white hover:scale-105 transition-transform truncate rounded-md p-4 flex flex-col justify-center items-center box-border">
                                    <Link href={`/datail/${item.id}`} key={item.id}>
                                        {item.poster_path ?
                                            <img className="w-[340px] h-[360px]" src={`${widthMage}${item.poster_path}`} alt="" />
                                            :
                                            <img className="w-[340px] h-[360px]" src={'Los.gif'} alt="" />
                                        }
                                    </Link>

                                    <h1 className=" text-sm font-bold md:w-[250px] truncate mt-2 2xl:w-[300px]">{item.title}</h1>
                                    <div className="flex justify-between items-center w-full mt-4">
                                        <div className="flex gap-2 items-center">
                                            <FaStar className="text-yellow-400 font-bold" />
                                            <p className="font-bold">
                                                {item.vote_average?.toFixed(1) <= 0 ? '-' : item.vote_average?.toFixed(1)}
                                            </p>
                                        </div>
                                        <div>
                                            {favorites.some(fav => fav.id === item.id) ?
                                                <button onClick={() => removeFavorite(item.id)}><FaHeart className="text-2xl font-bold cursor-pointer" /></button>
                                                :
                                                <button onClick={() => addFavorite(item.id, item.title, item.poster_path, item.backdrop_path)}><FaRegHeart className="text-2xl font-bold cursor-pointer" /></button>
                                            }
                                        </div>
                                    </div>
                                </div>

                               
                            </>
                        ))}

                    </div>
                </div>
                <div className="self-center flex justify-center text-xl mb-4 mr-4 border-none overflow-hidden md:w-[500px]">
                    <Pagination onChange={handlePage} showShadow  showControls total={500} initialPage={pageNumber} color="default" size="lg"/>
                </div>
            </div>
        </>

    )

}