import { User } from 'firebase/auth'
import {useState,useEffect} from 'react'

export default function useSubscription(user:User | null) {
    const [subscription, setSubscription] = useState<null>(null)

  return (
    <div>useSubscription</div>
  )
}
