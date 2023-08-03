import Image from 'next/image'
import Link from 'next/link'

const Drive = () => {
	return (
		<div className="main_div">
		<div className="second_div flex-col px-16">
			
		<section className='mt-12 p-12 sm_column items-center justify-between gap-4'>
			<Image 
          		src='/assets/images/driver2.jpg'
          		alt='logo'
          		width={200}
          		height={200}
          		className='object-contain'
          	/>
		
			<div className='md:w-[40%]'>
				<h2 className='font-bold text-2xl mb-8 underline underline-offset-8 decoration-blue-600'>About Us</h2>
				<p>Welcome to UniCab, where we strive to revolutionize transportation and connect people with seamless, 
					reliable, and efficient rides. Our vision is to create a world where getting from point A to point B 
					is not only convenient but also an enjoyable experience.</p>

				<p className='mt-8'>At UniCab, we are more than just a transportation service – we are a community dedicated 
					to enhancing mobility for everyone. Our platform brings together passengers and drivers, 
					fostering a sense of trust and dependability that goes beyond the ride itself.</p>
			
				
			</div>
		</section>

		<section className='mt-12'>
			<h3 className='font-bold text-lg'>What Sets Us Apart:</h3>

			<div className='sm_column justify-between gap-2'>

				<div className='bg-white md:w-[23%] rounded-md p-4 border'>
					<h4 className='font-bold mb-2'>Safety First:</h4> 
					<p>Your safety is paramount to us. We meticulously screen and vet all our drivers, ensuring they meet our rigorous standards. Additionally, we provide 24/7 support and real-time tracking for added peace of mind during your rides.</p>
				</div>

				<div className='bg-white md:w-[23%] rounded-md p-4 border'>
					<h4 className='font-bold'>Exceptional Service:</h4> 
					Our commitment to excellence extends beyond the road. Our customer support team is always ready to assist you with any questions or concerns, providing prompt and personalized assistance.
				</div>

				<div className='bg-white md:w-[23%] rounded-md p-4 border'> 
					<h4 className='font-bold'>Affordability:</h4>
					We believe that everyone should have access to reliable transportation without breaking the bank. Our competitive pricing and transparent fare structure ensure that you get the best value for your money.
				</div>

				<div className='bg-white md:w-[23%] rounded md p-4 border'>
					<h4 className='font-bold'>Sustainability:</h4>
					 As part of our commitment to the environment, we encourage carpooling and the use of eco-friendly vehicles. By choosing UniCab, you contribute to a greener and more sustainable future.</div>
			</div>
		</section>
			
		<section className='mt-12 p-8 sm_column justify-between gap-8'>
			
			<div className='md:w-[40%]'>
				
				<h3 className='font-bold text-xl mb-4'>
					<span className='underline underline-offset-8 decoration-blue-600'>Our</span> Mission:</h3>
				<p>Our mission is to redefine urban transportation and make it accessible to all. We aim to provide safe, affordable, and sustainable rides that reduce traffic congestion and contribute positively to the environment. We continuously innovate and leverage cutting-edge technology to improve our services, ensuring that every journey with us is smooth and stress-free.</p>

			</div>
			<Image 
          		src='/assets/images/driver3.jpg'
          		alt='logo'
          		width={400}
          		height={400}
          		className='object-contain'
          	/>
			
		</section>

		<section className='mt-12 mb-12 sm_column justify-between gap-4'>
			<Image 
          		src='/assets/images/passanger2.jpg'
          		alt='logo'
          		width={400}
          		height={400}
          		className='object-contain'
          	/>
			<div className='md:w-[40%]'>
			
          		<h3 className='font-bold text-xl mb-4'>
          		<span className='underline underline-offset-8 decoration-blue-600'>
          		Our</span> Vision:</h3>
				<p>We envision a world where transportation is not a barrier but an enabler. Whether it's commuting to work, exploring a new city, or simply enjoying a night out, we want to be your go-to choice for all your travel needs. Our vision extends beyond the present, and we are constantly innovating to shape the future of transportation.</p>
	
			</div>
		</section>

		<section className='p-8 flex flex-col'>
			<h2 className='font-bold text-xl mb-4'>Join Us on This Journey:</h2>

				<p>At UniCab, we invite you to be part of this exciting journey. Whether you're a passenger looking for a reliable ride or a driver seeking an opportunity to earn with flexibility, we welcome you to our growing community.</p>

				<p>Together, let's create a world where transportation is not just about reaching a destination, but about the experiences and connections we make along the way.</p>

				<p>Thank you for choosing UniCab. We look forward to serving you and making every ride memorable.</p>
			
			
				<p className='font-bold mt-8 mb-4'>Safe travels,</p>
				<p>The UniCab Team</p>
		</section>
		</div>
		</div>
		)
}
export default Drive