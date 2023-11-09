import Banner from '@/components/Banner'
import Header from '@/components/Header'

import getMoviesData from '@/utils/getData'
import { Movies } from '@/types'
import Row from '@/components/Row'

export default async function Home() {
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
  
    if(!netflixOriginals){
      return <p>Error while fetching Movies...</p>
    }

  return (
    <div className='relative h-screen bg-gradient-to-b from-green-900/10  to-[#010511] lg:h-[140vh]'>

      <Header />



    <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
      <Banner netflixOriginals={netflixOriginals} />
      <section>
        <Row title="Trending Now" movies={netflixOriginals.results}/>
        <Row title="Trending Now" movies={trendingNow.results}/>
        <Row title="Trending Now" movies={topRated.results}/>
        <Row title="Trending Now" movies={documentaries.results}/>
        {'list'}
        <Row title="Trending Now" movies={actionMovies.results}/>
        <Row title="Trending Now" movies={comedyMovies.results}/>
        <Row title="Trending Now" movies={horrorMovies.results}/>
        <Row title="Trending Now" movies={romanceMovies.results}/>

      </section>
    </main>
    </div>
  )
}
