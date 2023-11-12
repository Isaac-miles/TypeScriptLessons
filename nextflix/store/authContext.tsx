import { useState, useEffect, useContext, createContext,useMemo, ReactNode, Children } from "react"
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
import { error } from "console"

interface IAuthContext {
    user:User | null
    signUp:(email:string, password:string)=>Promise<void>
    signIn:(email:string, password:string)=>Promise<void>
    logOut:()=>Promise<void>
    loading:boolean
    // error:string | null
}

type Children = {
    children: ReactNode
}
const initialValue = {
user: null,
error:null,
loading:false,
signIn:async ()=>{},
signUp:async ()=>{},
logOut:async ()=>{}
}

export function useAuth() {
    const [loading, setLoading] = useState(false)
    // const [error, setError] = useState<string | null>(null)
    const [user, setUser] = useState<User | null>(null)
    const router = useRouter()

    useEffect(()=>
        onAuthStateChanged(auth,(user)=>{
            if(user){
                //Logged in...
                setUser(user)
                setLoading(false)
            }else{
                //Not Logged in..
                setUser(null)
                setLoading(true)
                router.push('/login')
            }
        })
    ,[])

   const signUp = async (email:string, password:string):Promise<void> => {
        setLoading(true)
        // setError(null)
        await createUserWithEmailAndPassword(auth,email, password)
        .then((userCredentials):void =>{
            setUser(userCredentials.user)
            router.push('/')
            setLoading(false)
        }).catch((err)=>{
                //   setError(err)
                if(err instanceof Error){

                    return new NextResponse(err.message)
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
            if(err instanceof Error){

                return new NextResponse(err.message)
            }
                // return new NextResponse(err.message)
            
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
    const memoedValues =  useMemo(()=>({
        loading, user, signIn,signUp,logOut
   }),[user, loading])

  return memoedValues
}

 export const AuthContext = createContext<IAuthContext>(initialValue)

export default function AuthProvider({children}:Children) {
  return <AuthContext.Provider value={useAuth()}>
    {children}
  </AuthContext.Provider>
}


// export default 