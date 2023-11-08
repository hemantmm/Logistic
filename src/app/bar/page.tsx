"use client"
import React from 'react'
import AdminSidebar from '../AdminSidebar'
import { BarChart } from '../Charts'

const styles = {
    adminContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 4fr',
      gap: '2rem',
      height: '100vh',
      backgroundColor: 'rgb(247, 247, 247)',
    },
  }

  const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ]

function page() {
  return (
    <div style={styles.adminContainer} className='adminContainer'>
      <AdminSidebar />
      <main className='bg-white p-16 overflow-y-auto'>
        <h1 className='m-0 mt-0 mb-5 ml-2 font-extrabold text-2xl'>Bar Charts</h1>
        <section className='w-10/12 mx-auto my-16'>
            <BarChart data_1={[200,444,343,556,778,455,990]} data_2={[300,144,433,655,237,755,190]} title_1="Products" title_2="Users" bgColor_1={`hsl(260,50%,30%)`} bgColor_2={`hsl(360,90%,90%)`} />
            <h2 className='mt-8 mb-8 ml-0 mr-0 text-center -tracking-normal font-bold uppercase'>TOP SELLING PRODUCTS & TOP CUSTOMERS</h2>
        </section>

        <section className='w-10/12 mx-auto my-16'>
            <BarChart horizontal={true} data_1={[200,444,343,556,778,455,990,444,122,334,890,909]} data_2={[]} title_1="Products" title_2="" bgColor_1={`hsl(180,40%,50%)`} bgColor_2={''} labels={months} />
            <h2 className='mt-8 mb-8 ml-0 mr-0 text-center -tracking-normal font-bold uppercase'>Orders throughout the year</h2>
        </section>
      </main>
      </div>
  )
}

export default page