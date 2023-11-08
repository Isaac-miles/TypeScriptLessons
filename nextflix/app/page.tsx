import Banner from '@/components/Banner'
import Header from '@/components/Header'

import {GetNetFlixOriginalsProps,getNetFlixOriginals} from '@/utils/getData'
import { Movies } from '@/types'

export default async function Home() {
  // const netflixOriginals:GetNetFlixOriginalsProps = await getNetFlixOriginals()
   
  return (
    <div className='relative h-screen bg-gradient-to-b from-green-900/10  to-[#010511] lg:h-[140vh]'>

      <Header />



    <main className="">
      <Banner/>
    </main>
    </div>
  )
}
