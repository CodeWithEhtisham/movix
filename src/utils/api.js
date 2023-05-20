import axios from "axios";
import { compileString } from "sass";

const BASE_URL = "https://api.themoviedb.org/3/";
const TMDB_TOKEN= import.meta.env.VITE_TMDB_TOKEN;
const headers = {
    Authorization: `Bearer ${TMDB_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8",
    };

export const fetchDataFromApi = async (url,params) =>{
    try
    {
        const {data}=axios.get(
            BASE_URL+url,{
                headers,
                params
            }
        )
        return data
    }
    catch (e){
        console.log(e)
    }
}