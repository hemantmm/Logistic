"use client"
import AdminSidebar from '@/app/AdminSidebar'
import Image from 'next/image'
import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'

const styles = {
  adminContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    gap: '2rem',
    height: '100vh',
    backgroundColor: 'rgb(247, 247, 247)',
  },
}

function page() {

  const [name,setName]=useState<string>("")
  const [price,setPrice]=useState<number>()
  const [stock,setStock]=useState<number>()
  const [photo,setPhoto]=useState<string>()

  const changeImageHandler=(e:ChangeEvent<HTMLInputElement>)=>{
      const file:File | undefined=e.target.files?.[0]

      const reader:FileReader=new FileReader()

      if(file)
      {
        reader.readAsDataURL(file)
        reader.onload=()=>{
          if(typeof reader.result=="string")
          {
            setPhoto(reader.result)
          }
        }
      }
  }

  return (
    <div style={styles.adminContainer} className='adminContainer'>
      <AdminSidebar />
      <main className='-mt-8 flex flex-row justify-center items-center space-x-4 p-16'>
        <article className='h-[90vh] p-8 w-full max-w-[400px] bg-white rounded-lg shadow-md'>
          <form className='flex flex-col items-center gap-8 p-8'>
            <h2 className='-mt-5 text-uppercase text-2xl font-bold tracking-wider'>New Product</h2>
            <div className='relative w-full'>
              <label className='absolute left-0 top-[-1.5rem]'>Name</label>
              <input className='p-4 border border-gray-300 bg-white rounded-lg w-full focus:outline-none' type="text" required placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
            </div>

            <div className='relative w-full'>
              <label className='absolute left-0 top-[-1.5rem]'>Price</label>
              <input className='p-4 border border-gray-300 bg-white rounded-lg w-full focus:outline-none' type="number" required placeholder='Price' value={price} onChange={(e)=>setPrice(Number(e.target.value))} />
            </div>

            <div className='relative w-full'>
              <label className='absolute left-0 top-[-1.5rem]'>Stock</label>
              <input className='p-4 border border-gray-300 bg-white rounded-lg w-full focus:outline-none' type="number" required placeholder='Stock' value={stock} onChange={(e)=>setStock(Number(e.target.value))} />
            </div>

            <div className='relative w-full'>
              <label className='absolute left-0 top-[-1.5rem]'>Photo</label>
              <input className='p-4 border border-gray-300 bg-white rounded-lg w-full focus:outline-none' type="file" required onChange={changeImageHandler} />
            </div>

            {
              photo && <Image className=' h-20 w-20 object-cover rounded-lg' src={photo} alt='new image' width={1} height={1} />
            }

            <button className='p-1 border-none bg-blue-500 text-white w-full rounded-lg text-lg cursor-pointer' type="submit">Create</button>
          </form>
        </article>
      </main>
      </div>
  )
}

export default page