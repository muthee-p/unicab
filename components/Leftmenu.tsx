import Link from 'next/link'

const LeftMenu = () => {
	return (
		<div className='p-3 flex flex-col h-screen'>
			<div className='flex flex-col flex-grow '>
				<Link href='/dashboard' className='border-b py-4 hover:bg-blue-100'>
					Overview
				</Link>
				<Link href='/dashboard' className='border-b py-4 hover:bg-blue-100'>
					Your Rides
				</Link>
				<Link href='/dashboard' className='border-b py-4 hover:bg-blue-100'>
					Your Earnings
				</Link>
			</div>
			<div className='text-sm flex flex-col '>
				<Link href='/privacypolicy' className='border-t py-4 hover:bg-blue-100'>
					Privacy Policy
				</Link>
				<Link href='/termsandcondtions' className='border-t py-4 hover:bg-blue-100'>
					Terms & Conditions
				</Link>
			</div>	
		</div>
		)
}
export default LeftMenu