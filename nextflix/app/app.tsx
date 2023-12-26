import getMoviesData from "@/utils/getData"

import Home from "./home"
import {getProduct} from "./stripe-util/getStripesUtils"



async function getData() {
  const products = await getProduct()

  if (!products) {
    throw new Error('Failed to fetch data')
  }
 
  return products
}
 

export default async function App() {
  // const data = await getData()
  // console.log('produc')
  const {
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries
  
  } = await getMoviesData()

  return (
    <Home 
    netflixOriginals={netflixOriginals}
    trendingNow={trendingNow}
    topRated={topRated}
    actionMovies={actionMovies}
    comedyMovies={comedyMovies}
    horrorMovies={horrorMovies}
    romanceMovies={romanceMovies}
    documentaries={documentaries} 
    // products={products}
    />

  )
}

