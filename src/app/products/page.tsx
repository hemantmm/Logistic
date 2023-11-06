/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { ReactElement, useCallback, useState } from 'react'
import AdminSidebar from '../AdminSidebar'
import TableHOC from '../TableHOC'
import { Column } from 'react-table'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/next.svg'
import { FaPlus } from 'react-icons/fa'

interface DataType{
  photo:ReactElement
  name:string
  price:number
  stock:number
  action:ReactElement
}

const columns:Column<DataType>[]=[
  {
  Header:"Photo", accessor:"photo"
  },
  {
    Header:"Name", accessor:"name"
  },
  {
    Header:"Price", accessor:"price"
  },
  {
    Header:"Stock", accessor:"stock"
  },
  {
    Header:"Action", accessor:"action"
  },
]

const arr:DataType[]=[
  // {
  //   photo:<Image src={logo} alt='user' width={20} height={20} />,
  //   name:"puma",
  //   price:690,
  //   stock:3,
  //   action:<Link href="/products/sajknaskd">Manage</Link>
  // },
  // {
  //   photo:<Image src={logo} alt='us1r' width={20} height={20} />,
  //   name:"macbook",
  //   price:99990,
  //   stock:23,
  //   action:<Link href="/products/sdaskdnkasjdn">Manage</Link>
  // },
  // {
  //   photo:<Image src={logo} alt='user' width={20} height={20} />,
  //   name:"puma",
  //   price:690,
  //   stock:3,
  //   action:<Link href="/products/sajknaskd">Manage</Link>
  // },
  // {
  //   photo:<Image src={logo} alt='us1r' width={20} height={20} />,
  //   name:"macbook",
  //   price:99990,
  //   stock:23,
  //   action:<Link href="/products/sdaskdnkasjdn">Manage</Link>
  // },
  // {
  //   photo:<Image src={logo} alt='user' width={20} height={20} />,
  //   name:"puma",
  //   price:690,
  //   stock:3,
  //   action:<Link href="/products/sajknaskd">Manage</Link>
  // },
  // {
  //   photo:<Image src={logo} alt='us1r' width={20} height={20} />,
  //   name:"macbook",
  //   price:99990,
  //   stock:23,
  //   action:<Link href="/products/sdaskdnkasjdn">Manage</Link>
  // },
  // {
  //   photo:<Image src={logo} alt='user' width={20} height={20} />,
  //   name:"puma",
  //   price:690,
  //   stock:3,
  //   action:<Link href="/products/sajknaskd">Manage</Link>
  // },
  // {
  //   photo:<Image src={logo} alt='us1r' width={20} height={20} />,
  //   name:"macbook",
  //   price:99990,
  //   stock:23,
  //   action:<Link href="/products/sdaskdnkasjdn">Manage</Link>
  // },
  // {
  //   photo:<Image src={logo} alt='user' width={20} height={20} />,
  //   name:"puma",
  //   price:690,
  //   stock:3,
  //   action:<Link href="/products/sajknaskd">Manage</Link>
  // },
  // {
  //   photo:<Image src={logo} alt='us1r' width={20} height={20} />,
  //   name:"macbook",
  //   price:99990,
  //   stock:23,
  //   action:<Link href="/products/sdaskdnkasjdn">Manage</Link>
  // },

  {
    photo:<Image src={logo} alt='us1r' width={20} height={20} />,
    name:"macbook",
    price:99990,
    stock:23,
    action:<Link href="/products/[productId]" as="/products/1">Manage</Link>
  },
  {
    photo:<Image src={logo} alt='user' width={20} height={20} />,
    name:"puma",
    price:690,
    stock:3,
    action:<Link href="/products/[productId]" as="/products/2">Manage</Link>
  },

]

function page() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data]=useState<DataType[]>(arr)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const Table=useCallback(
    TableHOC<DataType>(columns,arr,"dashboard-product-box","Products",true),[]
  )

  return (
    <div className='grid grid-cols-5 gap-8 h-screen bg-gray-200'>
    <AdminSidebar />
    <main>{Table()}</main>
    <Link href="/products/new" className='fixed right-20 top-8 w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white hover:opacity-80'><FaPlus /></Link>
  </div>
  )
}

export default page