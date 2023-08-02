import Profile from "./Profile"
import Link from 'next/link'

const RightMenu = () => {
	return (
		<div className="p-3">
			<Profile />
			<div className="mt-4 p-4">
				<h4 className="">My Vehicles</h4>
			<div className='flex flex-col mt-2'>
				<p> - KCW 001P</p>
				<p> - KDY 200I</p>
				
				<Link href='/driverForm'
				className="bg-gray-900 text-gray-200 text-center mt-8 py-2 rounded-lg">
					Add a driver/vehicle
				</Link>
			</div>
			</div>
			
		
		</div>
		)
}
export default RightMenu