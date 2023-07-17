'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const {data: session} = useSession();
  const [providers, setProviders] = useState(null);


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const setUpProviders = async () =>{
      const response = await getProviders();

      setProviders(response);
    }
    setUpProviders();
  }, [])

  return (
    <nav className="bg-gray-700 w-full fixed z-20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-lg">
                <Image 
                  src='/assets/logo.png'
                  alt='logo'
                  width={120}
                  height={120}
                  className='object-contain'
                  />
              </Link>
            </div>
            <div className="hidden md:block">
            
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us
                </Link>
                <Link href="/drive"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Drive
                </Link>
                <Link href="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact us
                </Link>
              </div>
              {session?.user ? (
                <div className= 'flex gap-3 md:gap-5'>
            <p > Howdy, &#32;{session?.user.name}
            </p>
            <Link href='/dashboard' className='black_btn'>
            Dashbord
            </Link>
            <button type='button' 
            onClick={signOut} className='outline_btn'>
            Sign Out
            </button>

            <div>
            <Image src={session?.user.image}
              alt='profile'
              width={37}
              height={37}
              className='rounded-full'
              onClick={() => setToggleDropdown(false)}
              />
            </div>
            </div>
            ):(
            <>

              {providers && Object.values(providers).map((provider) =>(
                <button type='button'
                  key={provider.name}
                  onClick={() =>signIn(provider.id)}
                  className='main_btn'
                >
                  Sign In
                </button>
            ))}
          </>
              )}
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
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <Link href="/about"
           className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About us
          </Link>
          <Link href="/drive"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Drive
          </Link>
          <Link href="/contact"
           className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
