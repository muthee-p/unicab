import Link from 'next/link'

const Dashboard = () => {
	return (
		<div className="main_div">
			<Link href='/dashboard'> You have had _ Rides
			</Link>
			<Link href='/dashboard'> Yo have earned _
			</Link>
		</div>
		)
}
export default Dashboard