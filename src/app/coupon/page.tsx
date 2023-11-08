"use client"
import React, { useState, FormEvent, useEffect } from 'react'
import AdminSidebar from '../AdminSidebar'

const styles = {
    adminContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 4fr',
      gap: '2rem',
      height: '100vh',
      backgroundColor: 'rgb(247, 247, 247)',
    },
  }

  const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbols = "!@#$%^&*()_+";

function page() {

    const [size,setSize]=useState<number>(8)
    const [prefix,setPrefix]=useState<string>("")
    const [includeNumbers,setIncludeNumbers]=useState<boolean>(false)
    const [includeCharacters,setIncludeCharacters]=useState<boolean>(false)
    const [includeSymbols,setIncludeSymbols]=useState<boolean>(false)
    const [isCopied,setIsCopied]=useState<boolean>(false)

    const [coupon,setCoupon]=useState<string>("")

    const copyText=async(coupon:string)=>{
          await window.navigator.clipboard.writeText(coupon)
          setIsCopied(true)
    }

    const submitHandler=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        if(!includeNumbers && !includeCharacters && !includeSymbols) 
        {
            return alert('please select one atleast')
        }

        let result:string=prefix || ""

        const looplength:number=size-result.length
        for(let i=0;i<looplength;i++)
        {
            let entireString:string=""
            if(includeCharacters)
            {
                entireString+=allLetters
            }
            if(includeNumbers)
            {
                entireString+=allNumbers
            }
            if(includeSymbols)
            {
                entireString+=allSymbols
            }

            const randomNum:number=~~(Math.random()*entireString.length)
            result+=entireString[randomNum]
        }
        setCoupon(result)
    }

    useEffect(()=>{
        setIsCopied(false)
    },[coupon])

  return (
    // <div>coupon</div>
    <div style={styles.adminContainer} className='adminContainer'>
      <AdminSidebar />
      <main className='overflow-y-auto'>
        <h1>Coupon</h1>
        {/* @include flex(column, center, center, 2rem); */}
        <section className='h-full flex items-center justify-center flex-col gap-8'>
            <form className='max-w-md grid grid-cols-2 grid-rows-1 gap-8' onSubmit={submitHandler}>
                <input className='p-4 border border-gray-400 outline-none rounded-md' type="text" placeholder='Text to include' value={prefix} onChange={e=>setPrefix(e.target.value)} maxLength={size} />

                <input className='p-4 border border-gray-400 outline-none rounded-md' type="number" placeholder='Coupon Length' value={size} onChange={e=>setSize(Number(e.target.value))} min={8} maxLength={25} />
                <fieldset className='p-4 border border-gray-400 rounded flex items-center justify-center flex-wrap col-span-2'>
                    <legend>Include</legend>

                    <input className='p-4 border border-gray-400 outline-none rounded-md' type="checkbox" checked={includeNumbers} onChange={()=>setIncludeNumbers((prev)=>!prev)} maxLength={size} />
                    <span className='text-xs font-light ms-1 me-4'>Numbers</span>

                    <input className='p-4 border border-gray-400 outline-none rounded-md' type="checkbox" checked={includeCharacters} onChange={()=>setIncludeCharacters((prev)=>!prev)} maxLength={size} />
                    <span className='text-xs font-light ms-1 me-4'>Characters</span>

                    <input className='p-4 border border-gray-400 outline-none rounded-md' type="checkbox" checked={includeSymbols} onChange={()=>setIncludeSymbols((prev)=>!prev)} maxLength={size} />
                    <span className='text-xs font-light ms-1 me-4'>Symbols</span>
                </fieldset>

                <button className='bg-blue-500 font-bold text-base w-full p-4 border-0 text-white my-8 rounded-lg' type="submit">Generate</button>
            </form>
            {
                coupon && <code className='relative text-lg tracking-widest cursor-pointer'>
                    {coupon}
                    <span className='opacity-0 h-full w-full top-0 left-0 absolute rounded-md bg-gray-800 text-white text-sm flex items-center justify-center flex-row gap-4 hover:opacity-100' onClick={()=>copyText(coupon)}>{isCopied?"Copied":"Copy"}</span>
                </code>
            }
        </section>
      </main>
      </div>
  )
}

export default page