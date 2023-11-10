'use client'
import React, { useState } from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'

interface Inputs {
    email:string,
    password:string
}

function LoginForm() {
    const [login, setLogin] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

      
  return (
    <form className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14'> 
        <h1 className='text-4xl font-semibold'>Sign In</h1>
        <div className='space-y-4'>
            <label htmlFor="email"  className='inline-block w-full '>
                <input type='email' name='email' placeholder='Email Address' className='input' />
            </label>

            <label htmlFor="email" className='inline-block w-full '>
                <input type='password' name='email' placeholder='Email Address' className='input'/>
            </label>

        </div>
            <button className='w-full rounded bg-[#E50914] py-3 font-semibold'>Sign In</button>

            <div className='text-[grey]'>
               <span>New to Netflix ? </span> 
                <button type="submit" className='text-white hover:underline'>Sign up</button>
            </div>
    </form>
  )
}

export default LoginForm

