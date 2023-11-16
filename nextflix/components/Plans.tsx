import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Plans() {
    // const imgUrl = new URL(`/public/img/netflix-logo.png`, import.meta.url).href

  return (
    <div>
        <Head>
            <title>Netnaija flix</title>
        </Head>

        <header>
        <Link href='/'>
        <Image 
        src='/netflix-logo.png'
        alt="netflix"
        width={100}
        height={100}
        priority
        className="cursor-pointer object-contain w-auto h-auto"/>
        </Link>
        <button className='text-lg font-medium hover:underline'>Sign Out</button>
        </header>
        
    </div>
  )
}

export default Plans