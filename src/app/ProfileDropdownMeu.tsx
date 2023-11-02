// ProfileDropdownMenu.tsx
import Link from 'next/link';
import React from 'react';

const ProfileDropdownMenu = ({ isOpen, onEditProfile, onLogout }) => {

  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } absolute right-0 mt-32 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10`}
    >
      <ul>
        <li>
          <Link href="/editprofile"
            // onClick={(e)=>handleClick(e,"/editprofile")}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
          >
            Edit Profile
          </Link>
        </li>
        <li>
          <button
            onClick={onLogout}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdownMenu;
