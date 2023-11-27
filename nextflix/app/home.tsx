'use client'

import Banner from '@/components/Banner'
import Header from '@/components/Header'
import getMoviesData from '@/utils/getData'
import Row from '@/components/Row'
import { MovieProps } from '@/types'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { modalState } from '@/features/modalSlice'
import Modal from '@/components/Modal'
import Plans from '@/components/Plans'
import { Product } from '@stripe/firestore-stripe-payments'

interface HomeProps {
    netflixOriginals:MovieProps
        trendingNow: MovieProps
        topRated:MovieProps
        actionMovies:MovieProps
        comedyMovies:MovieProps
        horrorMovies:MovieProps
        romanceMovies:MovieProps
        documentaries:MovieProps
        products:Product[] | void
}

export default  function Home({
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
    products
  }: HomeProps) {

  const modal = useSelector(modalState)
    const subscription = false
    console.log(products)
    if(!subscription) return <Plans />

    
  return (
    <div className={`relative h-screen bg-gradient-to-b  lg:h-[140vh] ${modal && '!h-screen overflow-hidden'}`}>

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
    {modal && <Modal/>}
    </div>
  )
}
