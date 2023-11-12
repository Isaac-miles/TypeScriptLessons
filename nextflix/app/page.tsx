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
    <div className='relative h-screen bg-gradient-to-b  lg:h-[140vh]'>

      <Header />

    <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
      <Banner netflixOriginals={netflixOriginals} />
      <section className='md:space-y-24'>
        <Row title="Netflix Originals" movies={netflixOriginals.results}/>
        <Row title="Trending Now" movies={trendingNow.results}/>
        <Row title="TopRated" movies={topRated.results}/>
        <Row title="Documentaries" movies={documentaries.results}/>
        <Row title="Action Movies" movies={actionMovies.results}/>
        <Row title="Comedy Movies" movies={comedyMovies.results}/>
        <Row title="Horror Movies" movies={horrorMovies.results}/>
        <Row title="Romance Movies" movies={romanceMovies.results}/>

      </section>
    </main>
    </div>
  )
}
