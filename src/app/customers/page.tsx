import React from 'react'
import AdminSidebar from '../AdminSidebar'

function page() {
  return (
    <div className='grid grid-cols-5 gap-8 h-screen bg-gray-200'>
    <AdminSidebar />
    <main>hello</main>
  </div>
  )
}

export default page