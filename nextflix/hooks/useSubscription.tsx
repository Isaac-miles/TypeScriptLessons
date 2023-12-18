import { User } from 'firebase/auth'
import {useState,useEffect} from 'react'

export default function useSubscription(user:User | null) {
    const [subscription, setSubscription] = useState<>(null)

    useEffect(()=>{
        if(!user) return

        on
    },[])


  return (
    <div>useSubscription</div>
  )
}
