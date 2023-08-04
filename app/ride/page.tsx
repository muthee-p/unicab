import Link from 'next/link';
import Image from 'next/image'

const Ride = () => {
	return (
		<div className="main_div">
		<div className='md:px-12'>
			<h2 className='font-bold text-2xl text-center'>Welcome to Unicab</h2>
			<div className='sm_column justify-between gap-4 md:p-12'>
			<Image 
          		src='/assets/images/passanger3.jpg'
          		alt='logo'
          		width={400}
          		height={400}
          		className='object-contain'
          	/>
				<div className='md:w-[40%]'>				
					<p>With a vast network of dedicated drivers, state-of-the-art technology, and a commitment to safety and reliability,
					 we aim to redefine your travel experience. Our user-friendly app allows you to request rides with just a few taps, 
					 track your driver in real-time, and access an array of transportation options tailored to your needs.</p>

					<p>At UniCab, we put your comfort and satisfaction first. Our drivers are carefully vetted, ensuring a safe and 
					friendly journey every time. From our transparent pricing to our 24/7 customer support, we strive to provide 
					you with an unmatched level of convenience and peace of mind.</p>

				</div>
				
			</div>
			<div className='sm_column justify-around m-12 p-8 bg-gray-50 rounded-lg mt-12'>
				<div className='flex flex-col md:pr-32 md:border-r mb-4 md:md-0'>
				<h3>Scan here to download app</h3>
				<Image 
          		src='/assets/images/qr-code.png'
          		alt='logo'
          		width={150}
          		height={150}
          		className='object-contain'
          	/>
			</div>
			<Link href='/'>
				<h3>Click to download app on your phone</h3>
				<Image 
          		src='/assets/images/store.png'
          		alt='logo'
          		width={150}
          		height={150}
          		className='object-contain mt-4'
          	/>
			</Link>
			</div>
			
		</div>	
		</div>
		)
}
export default Ride