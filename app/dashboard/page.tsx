import Link from 'next/link'

const Dashboard = () => {
	return (
		<div className="main_div">
			<div className='flex justify-between gap-4'>
				<Link href='/dashboard'
				className='bg-teal-100 p-4 flex flex-col justify-center gap-4 rounded-lg w-48 h-48 items-center'> 
					<h4>Rides</h4>
					<h2 className='text-4xl font-bold text-blue-600'>50</h2>
				</Link>
				<Link href='/dashboard'
				className='bg-red-100 p-4 flex flex-col justify-center gap-4 rounded-lg w-48 items-center'> 
				<h4>You have earned</h4>
					<h2 className='text-4xl font-bold text-blue-600'>
						<span className='text-lg text-gray-700'>ksh </span>5,000</h2>
				</Link>
			</div>
			
		</div>
		)
}
export default Dashboard