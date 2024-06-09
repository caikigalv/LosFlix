"use client"
import { useQuery } from "@tanstack/react-query"
import {SetMovies, SetSearchMovies, SetSearchSerie, SetSerie, getMovie, getSerie } from "./api"



export const popularMovies = () => {
    const query = useQuery({
        queryKey: ['movie'],
        queryFn: getMovie,
    })
    return query
}

export const moviesAll = (page:number = 1,  genre_ids:number, evaluated:string,  average:string, searchText:string) => {
    
    const query = useQuery({
        queryKey: ['movie', page, genre_ids, evaluated, average, searchText],
        queryFn: ()=> SetMovies(page, genre_ids, evaluated, average, searchText)
    })

    return query
}
export const SearchMoviesAll = (page:number = 1, searchText:string) => {
    const query = useQuery({
        queryKey: ['search', page, searchText],
        queryFn: ()=> SetSearchMovies(page, searchText)
    })
    return query
}

export const serieAll = (page:number = 1,  genre_ids:number, evaluated:string,  average:string, searchText:string) => {
    const query = useQuery({
        queryKey: ['serie', page, genre_ids, evaluated, average, searchText],
        queryFn: ()=> SetSerie(page, genre_ids, evaluated, average, searchText)
    })

    return query
}
export const SearchSerieAll = (page:number = 1, searchText:string) => {
    const query = useQuery({
        queryKey: ['search', page, searchText],
        queryFn: ()=> SetSearchSerie(page, searchText)
    })
    return query
}



export const  popularSerie = (page:number = 1) =>{
    const query = useQuery({
        queryKey:['tv', page],
        queryFn: ()=> getSerie(page)
    })
    return query
}


