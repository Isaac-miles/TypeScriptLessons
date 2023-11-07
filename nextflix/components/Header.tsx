'use client'

import Image from "next/image"
import Link from "next/link"

import { BellIcon, MagnifyingGlassIcon as SearchIcon, } from "@heroicons/react/20/solid"
import { useEffect, useState } from "react"


const Header = () => {
    const [isScrolled, setIscrolled] = useState(false)

    const imgUrl = new URL(`/public/img/netflix-logo.png`, import.meta.url).href
    const accImgUrl = new URL(`/public/img/acc-img.png`, import.meta.url).href

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 0){
                setIscrolled(true)
            }else{
                setIscrolled(false)
            }
        }
       
        window.addEventListener('scroll', handleScroll)

        return window.removeEventListener('scroll',handleScroll)
    },[])

  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image 
        src={imgUrl}
        alt="netflix"
        width={150}
        height={150}
        className="cursor-pointer object-contain"/>

        <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">Tv Shows</li>
            <li className="headerLink">Movie</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline "/>
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="hidden h-6 w-6 sm:inline "/>
        <Link href={'/account'}>
          <Image 
        src={accImgUrl}
        alt="account"
        width={30}
        height={30}
        className="cursor-pointer rounded"/>
        </Link>
      </div>
    </header>
  )
}

export default Header