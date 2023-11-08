import requests from "./request"
import { Movies } from "@/types"

export const getNetFlixOriginals =async ():Promise<Movies[]> => {

   const data = await  fetch(requests.fetchNetflixOriginals).then((res) => res.json())
    return data
}
export type GetNetFlixOriginalsProps = Awaited<ReturnType<typeof getNetFlixOriginals>>



const getData = async() => {

       const [
        netflixOriginals,
        trendingNow,
        topRated,
        actionMovies,
        comedyMovies,
        horrorMovies,
        romanceMovies,
        documentaries,
      ] = await Promise.all([
        fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
        fetch(requests.fetchTrending).then((res) => res.json()),
        fetch(requests.fetchTopRated).then((res) => res.json()),
        fetch(requests.fetchActionMovies).then((res) => res.json()),
        fetch(requests.fetchComedyMovies).then((res) => res.json()),
        fetch(requests.fetchHorrorMovies).then((res) => res.json()),
        fetch(requests.fetchRomanceMovies).then((res) => res.json()),
        fetch(requests.fetchDocumentaries).then((res) => res.json()),
      ])


         return {  
           netflixOriginals,
           trendingNow,
           topRated,
           actionMovies,
           comedyMovies,
           horrorMovies,
           romanceMovies,
           documentaries
        }
}


// export default getData
