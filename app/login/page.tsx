import Link from 'next/link';

const Drive = () => {
	return (
		<div className="main_div">
		
			Welcome to drive
			<form className='flex flex-col bg-gray-700 text-gray-200 p-4 rounded-2xl md:min-h-[60%] md:min-w-[40%] min-w-[18rem]'>
				<label className='mb-4 mt-4'>Personal details</label>
        		
        		<label className='mt-4'>Your email</label>
        			<input type='email' 
        				placeholder='example: john369@gmail.com' 
        				className='rounded-lg p-2 mt-4' />
        		<label className=' mt-4'>Password</label>
        		<input type='password' 
        			className='rounded-lg p-2 mt-4' />
				<button className="main_btn">Login</button>
			</form>

			<Link href='/register'>
				<button className="main_btn">Continue with google</button>
			</Link>
			<p>Don't have an account?</p>
			<Link href='/register'>
				<p>Register</p>
			</Link>
		
		</div>
		)
}
export default Drive