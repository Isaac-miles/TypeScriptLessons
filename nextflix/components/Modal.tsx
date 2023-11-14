import { useEffect,useState } from 'react'
import MuiModal from '@mui/material/Modal'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useAppDispatch } from '@/store/store' 
import { modalState,openCloseModal} from '@/features/modalSlice'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { movieState } from '@/features/movieSlice' 

function Modal() {
  const dispatch = useAppDispatch()
  const movie = useSelector(movieState)
  const modal = useSelector(modalState)


    useEffect(()=>{
      if(!movie) return

      async function fetchMovie(){
        const data = await fetch(
          `https://api.themoviedb.org/3/${
            movie?.media_type === 'tv' ? 'tv' : 'movie'
          }/${movie?.id}?api_key=${
            process.env.NEXT_PUBLIC_API_KEY
          }&language=en-US&append_to_response=videos`
        ).then((res)=>res.json())
          console.log(data)
        // if(data?.videos){
        //   const index = data.videos
        // }
      }
      fetchMovie()
    },[movie])
    const handleClose =()=>{
      dispatch(openCloseModal({type:'close', action:false}))
    }
  return (
    <MuiModal open={modal} onClose={handleClose}>
    <>
      <button onClick={handleClose} className='modalbtn absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#962c2c] hover:bg-[#181818]'>
        <XMarkIcon className='h-6 w-6'/>
      </button>

      <div>

      </div>
    </>
    </MuiModal>

  )
}

export default Modal