import React from "react";
import Link from "next/link"


const Footer = () => {
	
	return (
		<div className= "bg-gray-700 p-4 w-full shadow-lg flex rounded-t-xl justify-between text-sm text-white">
		  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		  <section className= 'flex '>
			<div>
		  		<h5>Download apps on</h5>
		  		<p>Play Store</p>
		  		<p>App Store</p>
		  	</div>
		  <div className='flex flex-col'>
		  	<h5>Services</h5>
			<Link href="/ride">Get a Ride</Link>
			<Link href="/drive">Drive</Link>
		</div>
		
		</section>
		<section className='border-current border-t p-2 mt-4'>
		 &copy; {new Date().getFullYear()} Your Company. All rights reserved.
		</section>
		</div>
		</div>
)

};

export default Footer;