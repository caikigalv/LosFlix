"use client"
import { SearchSerieAll, serieAll } from "@/utils/queries"
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
import { useFavorites } from "@/utils/functions";
import { FaHeart } from "react-icons/fa";





export const AllSeries = () => {

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

    const gapSerie = searchText ? SearchSerieAll(pageNumber, searchText) : serieAll(pageNumber, generPage, evaluated, average, searchText);

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
        gapSerie
    }, [pageNumber, generPage, evaluated, average, searchText, timeInput])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pageNumber])


    
    const variants = ["bordered"]
   



    return (

        // aqui é o campo de opções de gêneros
        <>
            <div className="overflow-x-hidden overflow-y-hidden w-screen">

                <div className="flex flex-col  items-center w-screen mt-8">
                    <div className="flex justify-end items-center relative">
                        <div className="flex justify-end items-center">
                            <input
                                autoComplete="off"
                                id="input"
                                type="text"
                                className="md:w-[500px] md:h-[50px] w-[270px] outline-none rounded-md pl-4 border-2  border-black bg-transparent md:text-2xl text-[20px] text-black dark:border-white dark:text-white ml-2" placeholder="Buscar filmes, series ...."
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
                    <div className="md:ml-16 w-full md:mt-16 mt-8 md:flex flex max-sm:flex-col max-sm:justify-center max-sm:items-center md:gap-8 ">
                        <div>
                            <h4 className="font-bold ml-2">Gênero:</h4>

                            <select onChange={handleAddGener}
                                className="p-2 bg-slate-100 outline-none w-[300px] sm:w-[350px] md:w-[200px] text-black rounded-md border border-black" >
                                {genreOptions.map(item => (
                                    <option value={item.type} key={item.id} >{item.name}</option>
                                ))}
                            </select>

                        </div>

                        <div>
                            <h4 className="font-bold ml-2">Exibir por:</h4>
                            <select onChange={handleAddEvaluated} className="p-2 border w-[300px]  sm:w-[350px] md:w-[200px] outline-none border-black bg-slate-100  text-black rounded-md" >
                                {filterOptions.map(item => (
                                    <option key={item.id} value={item.type}>{item.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <h4 className="font-bold ml-2">Ordenar por:</h4>
                            <select onChange={handleAddAverage} className="p-2 outline-none w-[300px] sm:w-[350px] md:w-[200px] bg-slate-100 border border-black  text-black rounded-md" >
                                {typePopulare.map(item => (
                                    <option key={item.id} value={item.type}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Aqui ficará os filmes */}

                <div className="w-screen flex flex-col justify-center items-center self-center bg-slate-200 dark:bg-black">
                    {gapSerie.isLoading && 'Carregando ...'}

                    {!gapSerie.isLoading && gapSerie.isFetching && 'Está Recarregando...'}




                    {delayedInputValue &&
                        <div>
                            <p className="font-bold text-xl mt-8">Resultados para: {delayedInputValue}</p>
                        </div>
                    }



                    <div className="">
                        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center md:h-full  m-8 ml-8 gap-6 mt-8 md:m-16 items-center">
                            {gapSerie?.data?.results.map((item: any) => (

                                <div key={item.id} className="border w-[300px] xl:w-[310px] 2xl:w-[330px] bg-purple-600 dark:bg-red-600 border-black dark:border-white md:hover:scale-105 transition-transform md:truncate rounded-md p-4 gap-4 flex flex-col justify-center items-center box-border">
                                    <div>
                                        <Link href={`/datailserie/${item.id}`} key={item.id}>
                                            {item.poster_path ?

                                                <img className="md:w-[320px] w-[320px]  h-[360px]" src={`${widthMage}${item.poster_path}`} alt="" />
                                                :
                                                <img className="w-[340px] h-[360px]" src={'Los.gif'} alt="" />
                                            }

                                            <h1 className=" text-sm font-bold w-[230px] md:w-[250px] truncate mt-2 2xl:w-[300px]">{item.name}</h1>
                                        </Link>

                                        <div className="flex justify-between items-center w-full mt-4">
                                            <div className="flex gap-2 items-center">
                                                <FaStar className="text-yellow-400 font-bold" />
                                                <p className="font-bold">{item.vote_average?.toFixed(1)}</p>
                                            </div>
                                            <div>
                                                {favorites.some(fav => fav.id === item.id) ?
                                                    <button onClick={() => removeFavorite(item.id)}><FaHeart className="text-2xl font-bold cursor-pointer" /></button>
                                                    :
                                                    <button onClick={() => addFavorite(item.id, item.title, item.poster_path)}><FaRegHeart className="text-2xl font-bold cursor-pointer" /></button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div >
                    </div>
                    <div className="self-center flex justify-center items-center text-xl md:mb-4 md:mr-4 md:w-[500px]  w-screen">
                        {/* <Pagination onChange={handlePage} showControls total={500} initialPage={pageNumber} color="default" /> */}
                        {variants.map((variant) => (
                            <Pagination key={variant} onChange={handlePage} initialPage={pageNumber} total={500} variant="bordered" color="default" size="lg" />
                        ))}
                    </div>
                </div>
            </div>
        </>

    )

}