"use client"
import React from 'react'
import AdminSidebar from '../AdminSidebar'
import { DoughnutChart, PieChart } from '../Charts'
import {categories} from '../data.json'


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
  return (
    <div style={styles.adminContainer} className='adminContainer'>
      <AdminSidebar />
      <main className='bg-white p-16 overflow-y-auto'>
        <h1 className='m-0 mt-0 mb-5 ml-2 font-extrabold text-2xl'>Pie and Doughnut Charts</h1>
        <section className='w-10/12 mx-auto my-16'>
            <div className='max-w-sm mx-auto mt-24 -mb-4'>
                <PieChart labels={["Processing","Shipped","Delivered"]} data={[12,9,13]} backgroundColor={[
                    `hsl(110,80%,80%)`,
                    `hsl(110,80%,50%)`,
                    `hsl(110,40%,50%)`
                ]} offset={[0,0,50]} />
            </div>
            <h2 className='mt-8 mb-8 ml-0 mr-0 text-center -tracking-normal font-bold uppercase'>Order Fulfilment ratio</h2>
        </section>

        <section className='w-10/12 mx-auto my-16'>
            <div className='max-w-sm mx-auto mt-24 -mb-4'>
                <DoughnutChart labels={categories.map(i=>i.heading)} data={categories.map(i=>i.value)} backgroundColor={
                    categories.map((i)=>`hsl(${i.value*4},${i.value}%,50%)`)} legends={false} offset={[0,0,0,80]} />
            </div>
            <h2 className='mt-8 mb-8 ml-0 mr-0 text-center -tracking-normal font-bold uppercase'>Product Categories ratio</h2>
        </section>

        <section className='w-10/12 mx-auto my-16'>
            <div className='max-w-sm mx-auto mt-24 -mb-4'>
                <DoughnutChart labels={["In Stock", "Out of Stock"]} data={[40,20]} backgroundColor={["hsl(269,80%,40%)","rgb(53,162,255)"]} legends={false} offset={[0,80]} cutout={"70%"} />
            </div>
            <h2 className='mt-8 mb-8 ml-0 mr-0 text-center -tracking-normal font-bold uppercase'>Stock Availability</h2>
        </section>

        <section className='w-10/12 mx-auto my-16'>
            <div className='max-w-sm mx-auto mt-24 -mb-4'>
                <DoughnutChart labels={["Marketing Cost", "Discount","Burnt","Production Cost","Net margin"]} data={[32,18,5,20,25]} backgroundColor={["hsl(110,80%,40%)","hsl(19,80%,40%)","hsl(69,80%,40%)","hsl(300,80%,40%)","rgb(53,162,255)"]} legends={false} offset={[20,30,20,30,80]} />
            </div>
            <h2 className='mt-8 mb-8 ml-0 mr-0 text-center -tracking-normal font-bold uppercase'>Revenue Distribution</h2>
        </section>

        <section className='w-10/12 mx-auto my-16'>
            <div className='max-w-sm mx-auto mt-24 -mb-4'>
                <PieChart labels={["Teenager(Below 20)","Adult (20-40)","Older (above 40)"]} data={[30,250,70]} backgroundColor={[
                    `hsl(10,${80}%,80%)`,
                    `hsl(10,${80}%,50%)`,
                    `hsl(10,${40}%,50%)`
                ]} offset={[0,0,50]} />
            </div>
            <h2 className='mt-8 mb-8 ml-0 mr-0 text-center -tracking-normal font-bold uppercase'>Users Age Group</h2>
        </section>

        <section className='w-10/12 mx-auto my-16'>
            <div className='max-w-sm mx-auto mt-24 -mb-4'>
                <DoughnutChart labels={["Admin", "Customers"]} data={[40,250]} backgroundColor={["hsl(335,100%,38%)","hsl(44,98%,50%)"]} offset={[0,80]} />
            </div>
        </section>
      </main>
      </div>
  )
}

export default page