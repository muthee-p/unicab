import Link from 'next/link'

const LeftMenu = () => {
	return (
		<div className='p-3'>
			<div className='flex flex-col'>
				<Link href='/dashboard' className='border-b py-4'>
					Overview
				</Link>
				<Link href='/dashboard' className='border-b py-4'>
					Your Rides
				</Link>
				<Link href='/dashboard' className='border-b py-4'>
					Your Earnings
				</Link>
			</div>
					
		</div>
		)
}
export default LeftMenu