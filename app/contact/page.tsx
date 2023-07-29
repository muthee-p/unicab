import Faqs from '@components/Faqs'
import Link from 'next/link'
import Image from 'next/image'

const Contact = () => {
	return (
		<div className="main_div">
			<div className='sm_column justify-between items-center'>
				<div className='md:w-[40%]'>
				<h2 className='font-bold text-3xl md:pr-12 mb-4'>Contact Us</h2>
			 	<p>Website: 
					<Link href='unicab/vercel.com' 
						className='hover:underline text-blue-600 hover:text-gray-700'>
			 		 www.unicab.com</Link></p>
				<p>Email: 
					<Link href= 'mailto.info@unicab.com'
						className='hover:underline text-blue-600 hover:text-gray-700'
					>info@unicab.com</Link></p>
				<p>Phone: <span className='hover:underline text-blue-600 hover:text-gray-700'
					>+25407 00 000 000</span></p>

				<div className='inline-flex gap-12 p-4'>
					<Link href='www.facebook.com'>
					<Image 
          				src='/assets/icons/facebook.ico'
          				alt='Facebook Icon'
          				width={25}
          				height={25}
         				className='object-contain hover:bg-blue-600 hover:rounded-full'
          			/>
					</Link>
					<Link href='www.instagram.com'>
					<Image 
          				src='/assets/icons/instagram.ico'
          				alt='Instagram Icon'
          				width={25}
          				height={25}
         				className='object-contain hover:bg-blue-600 hover:rounded-full'
          			/>
					</Link>
					<Link href='www.twitter.com'>
					<Image 
          				src='/assets/icons/twitter.ico'
          				alt='Twitter Icon'
          				width={25}
          				height={25}
         				className='object-contain hover:bg-blue-600 hover:rounded-full'
          			/>
					</Link>
				</div>
				</div>
			 <div className='md:w-[60%]'>
				<Faqs />
			 </div>
				
			</div>
			
		</div>
		)
}
export default Contact