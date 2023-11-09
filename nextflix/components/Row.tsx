import { Movies } from "@/types"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import Thumbnail from "./Thumbnail"


type RowProps = {
    title:string,
    movies:Movies[]
}

const Row = ({title,movies} : RowProps) => {

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
        <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">{title}</h2>

        <div className="group relative md:-ml-2" >
            <ChevronLeftIcon  className="rowIcons"/>
            <div>

                <div className="flex scrollbar-hide items-center space-x-0.5 overflow-x-scroll md:space-x-2.5  md:p-2">
                    {movies.map((movie)=>(
                         <Thumbnail key={movie.id} movie={movie}/>
                    ))}
                  
                </div>
            </div>
            <ChevronRightIcon  className="rowIcons"/>

        </div>
    </div>
  )
}

export default Row