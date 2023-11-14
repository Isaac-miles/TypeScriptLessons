import MuiModal from '@mui/material/Modal'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useAppDispatch } from '@/store/store' 
import { modalState,openCloseModal} from '@/features/modalSlice'
import { XMarkIcon } from '@heroicons/react/20/solid'

function Modal() {
  const modal = useSelector(modalState)
  const dispatch = useAppDispatch()

    const handleClose =()=>{
        // set modal to false
      dispatch(openCloseModal({type:'close', action:false}))
    
    }
  return (
    <MuiModal open={modal} onClose={handleClose}>
    <>
      <button onClick={handleClose} className='modalbtn absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#962c2c] hover:bg-[#181818'>
        <XMarkIcon className='h-6 w-6'/>
      </button>

      <div>
        
      </div>
    </>
    </MuiModal>

  )
}

export default Modal