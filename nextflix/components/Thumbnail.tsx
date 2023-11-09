import { BASE_URL_THUMBNAIL } from "@/constants/movie"
import { Movies } from "@/types"
import Image from "next/image"

type ThumbnailProps ={
    movie:Movies
}

const Thumbnail = ({movie}:ThumbnailProps) => {
    const thumbImage = new URL(`${BASE_URL_THUMBNAIL}${movie?.backdrop_path || movie?.poster_path}`, import.meta.url).href

  return (
    <div className="relative h-28 min-w-[180px]">
        <Image 

         src={thumbImage} 
         alt="thumbnail"
         fill={true} 
         className="rounded-sm object-cover md:rounded"/>
    </div>
  )
}

export default Thumbnail