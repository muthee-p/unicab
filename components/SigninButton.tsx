"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Link from 'next/link';

const SigninButton = () => {
  const { data: session } = useSession();
  console.log('logged in user is', session?.user);

  if (session && session.user) {
    return (
      <div className="flex flex-col md:flex-row gap-4 ml-auto md:items-center md:pt-5 pb-5 px-5 text-sm">
        <Link href="/dashboard"
             className=" text-gray-700 md:text-gray-600 underline-from-left md:px-3 md:py-2 md:mr-10 rounded-md md:text-sm font-medium">Dashboard
        </Link>
        <p className="text-sky-600 font-medium hidden md:block">
          Mambo, {session.user.name}</p>
        <button onClick={() => signOut()} className="bg-gray-200 text-gray-700 p-1 px-2 md:w-24 rounded-full font-medium hover:bg-gray-700 hover:text-gray-200">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <div className="flex items-center md:pb-5 px-5">
      <button onClick={() => signIn()} className="main_btn ml-auto w-full">
      Sign In
    </button> 
    </div>
    
  );
};

export default SigninButton;