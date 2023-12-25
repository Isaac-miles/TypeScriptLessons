'use client'

import Image from "next/image"
import Link from "next/link"

import { BellIcon, MagnifyingGlassIcon as SearchIcon, } from "@heroicons/react/20/solid"
import { useEffect, useState } from "react"
import { useAuth } from "@/store/authContext"
import BasicMenu from "./BasicMenu"


const Header = () => {
   
    const {logOut} = useAuth()
    // const imgUrl = new URL(`/public/img/netflix-logo.png`, import.meta.url).href
    // const accImgUrl = new URL(`/public/img/acc-logo.png`, import.meta.url).href


  return (
    <header className='bg-transparent'>

      <div className="flex items-center space-x-2 md:space-x-10">
        <Image 
        src="/netflix-logo.png"
        alt="netflix"
        width={100}
        height={100}
        priority
        className="cursor-pointer object-contain w-auto h-auto"/>

        <BasicMenu/>
        <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">Tv Shows</li>
            <li className="headerLink">Movie</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light ">
        <SearchIcon className="hidden h-6 w-6 sm:inline "/>
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="hidden h-6 w-6 sm:inline "/>
        <Link href={'/account'}>
          <Image 
        //onClick={()=>logOut()}
        src="/img/acc-logo.png"
        alt="account"
        width={30}
        height={30}
        className="cursor-pointer rounded w-auto h-auto"/>
        </Link>
      </div>
    </header>
  )
}

export default Header