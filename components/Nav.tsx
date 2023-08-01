'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import SigninButton from './SigninButton'

//import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" w-full fixed z-20 bg-opacity-50 backdrop-blur-lg bg-[#F0f0f0] border-b ">
      <div className="max-w-screen mx-auto px-4 sm:px-6 ">
        <div className="flex items-center h-20">
          <div className=" w-full flex items-center md:justify-around">
            <div className="flex-shrink-0 flex flex-row">
              <Link href="/">
                <Image 
                  src='/assets/images/logo_icon.png'
                  alt='logo'
                  width={35}
                  height={35}
                  className='object-contain'
                  />
                  <h1 className='font-bold text-2xl text-gray-900'>Uni
                  <span className='text-blue-600'>Cab</span></h1>
              </Link>
            </div>
           
            
              <div className="ml-10 hidden md:block md:flex items-center space-x-4">
              <Link href="/ride"
                  className="text-gray-600 underline-from-left px-3 py-2 rounded-md text-sm font-medium">Get a Ride
                </Link>
                <Link href="/about"
                  className="text-gray-600 underline-from-left px-3 py-2 rounded-md text-sm font-medium">About Us
                </Link>
                <Link href="/drive"
                  className="text-gray-600 underline-from-left px-3 py-2 rounded-md text-sm font-medium">Drive
                </Link>
                <Link href="/contact"
                  className="text-gray-600 underline-from-left px-3 py-2 rounded-md text-sm font-medium">Contact us
                </Link>
                
              
              <div className=''><SigninButton/></div>
            </div>
            
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-2 sm:px-3">
         <Link href="/ride"
           className="text-gray-700  block px-3 py-2 rounded-md text-base font-medium">Get a Ride
          </Link>
          <Link href="/about"
           className="text-gray-700  block px-3 py-2 rounded-md text-base font-medium">About us
          </Link>
          <Link href="/drive"
          className="text-gray-700  block px-3 py-2 rounded-md text-base font-medium">Drive
          </Link>
          <Link href="/contact"
           className="text-gray-700  block px-3 py-2 rounded-md text-base font-medium">Contact us
          </Link>
        </div>
        <div className=''><SigninButton/></div>
      </div>
    </nav>
  );
};

export default Nav;
