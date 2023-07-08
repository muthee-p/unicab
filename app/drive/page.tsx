
import Link from 'next/link';

const Drive = () => {
	return (
		<div className="main_div">
			Welcome to Unicab Driver
			<Link href='/login'>
				<button className="main_btn">Login</button>
			</Link>
			<Link href='/register'>
				<button className="main_btn">Become a driver</button>
			</Link>
		</div>
		)
}
export default Drive