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

function useAuth() {

  return (
    <div>useAuth</div>
  )
}

export default useAuth