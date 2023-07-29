'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

import { Formik, FormikValues, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

const Register = () => {
	const router = useRouter();
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    password: '',
  });

  const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .max(20, 'Password must be at most 20 characters long'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //e.preventDefault();
  const handleFormSubmit = async (values: FormikValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void}) => {

    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Registration failed');

      }
			router.push('/login')
     
    } catch (error) {
      console.error(error);
    }finally {
    setSubmitting(false);
  }
  };

  return (
  <div className="main_div">
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ isSubmitting }) => (
        <Form
          className="flex flex-col bg-gray-700 text-gray-200 p-4 rounded-2xl md:min-h-[60%] md:min-w-[40%] min-w-[18rem]"
        >
          <label className="mb-4 mt-4">Register to Drive</label>
          <label className="mb-4 mt-4">Your name</label>
          <Field
            type="text"
            name="name"
            placeholder="example: John Omolo"
            className="rounded-lg text-gray-700 p-2 mt-4"
          />
          <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-2" />

          <label className="mt-4">Your email</label>
          <Field
            type="email"
            name="email"
            placeholder="example: john369@gmail.com"
            className="rounded-lg text-gray-700 p-2 mt-4"
          />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-2" />

          <label className=" mt-4">Password</label>
          <Field
            type="password"
            name="password"
            className="rounded-lg text-gray-700 p-2 mt-4"
          />
          <ErrorMessage 
              name="password" 
              component="div" 
              className="text-red-500 text-sm mt-2"
          />

          <label className=" mt-4">Confirm Password</label>
          <Field
            type="password"
            name="confirmPassword"
            className="rounded-lg text-gray-700 p-2 mt-4"
          />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="text-red-500 text-sm mt-2"
          />

          <button
            className="main_btn"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
        </Form>
      )}
    </Formik>

    <p> already have an account?</p>
    <Link href="/login">
      <p>Login</p>
    </Link>
  </div>
);
}

export default Register