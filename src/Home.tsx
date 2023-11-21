import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Image from 'next/image';
import logo1 from './app/images/logo1.jpg'
import logo2 from './app/images/logo2.jpg'
import logo3 from './app/images/logo3.jpg'
import logo4 from './app/images/logo4.jpg'
import logo5 from './app/images/logo5.jpg'
import logo6 from './app/images/logo6.jpg'
import logo7 from './app/images/logo7.jpg'

function Home() {

  const images=[
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
  ]

  const zoomInProperties={
    scale:1,
    duration:5000,
    transitionDuration:300,
    infinity:true,

    prevArrow:(
      <div className='ml-10 top-40 md:top-72'>
        <FaArrowLeft color='red' className='h-20 w-10 p-3 cursor-pointer' />
      </div>
    ),
    nextArrow:(
      <div className='mr-10 top-40 md:top-72 '>
        <FaArrowRight color='red' className='h-20 w-10 p-3 cursor-pointer' />
      </div>
    ),
  }

  return (
    <>
    <div className='w-full h-screen'>
      <Zoom {...zoomInProperties}>
        {images.map((each,index)=>(
          <div key={index} className='flex justify-center md:items-center items-start w-screen h-screen relative'>
            <Image src={each} alt='images' width={150} height={10} className='w-full' />
          </div>
        ))}
      </Zoom>
    </div>
    </>
  )
}

export default Home