import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import useAuth from '@/hooks/useAuth'
import { CheckIcon } from '@heroicons/react/24/outline'

function Plans() {
    const imgUrl = new URL(`/public/img/netflix-logo.png`, import.meta.url).href
    const {logOut} = useAuth()


  return (
    <div>
        <Head>
            <title>Netnaija flix</title>
        </Head>

        <header className='border-b border-white/10 bg-[#141414] '>
            <Link href='/' as ={'image'}>
            <Image 
            src={imgUrl}
            alt="netflix"
            width={100}
            height={100}
            priority
            className="cursor-pointer object-contain w-auto h-auto"/>
            </Link>
            <button className='text-lg font-medium hover:underline' onClick={logOut}>Sign Out</button>
        </header>
        
        <main className='pt-28 '>
            <h1 className='mb-3 text-3xl font-medium'>Choose a plan</h1>
            <ul>
                <li className='flex items-center gap-x-2 text-lg'>
                    <CheckIcon className='h-7 w-7 text-[#E50914]'/>
                    Watch all you want. Ad-free.
                </li>
                <li className='flex items-center gap-x-2 text-lg'>
                    <CheckIcon className='h-7 w-7 text-[#E50914]'/>
                    Recommendations just for you
                </li>
                <li className='flex items-center gap-x-2 text-lg'>
                    <CheckIcon className='h-7 w-7 text-[#E50914]'/>
                    change or cancel your plan anytime
                </li>
            </ul>
            
            <div>
                <div className='flex w-full items-center justify-end self-end md:w-3/5 '>
                    <div className='planBox'></div>
                    <div className='planBox'></div>
                    <div className='planBox'></div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Plans