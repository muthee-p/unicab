import Link from 'nest/link'

const Dashboard = () => {
	return (
		<div className="main_div">
			Welcome to driver Dashboard
		<Link href='/driverForm'>
			<p>Add a driver/vehicle</p>
		</Link>
		<p>Your Earnings<p>
		<p> Your Rides </p>
		<p>My vehicles</p>
		</div>
		)
}
export default Dashboard