// "use client"
// import React, {useState} from 'react'
// import Navbar from '../Navbar'
// // import Sidebar from '../sidebar'
// import {BsFillBellFill} from 'react-icons/bs'
// import {AiOutlineMail,AiOutlineSearch,AiOutlineClose} from 'react-icons/ai'
// import {BiUserCircle} from 'react-icons/bi'
// import Link from 'next/link'
// import ProfileDropdownMenu from '../ProfileDropdownMeu'
// import Sidebar from '../Sidebar'

// function page() {

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [searchItem,setSearchItem]=useState('')
//   const [notification,setNotification]=useState(false)
//   // const [showProfile,setShowProfile]=useState(false)
//   const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

//   const handleNotification=()=>{
//     setNotification(!notification)
//   }

//   const handleNotificationClose=()=>{
//     setNotification(false)
//   }

//   const handleProfileClick = () => {
//     setIsProfileMenuOpen(!isProfileMenuOpen);
//   };

//   const handleEditProfile = () => {
//     // Handle "Edit Profile" action
//     // You can navigate to the edit profile page or perform any desired action.
//   };

//   const handleLogout = () => {
//     // Handle "Logout" action
//     // You can perform the logout action or navigate to the logout page.
//   };
  

//   return (
//     <div className='flex'>
//         <Sidebar />

//         <div className='flex-1'>
//           <div className="flex justify-between shadow-lg p-4 bg-white">
//             <div className=''>
//               <input type='text' placeholder='Search' className='bg-gray-200 p-2 rounded-md' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} />
//               <button className='-ml-6'>
//                 <AiOutlineSearch size={20} />
//               </button>
//             </div>
//             <div className="flex items-center space-x-4 cursor-pointer">
//               <span onClick={handleNotification}><BsFillBellFill size={20} /></span>
//               <span>
//                   <Link href="mailto:hemant29mehta@gmail.com" >
//                     <AiOutlineMail size={20} />
//                   </Link>
//                 </span>
//               <span onClick={handleProfileClick}><BiUserCircle size={25} /></span>
//               <ProfileDropdownMenu
//                   isOpen={isProfileMenuOpen}
//                   onEditProfile={handleEditProfile}
//                   onLogout={handleLogout}
//                 />
//             </div>
//             </div>  
//         </div>  
//         {notification && (
//           <div className="fixed top-0 right-0 h-full w-64 bg-white border-l border-gray-300 z-10">
//           <div className="p-4">
//               <button
//                 onClick={handleNotificationClose}
//                 className="float-right cursor-pointer"
//               >
//                 <AiOutlineClose size={20} />
//               </button>
//           <p>Notification 1</p>
//           <p>Notification 2</p>
//           <p>Notification 3</p>
//         </div>
//         </div>
//         )}   
//         {/* {showProfile && (
//           <ProfileDropdownModal onClose={handleCloseProfileDropdown} />
//         )}    */}
//         {/* <h2>el</h2> */}
//     </div>
//   )
// }

// export default page


// // import React from 'react'
// // import Sidebar from '../Sidebar'
// // import Dashboard from '../Dashboard'

// // function page() {
// //   return (
// //     <>
// //     <div>
// //     <div className='flex'>
// //     <Sidebar />
// //     <div className='flex-1'>
// //     <Dashboard />
// //     </div>
// //     </div>
    
// //     <h2 className=''>hi</h2>
// //     </div>
// //     </>
// //   )
// // }

// // export default page

import React from 'react'
import AdminSidebar from '../AdminSidebar'
import {BsSearch} from 'react-icons/bs'
import { FaRegBell,FaUserCircle } from 'react-icons/fa'
import Image from 'next/image'
import image from '../favicon.ico'
// import { lazy } from 'react'

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
    <>
    <div style={styles.adminContainer} className='adminContainer'>
      <AdminSidebar />
      <main className='overflow-y-auto'>
        <div className="bar flex items-center h-16 pl-4 pr-4 pt-0 pb-0 mr-auto border-b border-solid border-black/30">
          <BsSearch className="text-base opacity-70 mr-auto cursor-pointer" />
          <input className="mr-auto w-full py-4 p-4 bg-inherit outline-none" type="text" placeholder="search" />
          <FaRegBell size={20} className="text-lg opacity-70 cursor-pointer" />
          <Image src={image} alt='user' className='w-8 h-8 ml-4 cursor-pointer' />
        </div>
      </main>
    </div>
  </>
  )
}

export default page