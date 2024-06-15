import axios from "axios";
import { keyapi } from "./keyapi";


export const api = axios.create({
    baseURL: 'https://api.themoviedb.org'
});

export const widthMage ='https://image.tmdb.org/t/p/w500/';
export const getMovie = async() => {
    const res = await api.get('/3/movie/popular', {
        params: {
            language: 'pt-BR',
            api_key: keyapi,
        }
    })
   return res.data
}   

export const SetMovies = async(page:number = 1, genre_ids:number, evaluated:string, average:string, searchText:string ) => {
    const res = await api.get('/3/discover/movie', {
        params: {
            adult:false,
            query:searchText,
            sort_by: `${evaluated}.${average}`,
            with_genres:genre_ids || null,
            page,
            language: 'pt-BR',
            api_key: keyapi,
        }
    })
   return res.data
}   


export const SetSearchMovies = async(page:number = 1, searchTxt:string  ) => {
    const res = await api.get('3/search/movie', {
        params: {
            page,
            query: searchTxt,
            language: 'pt-BR',
            api_key:keyapi
        }
    })
   return res.data
}   


export const SetSerie = async(page:number = 1, genre_ids:number, evaluated:string, average:string, searchText:string  ) => {
    const res = await api.get('/3/discover/tv', {
        params: {
            adult:false,
            query:searchText,
            sort_by: `${evaluated}.${average}`,
            with_genres:genre_ids || null,
            page,
            language: 'pt-BR',
            api_key: keyapi,
        }
    })

    console.log(res.data)
   return res.data
}

export const SetSearchSerie = async(page:number = 1, searchTxt:string  ) => {
    const res = await api.get('3/search/tv', {
        params: {
            page,
            query: searchTxt,
            language: 'pt-BR',
            api_key:keyapi
        }
    })
   return res.data
}   








export const getSerie = async(page:number = 1)=>{
    const res = await api.get('/3/tv/popular', {
        params:{ 
            adult:false,
            page,
            language: 'pt-BR',
            api_key: keyapi,
        }
    })
    return res.data
}