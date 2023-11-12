import { useState, useEffect, useContext, createContext,useMemo, ReactNode } from "react"
import { useRouter } from "next/router"
import { auth } from "../firebase"
import {
     createUserWithEmailAndPassword,
     onAuthStateChanged,
     signInWithEmailAndPassword,
     signOut,
     User
     } from "@firebase/auth"
import { NextResponse } from "next/server"

interface IAuthContext {
    user:User | null
    signUp:(email:string, password:string)=>Promise<void>
    signIn:(email:string, password:string)=>Promise<void>
    logOut:()=>Promise<void>
    loading:boolean
}

type Children = {
    children: ReactNode
}
const AuthContext = createContext<IAuthContext>({})

export function AuthProvider({children}:Children) {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState<User | null>()
    const router = useRouter()

   const signUp = async (email:string, password:string):Promise<void> => {
        setLoading(true)
        await createUserWithEmailAndPassword(auth,email, password)
        .then((userCredentials):void =>{
            setUser(userCredentials.user)
            router.push('/')
            setLoading(false)
        }).catch((err)=>{
            if (err instanceof Error){
                return err.message
                // return new NextResponse(err.message)
            }
        }).finally(()=>setLoading(false))
   }

   const signIn =async (email:string, password:string):Promise<void> => {
        setLoading(true)
        await signInWithEmailAndPassword(auth,email, password)
        .then((userCredentials):void =>{
            setUser(userCredentials.user)
            if(userCredentials.user){
                router.push('/')
                setLoading(false)
            }
           
        }).catch((err)=>{
            if (err instanceof Error){
                return err.message
                // return new NextResponse(err.message)
            }
        }).finally(()=>setLoading(false))
   }

   const logOut = async ():Promise<void>  =>{
        setLoading(true)

        signOut(auth)
        .then(()=>{
            setUser(null)
            router.replace('/login')
        })
        .catch((err)=>{
            if (err instanceof Error){
                return err.message
                // return new NextResponse(err.message)
            }
        }).finally(()=>setLoading(false))
   }
  return[loading, user, setLoading, setUser]
}


export default useAuth