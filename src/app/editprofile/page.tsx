"use client"
import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import Dashboard from '../Dashboard'

function page() {

    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

    const openEditProfile = () => {
      setIsEditProfileOpen(true);
    };

    const onLogout=()=>{

    }
    
  return (
    <>
    <div>
    <div className='flex'>
            <Sidebar />
        <div className='flex-1'>
            <Dashboard />
         
    </div>

         <div className='absolute ml-64'>
            <div className="p-4 mt-36 ml-16 ">
          
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name:</label>
              <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
              <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number:</label>
              <input type="tel" id="phone" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="role" className="block text-gray-700 mb-2">Role:</label>
              <input type="text" id="role" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Update Information</button>
            </div>
          </form>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default page