"use client"
import React, { ReactElement, useCallback, useState } from 'react'
import AdminSidebar from '../AdminSidebar'
import { Column } from 'react-table'
import TableHOC from '../TableHOC'
import Image from 'next/image'
import logo from '../../../public/next.svg'
import { FaTrash } from 'react-icons/fa'

interface DataType{
  avatar:ReactElement
  name:string
  email:string
  gender:string
  role:string
  action:ReactElement
}

const columns:Column<DataType>[]=[
  {
  Header:"Avatar", accessor:"avatar"
  },
  {
    Header:"Name", accessor:"name"
  },
  {
    Header:"Email", accessor:"email"
  },
  {
    Header:"Gender", accessor:"gender"
  },
  {
    Header:"Role", accessor:"role"
  },
  {
    Header:"Action", accessor:"action"
  },
]

const arr:DataType[]=[
  {
    avatar:<Image src={logo} alt='user' width={20} height={20} />,
    name:"hello",
    email:"hello@email.com",
    gender:"male",
    role:"user",
    action:(
      <button type="button">
        <FaTrash />
      </button>
    )
  },
]

function page() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data]=useState<DataType[]>(arr)

  const Table=useCallback(
    TableHOC<DataType>(columns,data,"dashboard-product-box","Customers",true),[]
  )

  return (
    <div className='grid grid-cols-5 gap-8 h-screen bg-gray-200'>
    <AdminSidebar />
    <main>{Table()}</main>
  </div>
  )
}

export default page