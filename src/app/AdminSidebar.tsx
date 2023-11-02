"use client"
import Link from 'next/link'
import React from 'react'
import {RiDashboardFill, RiShoppingBag3Fill, RiCoupon3Fill} from 'react-icons/ri'
import {IoIosPeople} from 'react-icons/io'
import {AiFillFileText} from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import {FaChartBar, FaChartPie} from 'react-icons/fa'

function AdminSidebar() {

    const location=usePathname()

  return (
    <>
        <aside className='w-full bg-white p-4 z-10 overflow-y-auto scrollbar:hidden'>
            <h2>Logo.</h2>
            <div className='m-8'>
                <h5 className='opacity-80 my-4'>Dashboard</h5>
                <ul className='flex flex-col space-y-2 gap-2 text-xl'>
                    <Li url='/dashboard' text='Dashboard' Icon={RiDashboardFill} location={location} />

                    <Li url='/products' text='Products' Icon={RiShoppingBag3Fill} location={location} />

                    <Li url='/customers' text='Customers' Icon={IoIosPeople} location={location} />

                    <Li url='/transaction' text='Transaction' Icon={AiFillFileText} location={location} />

                </ul>
            </div>

            <div className='m-8'>
                <h5 className='opacity-80 my-4'>Charts</h5>
                <ul className='flex flex-col gap-2 text-xl'>
                    <Li url='/bar' text='Bar' Icon={FaChartBar} location={location} />

                    <Li url='/pie' text='Pie' Icon={FaChartPie} location={location} />

                </ul>
            </div>

            <div className='m-8'>
                <h5 className='opacity-80 my-4'>Apps</h5>
                <ul className='flex flex-col gap-2 text-xl'>
                    <Li url='/coupon' text='Coupon' Icon={RiCoupon3Fill} location={location} />

                </ul>
            </div>

        </aside>
    </>
  )
}

interface LiProps {url:string;text:string;location:Location;Icon:Icons}
const Li=({url,text,location,Icon}:LiProps)=>(
    <li className='pt-2 pb-2 pl-4 pr-4 border-red-100 rounded-lg' style={{
        backgroundColor:location.includes(url)?"rgba(0,115,255,0.1)":"white"
    }}>
        <Link href={url} className='flex gap-2 items-center' style={{
            color:location.includes(url)?"rgb(0,115,255)":"black"
        }}>
        <Icon /> 
            {/* Dashboard */}
            {text}
        </Link>
    </li>
)

export default AdminSidebar