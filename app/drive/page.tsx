import Image from 'next/image'
import Link from 'next/link';

const Drive = () => {
	return (
		<div className="main_div">
			<h2 className='my-2 font-bold text-xl'>Welcome to Unicab Driver</h2>
			<h4 className='my-2 font-bold text-lg'>Become a driver in three easy steps</h4>
			<div className='sm_column justify-between gap-2'>
				<div className=' basis-1/3 bg-white p-2 rounded-md flex flex-col items-center'>
				<h5>Step 1.</h5>
				<Image 
          				src='/assets/icons/signup.ico'
          				alt='Facebook Icon'
          				width={45}
          				height={45}
         				className='object-contain my-4'
          			/>
				<p>Create an account</p>
				</div>
				<div className='basis-1/3 bg-white p-2 rounded-md flex flex-col items-center'>
				<h5>Step 2.</h5>
				<Image 
          				src='/assets/icons/clipboard.ico'
          				alt='Facebook Icon'
          				width={45}
          				height={45}
         				className='object-contain my-4'
          			/>
				<p>Fill the driver form</p>
				</div>
				<div className='basis-1/3 bg-white p-2 rounded-md border flex flex-col items-center'>
				<h5>Step 3.</h5>
				<Image 
          				src='/assets/icons/customer.ico'
          				alt='Facebook Icon'
          				width={45}
          				height={45}
         				className='object-contain my-4'
          			/>
					<p>Start Earning</p>
				</div>
			</div>
			<h5 className='my-4 font-bold text-lg'>What you need</h5>
			<div>
			<div className='flex px-2 py-3 rounded-md border-b items-center gap-2'>
				
				<Image 
          				src='/assets/icons/check.ico'
          				alt='Facebook Icon'
          				width={25}
          				height={25}
         				className='object-contain my-4'
          			/>
				<p>Vehicle/motocycle details</p>
			</div>
			<div className='flex px-2 py-3 rounded-md border-b items-center gap-2'>
				
				<Image 
          				src='/assets/icons/check.ico'
          				alt='Facebook Icon'
          				width={25}
          				height={25}
         				className='object-contain my-4'
          			/>
				<p>Your National ID</p>
			</div>
			<div className='flex px-2 py-3 rounded-md border-b items-center gap-2'>
				
				<Image 
          				src='/assets/icons/check.ico'
          				alt='Facebook Icon'
          				width={25}
          				height={25}
         				className='object-contain my-4'
          			/>
				<p>Your drivers license</p>
			</div>
			<div className=' flex px-2 py-3 rounded-md border-b items-center gap-2'>
				
				<Image 
          				src='/assets/icons/check.ico'
          				alt='Facebook Icon'
          				width={25}
          				height={25}
         				className='object-contain'
          			/>
				<p>Your Passport photo</p>
			</div>
			</div>
			<div className='flex justify-between gap-2'>
			<Link href='/login'>
				<button className="main_btn">Login</button>
			</Link>
			<Link href='/register'>
				<button className="main_btn">Become a driver</button>
			</Link>
			</div>
		</div>
		)
}
export default Drive