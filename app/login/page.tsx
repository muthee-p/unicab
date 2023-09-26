'use client'

import React, { useState } from "react";
import { Formik, FormikValues, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from "next/link";
import {signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
//import GoogleSigninButton from "@components/GoogleSigninButton";

const Login = () => {
   const searchParams = useSearchParams()
 
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = async (values: FormikValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void}) => {

  //const onSubmit = async (values, { setSubmitting }) => {
    try {
      await signIn('credentials', {
        email: values.email,
        password: values.password,
        callbackUrl, // Make sure you define `callbackUrl` somewhere in your component
      });
    } catch (error) {
      console.error(error);
      setErrorMessage('Login failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };
  
  
  // const onSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   signIn('credentials', {
  //     email,
  //     password,
  //     callbackUrl,
  //   })
  // }

  return (
    <div className="main_div pb-28">
      Welcome to drive
      {errorMessage && <p>{errorMessage}</p>}
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form
            className="flex flex-col bg-gray-700 text-gray-200 p-4 rounded-2xl md:min-h-[60%] md:min-w-[40%] min-w-[18rem]"
          >
            <label className="mb-4 mt-4">Sign In</label>
            <label className="mt-4">Your email</label>
            <Field
              type="email"
              name="email"
              placeholder="example: john369@gmail.com"
              className="rounded-lg text-gray-700 p-2 mt-4"
            />
            <ErrorMessage name="email" component="div" className="text-red-500" />
  
            <label className=" mt-4">Password</label>
            <Field
              type="password"
              name="password"
              className="rounded-lg text-gray-700 p-2 mt-4"
            />
            <ErrorMessage name="password" component="div" className="text-red-500" />
  
            <button
              className="main_btn"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
      <div className="inline-flex">
      <p>Don't have an account?</p>
      <Link href="/register">
        <p className='text-blue-600 hover:underline'>Register</p>
      </Link>
      </div>
    </div>
  );
  
};

export default Login;
