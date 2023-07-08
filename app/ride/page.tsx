import Link from 'next/link';

const Ride = () => {
	return (
		<div className="main_div">
			Welcome to Unicab
			<p>scan here to download app</p>
			<Link href='/'>
				<p>Click to downlaod app on your phone</p>
			</Link>
			
		</div>
		)
}
export default Ride