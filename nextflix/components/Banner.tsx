'use client'

import { MovieProps,Movies } from "@/types"
import Image from "next/image"
import { useEffect, useState } from "react"
import { BASE_URL } from "@/constants/movie"

import {FaPlay} from 'react-icons/fa'
type Props ={
    netflixOriginals :MovieProps
}

const Banner = ({netflixOriginals}:Props) => {
    const [movie, setMovie] = useState<Movies | null>(null)

    useEffect(()=>{
        setMovie(netflixOriginals.results[Math.floor(Math.random() * netflixOriginals.results.length)])

    },[netflixOriginals.results])

    if(!movie){
        return <p>Failed to fetch Movies</p>
    }

    const movieImage = new URL(`${BASE_URL}${movie?.backdrop_path || movie.poster_path}`, import.meta.url).href

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
        <div className="absolute top-0 left-0 w-screen h-[95vh] -z-10">
        <Image fill={true} src={movieImage}  alt="Movie logo" objectFit="cover"  priority/>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold lg:text-7xl">{movie?.title || movie?.original_title}</h1>
        <p  className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movie.overview}</p>

        <div>
            <button className="btn-banner"><FaPlay className="h-4 w-4 text-black md:h-7 md:w-7"/> play</button>
            <button className="btn-banner">More Info</button>
        </div>
    </div>
   
  )
}

export default Banner