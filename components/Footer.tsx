import React from "react";
import Link from "next/link"


const Footer = () => {
	
	return (
		<div className= "bg-gray-700 p-4 w-full shadow-lg flex rounded-t-xl justify-between text-xs text-white">
		  <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
		  <section className= 'flex justify-between p-2'>
			<div>
		  		<h5 className='font-bold'>Download apps on</h5>
		  		<p>Play Store</p>
		  		<p>App Store</p>
		  	</div>
		  <div className='flex flex-col'>
		  	<h5 className='font-bold'>Navigation</h5>
		  	<Link href="/ride">Home</Link>
			<Link href="/drive">Drive</Link>
			<Link href="/ride">Get a Ride</Link>
			<Link href="/about">About Us</Link>
			
		</div>
		<div className='flex flex-col'>
		  	<h5 className='font-bold'>Resources</h5>
			<Link href="/contact">Contact Us</Link>
			<Link href="/privacypolicy">Privacy Policy</Link>
			<Link href="/termsandcondtions">Terms of Service</Link>
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