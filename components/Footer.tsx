import React from "react";
import Link from "next/link"


const Footer = () => {
	
	return (
		<div className= "flex flex-col md:justify-between">
		<p>UniCab</p>
		<p>Copyright 2023</p>
		<Link href="/drive">Drive</Link>
		</div>
)

};

export default Footer;