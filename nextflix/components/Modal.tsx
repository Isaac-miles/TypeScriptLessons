import { useEffect,useState } from 'react'
import MuiModal from '@mui/material/Modal'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useAppDispatch } from '@/store/store' 
import { modalState,openCloseModal} from '@/features/modalSlice'
import { HandThumbUpIcon, PlusIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { movieState } from '@/features/movieSlice' 
import { Element,Genre } from '@/types'
import ReactPlayer from 'react-player/youtube'
import { FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa'

function Modal() {
  const dispatch = useAppDispatch()
  const movie = useSelector(movieState)
  const modal = useSelector(modalState)
  const [trailer, setTrailer] = useState("")
  const [genres, setGenres] = useState<Genre[]>([])
  const [muted, setMuted] = useState(true)

    useEffect(()=>{
      if(!movie) return

      async function fetchMovie(){
        const data = await fetch(
          `https://api.themoviedb.org/3/${
            movie?.media_type === 'tv' ? 'tv' : 'movie'
          }/${movie?.id}?api_key=${
            process.env.NEXT_PUBLIC_API_KEY
          }&language=en-US&append_to_response=videos`
        )
        .then((res)=>res.json())
        .catch((err)=>{
          // alert(err)
        })
        if(data?.videos){
          const index = data.videos.results.findIndex((element:Element)=>element.type=== "Trailer")
          setTrailer(data?.videos.results[index]?.key)
        }

        if(data?.genres){
          setGenres(data.genres)
        }
      }
   
      fetchMovie()
    },[movie])

    const handleClose =()=>{
      dispatch(openCloseModal({type:'close', action:false}))
    }
  return (
    <MuiModal open={modal} onClose={handleClose} className='fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide '>
    <>
      <button onClick={handleClose} className='modalbtn absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#962c2c] hover:bg-[#181818]'>
        <XMarkIcon className='h-6 w-6'/>
      </button>

      <div className='relative pt-[56.25%]'>
      <ReactPlayer 
      url={`http://www.youtube.com/watch?v=${trailer}`}
      width= "100%"
      height= "100%"
      style={{position:'absolute', top:'0', left:'0'}}
      playing
      muted={muted}
      />

      <div className='absolute bottom-10 flex w-full items-center justify-between px-10'>
        <div className='flex space-x-2'>
          <button className='flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]'>
          <FaPlay className="h-7 w-7 text-black" />
            Play
          </button>

          <button className='modalbtn'>
            <PlusIcon className='h-7 w-7' />
          </button>

          <button className='modalbtn'>
            <HandThumbUpIcon className='h-7 w-7' />
          </button>
        </div>

        <button className="modalbtn" onClick={()=>setMuted(!muted)}>
          {muted ?  <FaVolumeMute className="h-6 w-6"/>: <FaVolumeUp className="h-6 w-6"/>}
        </button>
      </div>
      </div>

      <div className='flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8'>
        <div className='space-y-6 text-lg'>
          <div className='flex items-center space-x-2 text-sm'>
            <p className='font-semibold  text-green-400'>{movie!.vote_average * 10} Match</p>
            <p className='font-light'>{movie?.release_date}</p>
            <div className='flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs'>HD</div>
          </div>

          <div className='flex flex-col gap-x-10 gap-y-4 font-light md:flex-row'>
            <p className='w-5/6'>{movie?.overview}</p>
            <div className='flex flex-col space-y-3 text-sm'>
              <div>
                <span className='text-[grey]'>Genres: </span>
                {genres.map((genre)=>genre.name).join(', ')}
              </div>

              <div>
                <span className='text-[grey]'>Original language: </span>
                {movie?.original_language}
              </div>

              <div>
              <span className='text-[grey]'>Original language: </span>
                {movie?.vote_count}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    </MuiModal>

  )
}

export default Modal