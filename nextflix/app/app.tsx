import getMoviesData from "@/utils/getData"

import Home from "./home"
import { getProducts } from "@stripe/firestore-stripe-payments"
import payments from "@/lib/stripe"

async function App() {
//   const products = await getProducts(payments, {
//     includePrices:true,
//     activeOnly:true
//   })
//   .then((res)=>{
//     console.log('heerere', res)
//   })
//   .catch((err)=>console.log(err.message))

// console.log(products)
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

export default App