import Banner from '@/components/Banner'
import Header from '@/components/Header'

import getMoviesData from '@/utils/getData'
import { Movies } from '@/types'

export default async function Home() {
  // const {netflixOriginals} = await getMoviesData()
  const netflixOriginals = {
    page:1,
    results: [],
    total_pages:1,
    total_results:1
  }
    if(!netflixOriginals){
      return <p>Error while fetching Movies...</p>
    }

  return (
    <div className='relative h-screen bg-gradient-to-b from-green-900/10  to-[#010511] lg:h-[140vh]'>

      <Header />



    <main className="">
      <Banner netflixOriginals={netflixOriginals} />
    </main>
    </div>
  )
}
