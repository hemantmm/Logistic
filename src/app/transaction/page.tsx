/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { ReactElement, useCallback, useState } from 'react'
import AdminSidebar from '../AdminSidebar'
import { Column } from 'react-table'
import TableHOC from '../TableHOC'
import Link from 'next/link'

interface DataType{
  user:string
  amount:number
  discount:number
  quantity:number
  status:ReactElement
  action:ReactElement
}

const columns:Column<DataType>[]=[
  {
  Header:"User", accessor:"user"
  },
  {
    Header:"Amount", accessor:"amount"
  },
  {
    Header:"Discount", accessor:"discount"
  },
  {
    Header:"Quantity", accessor:"quantity"
  },
  {
    Header:"Status", accessor:"status"
  },
  {
    Header:"Action", accessor:"action"
  },
]

const arr:DataType[]=[
  {
    user:"patel",
  amount:2500,
  discount:200,
  quantity:3,
  status:<span className='text-red-600'>Processing</span>,
  action:<Link href="/transaction/sajknaskd" >Manage</Link>,
  },
  {
    user:"patel",
  amount:2500,
  discount:200,
  quantity:3,
  status:<span className='text-red-600'>Processing</span>,
  action:<Link href="/transaction/sajknaskd" >Manage</Link>,
  },
  {
    user:"patel",
  amount:2500,
  discount:200,
  quantity:3,
  status:<span className='text-red-600'>Processing</span>,
  action:<Link href="/transaction/sajknaskd" >Manage</Link>,
  },
]

function page() {

  const [data]=useState<DataType[]>(arr)

  const Table=useCallback(
    TableHOC<DataType>(columns,data,"dashboard-product-box","Transactions",true),[]
  )
  
  return (
    <div className='grid grid-cols-5 gap-8 h-screen bg-gray-200'>
    <AdminSidebar />
    <main>{Table()}</main>
  </div>
  )
}

export default page