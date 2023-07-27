import Link from 'next/link'

const Dashboard = () => {
	return (
		<div className="main_div">
			<div className='flex flex-col md:flex-row'>
				<nav className='top-0'>
				logo
				Welcome to driver Dashboard
				</nav>
 			<div className='flex justify-around flex-col md:flex-row'>
				<section className='left-0 w-[20%]'>
				overview
				payments
				settings
				<p>Your Earnings</p>
				<p> Your Rides </p>
				<p>My vehicles</p>
				
				<Link href='/driverForm'>
					<p>Add a driver/vehicle</p>
				</Link>
				</section>

				<section className='w-[60%]'>
					main
				</section>

				<section className='right-0 w-[20%]'>
				profile
				<h5>vehicles</h5>
				</section>
			</div>
			</div>
		
		</div>
		)
}
export default Dashboard