'use client'

import React, { useState } from "react";
import Link from "next/link";
import {signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import GoogleSigninButton from "@components/GoogleSigninButton";

const Login = () => {
   const searchParams = useSearchParams()
 
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    signIn('credentials', {
      email,
      password,
      callbackUrl,
    })
  }

  return (
    <div className="main_div">
      Welcome to drive
      <form onSubmit={onSubmit}
      className="flex flex-col bg-gray-700 text-gray-200 p-4 rounded-2xl md:min-h-[60%] md:min-w-[40%] min-w-[18rem]">
        <label className="mb-4 mt-4">Personal details</label>

        <label className="mt-4">Your email</label>
        <input
        value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example: john369@gmail.com"
          className="rounded-lg p-2 mt-4"
        />
        <label className=" mt-4">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-lg p-2 mt-4"
        />
        <button className="main_btn" onClick={onSubmit}>
          Login
        </button>
      </form>

      <GoogleSigninButton />
      <p>Don't have an account?</p>
      <Link href="/register">
        <p>Register</p>
      </Link>
    </div>
  );
};

export default Login;
