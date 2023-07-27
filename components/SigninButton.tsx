"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Link from 'next/link';

const SigninButton = () => {
  const { data: session } = useSession();
  console.log('logged in user is', session?.user.name);

  if (session && session.user) {
    return (
      <div className="flex flex-col md:flex-row gap-4 ml-auto items-center">
        <Link href="/dashboard"
             className="text-gray-600 md:underline-from-left md:px-3 md:py-2 rounded-md text-sm font-medium">Dashboard
        </Link>
        <p className="text-sky-600 hidden md:block">Mambo, {session.user.name}</p>
        <button onClick={() => signOut()} className="bg-gray-200 text-gray-700 p-1 w-24 rounded-full hover:bg-gray-400">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <button onClick={() => signIn()} className="text-green-600 ml-auto">
      Sign In
    </button>
  );
};

export default SigninButton;