import MuiModal from '@mui/material/Modal'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useAppDispatch } from '@/store/store' 
import { modalState,openCloseModal} from '@/features/modalSlice'

function Modal() {
  const modal = useSelector(modalState)
  const dispatch = useAppDispatch()

    const handleClose =()=>{
        // set modal to false
      dispatch(openCloseModal())
      console.log('closs')
    }
  return (
    <MuiModal open={modal} onClose={handleClose}>
    <>
    
    </>
    </MuiModal>

  )
}

export default Modal