"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import {RiTwitterXFill} from 'react-icons/ri'
import {BiLogoLinkedin,BiLogoPinterestAlt,BiLogoFacebook} from 'react-icons/bi'


function Navbar() {

    const [isClick,setIsClick]=useState(false)
    const toggleNavbar=()=>{
        setIsClick(!isClick)
    }

  return (
    <>
    <header className="bg-orange-400 py-4">
      <div className="container mx-auto flex justify-between items-center">
    <h1 className="text-white font-bold text-1xl ml-64">
      <a href='/'>
      Contact &nbsp;
      <button className='border-2 p-1 hover:text-blue-500 hover:bg-white rounded-xl'>2929292929</button>
      </a>
      </h1>
    <div className="flex items-center text-white">
      <BiLogoFacebook size={25} class="h-8 mx-4 cursor-pointer p-0.5 hover:bg-white hover:text-blue-600 rounded-lg" />
      <RiTwitterXFill size={25} class="h-8 mx-4 cursor-pointer p-0.5 hover:bg-white hover:text-black rounded-lg" />
      <BiLogoPinterestAlt size={25} class="h-8 mx-4 cursor-pointer p-0.5 hover:bg-white hover:text-black rounded-lg" />
      <BiLogoLinkedin size={25} class="h-8 mx-4 cursor-pointer p-0.5 hover:bg-white hover:text-blue-500 rounded-lg" />
    </div>
  </div>
      </header>

    <nav className='bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <Link href='/' className='text-white'>
                            Logo
                        </Link>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <div className='ml-4 flex items-center space-x-4'>
                        <Link href="/" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                            Home
                        </Link>
                        <Link href="/about" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                            About
                        </Link>
                        <Link href="/service" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                            Services
                        </Link>
                        <Link href="/location" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                            Location
                        </Link>
                        <Link href="/contact" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                            Contact
                        </Link>
                    </div>
                </div>
                <div className='md:hidden flex items-center'>
                    <button className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={toggleNavbar}>
                        {isClick ? (
                            <svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        ):(
                            <svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 ' />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar