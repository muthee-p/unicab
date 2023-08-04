"use client"
import Link from 'next/link'
import Chart from '@components/Chart';


const Dashboard = () => {


	return (
		<div className="flex min-h-screen flex-col items-center justify-between">
			<h2 className='text-2xl font-bold'>Overview</h2>
			<div className='sm_column justify-between gap-4'>
				<Link href='/dashboard'
				className='bg-teal-100 p-4 flex flex-col justify-center gap-4 rounded-lg md:w-48 md:h-48 items-center'> 
					<h4>Rides</h4>
					<h2 className='text-4xl font-bold text-blue-600'>50</h2>
				</Link>
				<Link href='/dashboard'
				className='bg-red-100 p-4 flex flex-col justify-center gap-4 rounded-lg md:w-48 items-center'> 
				<h4>You have earned</h4>
					<h2 className='text-4xl font-bold text-blue-600'>
						<span className='text-lg text-gray-700'>ksh </span>5,000</h2>
				</Link>
				<Link href='/dashboard'
				className='bg-blue-100 p-4 flex flex-col justify-center gap-4 rounded-lg md:w-48 items-center'> 
				<h4>Number of vehicles</h4>
					<h2 className='text-4xl font-bold text-blue-600'>1</h2>
				</Link>
			</div>
			<div>
				<Chart />
			</div>
			
		</div>
		)
}
export default Dashboard