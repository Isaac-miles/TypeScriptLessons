import getMoviesData from "@/utils/getData"

import Home from "./home"
import getProduct from "./getProduct"
import payments from "@/lib/stripe"

async function App() {
  // const products = await getProduct()
  try {
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
  console.log(netflixOriginals)

  } catch (error) {
    console.log(error)
  }
 

  return (
    // <Home 
    // netflixOriginals={netflixOriginals}
    // trendingNow={trendingNow}
    // topRated={topRated}
    // actionMovies={actionMovies}
    // comedyMovies={comedyMovies}
    // horrorMovies={horrorMovies}
    // romanceMovies={romanceMovies}
    // documentaries={documentaries} 
    // products={products}
    // />
  <h1>jjj</h1>
  )
}

export default App