'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');

      }
			router.push('/driverForm')
     
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main_div">
      <form
        className="flex flex-col bg-gray-700 text-gray-200 p-4 rounded-2xl md:min-h-[60%] md:min-w-[40%] min-w-[18rem]"
        onSubmit={handleFormSubmit}
      >
        <label className="mb-4 mt-4">Register to Drive</label>
        <label className="mb-4 mt-4">Your name</label>
        <input
          type="text"
          name="name"
          placeholder="example: John Omolo"
          className="rounded-lg p-2 mt-4"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label className="mt-4">Your email</label>
        <input
          type="email"
          name="email"
          placeholder="example: john369@gmail.com"
          className="rounded-lg p-2 mt-4"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label className=" mt-4">Password</label>
        <input
          type="password"
          name="password"
          className="rounded-lg p-2 mt-4"
          value={formData.password}
          onChange={handleInputChange}
        />
        <label className=" mt-4">Confirm Password</label>
        <input type="password" className="rounded-lg p-2 mt-4" />
        <button className="main_btn" type="submit">
          Register
        </button>
      </form>

      <Link href="/register">
        <button>Create an account with google</button>
      </Link>
      <p> already have an account?</p>
      <Link href="/login">
        <p>Login</p>
      </Link>
    </div>
  );
};

export default Register;
