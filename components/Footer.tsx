import React from "react";
import Link from "next/link"


const Footer = () => {
	
	return (
		<div className= "bg-gray-700 p-4 w-full shadow-lg flex rounded-t-xl justify-between text-sm text-white">
		<p>UniCab</p>
		<p>Copyright 2023</p>
		<Link href="/drive">Drive</Link>
		</div>
)

};

export default Footer;