import Profile from "./Profile"
import Link from 'next/link'

const RightMenu = () => {
	return (
		<div className="p-3">
			<Profile user={null} />
			<h5>vehicles</h5>
			<div className='flex flex-col'>
				<Link href='/driverForm'>
					My vehicle
				</Link>
				<Link href='/driverForm'>
					Add a driver/vehicle
				</Link>
			</div>
		
		</div>
		)
}
export default RightMenu