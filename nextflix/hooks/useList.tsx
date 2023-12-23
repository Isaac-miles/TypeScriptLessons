import { Movies } from '@/types'
import {useState} from 'react'
import {DocumentData} from 'firebase/firestore'

function useList() {
    const [list, setList] = useState<Movies[] | DocumentData[]>([])
  return (
    <div>useList</div>
  )
}

export default useList