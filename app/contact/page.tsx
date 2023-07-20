import Faqs from '@components/Faqs'
import Link from 'next/link'

const Contact = () => {
	return (
		<div className="main_div">
			 Welcome Contact Center
			 Website:<Link href='www.unicab/vercel.com'>
			  www.unicab.com</Link>
			Email: <Link href= 'mailto.info@unicab.com'>info@unicab.com</Link>
			Phone: [Your contact number]
			 
			<h3>Faqs section</h3>
			<Faqs />
		</div>
		)
}
export default Contact