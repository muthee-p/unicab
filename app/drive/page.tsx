
import Link from 'next/link';

const Drive = () => {
	return (
		<div>
			Welcome to Unicab Driver
			<Link href='/login'>
				<button>Login</button>
			</Link>
			<Link href='/register'>
				<button>Become a driver</button>
			</Link>
		</div>
		)
}
export default Drive