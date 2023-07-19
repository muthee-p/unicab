import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

const Register = () => {

	 const onSubmit = async (data: RegisterFormData) => {
    try {
      await prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          password: data.password,
        },
      });
      console.log('User registered successfully!');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

	return (
		<div className="main_div">
			<form 
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col bg-gray-700 text-gray-200 p-4 rounded-2xl md:min-h-[60%] md:min-w-[40%] min-w-[18rem]'>
				<label className='mb-4 mt-4'>Register to Drive</label>
        		<label className='mb-4 mt-4'>Your name</label>
        			<input type='text' 
        				placeholder='example: John Omolo' 
        				className='rounded-lg p-2 mt-4' />
        		<label className='mt-4'>Your email</label>
        			<input type='email' 
        				placeholder='example: john369@gmail.com' 
        				className='rounded-lg p-2 mt-4' />
        		
        		<label className=' mt-4'>Password</label>
        		<input type='password' 
        			className='rounded-lg p-2 mt-4' />
        		<label className=' mt-4'>Confirm Password</label>
        		<input type='password' 
        			className='rounded-lg p-2 mt-4' />
				<button className="main_btn">Register</button>
			</form>

			<Link href='/register'>
				<button>Create an account with google</button>
			</Link>
			<p> already have an account?</p>
			<Link href='/login'>
				<p>Login</p>
			</Link>
			
		
		</div>
		)
}
export default Register