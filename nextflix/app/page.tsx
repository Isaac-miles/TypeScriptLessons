import App from './app'
import Banner from '@/components/Banner'
import Header from '@/components/Header'
import getMoviesData from '@/utils/getData'
import Row from '@/components/Row'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { modalState } from '@/features/modalSlice'


export default async function Home() {
  // const modal = useSelector(modalState)
  
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
    <App 
    netflixOriginals={netflixOriginals}
    trendingNow={trendingNow}
    topRated={topRated}
    actionMovies={actionMovies}
    comedyMovies={comedyMovies}
    horrorMovies={horrorMovies}
    romanceMovies={romanceMovies}
    documentaries={documentaries} />
  )
}
