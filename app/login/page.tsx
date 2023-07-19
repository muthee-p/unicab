'use client'

import React, { useRef } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import GoogleSigninButton from "@components/GoogleSigninButton";

const Login = () => {
	const router = useRouter();

  const email = useRef("");
  const password = useRef("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.current,
        password: password.current,
      }),
    });

    if (response.ok) {
      const user = await response.json();
      console.log("Logged in user:", user);
      router.push('/')
      
    } else {
      console.error("Login failed");
      
    }
  };

  return (
    <div className="main_div">
      Welcome to drive
      <form className="flex flex-col bg-gray-700 text-gray-200 p-4 rounded-2xl md:min-h-[60%] md:min-w-[40%] min-w-[18rem]">
        <label className="mb-4 mt-4">Personal details</label>

        <label className="mt-4">Your email</label>
        <input
          type="email"
          onChange={(e) => (email.current = e.target.value)}
          placeholder="example: john369@gmail.com"
          className="rounded-lg p-2 mt-4"
        />
        <label className=" mt-4">Password</label>
        <input
          type="password"
          onChange={(e) => (password.current = e.target.value)}
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
