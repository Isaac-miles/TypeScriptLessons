import { Movies } from "@/types"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"


type RowProps = {
    title:string,
    movies:Movies[]
}

const Row = ({title,movies} : RowProps) => {

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
        <h2>{title}</h2>
        <div className="group relative md:-ml-2" >
            <ChevronLeftIcon  className="rowIcons"/>
            <ChevronRightIcon  className="rowIcons"/>

        </div>
    </div>
  )
}

export default Row