import React from "react";
import Link from "next/link"
import Image from 'next/image'


const Footer = () => {
	
	return (
		<div className= "bg-gray-700 p-4 w-full shadow-lg flex rounded-t-lg justify-between text-sm text-white">
		  <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
		  <section className= 'sm_column justify-between p-2'>
			<div>
		  		<h5 className='font-bold'>Download apps on</h5>
		  		<Image 
          		src='/assets/images/store.png'
          		alt='logo'
          		width={100}
          		height={100}
          		className='object-contain mt-4'
          	/>
		  	</div>

		  <div className='flex flex-row'>
		  <div className='flex flex-col'>
		  	<h5 className='font-bold'>Navigation</h5>
		  	<Link href="/ride" className='my-2 underline-from-left'>Home</Link>
			<Link href="/drive" className='my-2 underline-from-left'>Drive</Link>
			<Link href="/ride" className='my-2 underline-from-left'>Get a Ride</Link>
			<Link href="/about" className='my-2 underline-from-left'>About Us</Link>
			
		</div>
		<div className='flex flex-col'>
		  	<h5 className='font-bold'>Resources</h5>
			<Link href="/contact" className='my-2 underline-from-left'>Contact Us</Link>
			<Link href="/privacypolicy" className='my-2 underline-from-left'>Privacy Policy</Link>
			<Link href="/termsandcondtions" className='my-2 underline-from-left'>Terms of Service</Link>
		</div>
		</div>

		<div>
		<h5 className='font-bold'>Our Socials</h5>
		<div className='inline-flex gap-12 p-4'>
					<Link href='www.facebook.com'>
					<Image 
          				src='/assets/icons/whitefb.ico'
          				alt='Facebook Icon'
          				width={20}
          				height={20}
         				className='object-contain bg-white rounded-full hover:bg-blue-600 hover:rounded-full'
          			/>
					</Link>
					<Link href='www.instagram.com'>
					<Image 
          				src='/assets/icons/whiteig.ico'
          				alt='Instagram Icon'
          				width={20}
          				height={20}
         				className='object-contain bg-white rounded-full hover:bg-blue-600 hover:rounded-full'
          			/>
					</Link>
					<Link href='www.twitter.com'>
					<Image 
          				src='/assets/icons/whitetwi.ico'
          				alt='Twitter Icon'
          				width={20}
          				height={20}
         				className='object-contain bg-white rounded-full hover:bg-blue-600 hover:rounded-full'
          			/>
					</Link>
					<Link href='www.gmail.com'>
					<Image 
          				src='/assets/icons/whitemail.ico'
          				alt='Twitter Icon'
          				width={20}
          				height={20}
         				className='object-contain bg-white rounded-full hover:bg-blue-600 hover:rounded-full'
          			/>
					</Link>
					</div>
				</div>
		
		</section>
		<section className='text-center border-current border-t py-4 mt-4'>
		 &copy; {new Date().getFullYear()} UniCab. All rights reserved.
		</section>
		</div>
		</div>
)

};

export default Footer;