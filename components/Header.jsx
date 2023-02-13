import React from "react";
import Image from "next/image";
import { GlobeAltIcon, Bars3Icon, UserCircleIcon, UsersIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const ImageStyle = {
  objectFit: "contain",
  objectPosition: "left",
}

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        {/* Left - Logo */}
        <div className="h-10 relative flex items-center cursor-pointer my-auto ">
          <Image 
            src='https://links.papareact.com/qd3' fill style={ImageStyle}/>
        </div>
        {/* Middle - Search*/}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input type="text" placeholder="Start your Search..." className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" />
          <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
        </div>
        {/* Right - User Info? */}
        <div className="flex space-x-4 items-center justify-end text-gray-500">
          <p className="hidden md:inline cursor-pointer">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer"/>
          <div className="flex items-center border-2 rounded-full p-2 space-x-2">
            <Bars3Icon className="h-6"/>
            <UserCircleIcon className="h-6"/>
          </div>
        </div>
    </header>
  );
}

export default Header;