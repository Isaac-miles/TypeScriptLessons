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
      <button onClick={handleClose}>
        <XMarkIcon className='h-6 w-6'/>
      </button>
    </>
    </MuiModal>

  )
}

export default Modal