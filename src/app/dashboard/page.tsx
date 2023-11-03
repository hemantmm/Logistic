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

"use client"
import React from 'react'
import AdminSidebar from '../AdminSidebar'
import {BsSearch} from 'react-icons/bs'
import { FaRegBell,FaUserCircle } from 'react-icons/fa'
import Image from 'next/image'
import image from '../favicon.ico'
import {HiTrendingUp,HiTrendingDown} from 'react-icons/hi'
import { BarChart} from '../Charts'
import { BiMaleFemale } from 'react-icons/bi'
import Table from '../DashboardTable'
import data from '../data.json'
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

        <section className='flex justify-between items-stretch p-2 space-x-8'>
          <WidgetItem percent={40} amount={true} value={320000} heading='Revenue' color='rgb(0,115,255)' />

          <WidgetItem percent={-14} value={400} heading='Users' color='rgb(0 198 202)' />

          <WidgetItem percent={80} value={23000} heading='Transactions' color='rgb(255 196 0)' />

          <WidgetItem percent={30} value={1000} heading='Products' color='rgb(76 0 255)' />
        </section>

        <section className='flex pt-0 pr-8 pb-8 pl-0'>
          <div className='bg-white rounded-xl w-full py-4 px-12'>
            <h2 className='text-uppercase text-2xl font-bold tracking-3 mt-4 mb-8 ml-1/4 text-center'>Revenue & Transaction</h2>
            <BarChart data_2={[300,144,433,655,237,755,190]} data_1={[200,444,343,556,778,455,990]} title_1='Revenue' title_2='Transaction' bgColor_1='rgb(0 115 255)' bgColor_2='rgba(53,162,235,0.8)' />
            {/* Grpah here */}
          </div>
        </section>

        <section className='flex gap-8 p-0 pr-8 pb-8 h-auto'>
          {/* <div className='w-full max-w-10 p-4 relative' style={{
            backgroundColor:'white', boxShadow:'0px 10px 10px rgba(0, 0, 0, 0.132)', borderRadius:'10px'
          }}>
            <h2 className='mx-0 my-6 text-center text-2xl font-thin tracking-1.5 uppercase'>Gender Ratio</h2>
            <DoughnutChart labels={["Female","Male"]} data={[12,19]} backgroundColor={["hsl(340,82%,56%)","rgb(53,162,235,0.8)"]} cutout={200} />
            <p className='absolute top-44 ml-32 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-gray-600'><BiMaleFemale /></p>
          </div> */}
          {/* </div> */}
          {/* Table */}
          <div className='w-full max-w-80 p-4 relative bg-white rounded-xl'>
            <Table data={data.transaction} />
          </div>
        </section>
      </main>
    </div>
  </>
  )
}

interface WidgetItemProps{
heading:string;
value:number;
percent:number;
color:string;
amount?:boolean;
}

const WidgetItem=({heading,value,percent,color,amount=false}:WidgetItemProps)=><article className='w-64 bg-white shadow-md p-8 rounded-2xl flex justify-between items-stretch'>
  <div className=''>
    <p className='opacity-70 text-xs'>{heading}</p>
    <h4 className='text-lg'>{amount?`$${value}`:value}</h4>
    {
      percent>0?(
      <span className='text-green-600 flex items-center m-1'><HiTrendingUp/> +{percent}%</span>
      ):(
        <span className='text-red-600 flex items-center'><HiTrendingDown/> {percent}%{" "}</span>
        )
    }
  </div>

  <div className='relative w-20 h-20 rounded-full grid place-items-center bg-cyan-400' style={{
    background:`conic-gradient(
      ${color} ${Math.abs(percent)/100*360}deg,
      rgb(255,255,255) 0
    )`
  }}>
  <div className="absolute w-16 h-16 bg-white rounded-full"></div>
    <span className='relative' style={{color}}>{percent}%</span>
  </div>

</article>

export default page