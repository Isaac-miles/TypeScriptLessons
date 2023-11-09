import { BASE_URL_THUMBNAIL } from "@/constants/movie"
import { Movies } from "@/types"
import Image from "next/image"

type ThumbnailProps ={
    movie:Movies
    // movie:Movies | DocumentData
}

const Thumbnail = ({movie}:ThumbnailProps) => {
    const thumbImage = new URL(`${BASE_URL_THUMBNAIL}${movie?.backdrop_path || movie?.poster_path}`, import.meta.url).href

  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
        <Image 
         src={thumbImage} 
         alt="thumbnail"
         fill={true} 
         sizes="100%"
         className="rounded-sm object-cover md:rounded"/>
    </div>
  )
}

export default Thumbnail