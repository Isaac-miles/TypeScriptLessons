import { useState, useEffect, useContext, createContext,useMemo } from "react"
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

function useAuth() {
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
            router.push('/')
            setLoading(false)
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
  return[]
}

export default useAuth