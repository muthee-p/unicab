import Link from 'next/link';
import Image from 'next/image'

const Ride = () => {
	return (
		<div className="main_div">
		<div>
			<h4>Welcome to Unicab</h4>
			<p>Scan here to download app</p>
				<Image 
          		src='/assets/images/qr-code.png'
          		alt='logo'
          		width={150}
          		height={150}
          		className='object-contain'
          	/>
			<Link href='/'>
				<p>Click to download app on your phone</p>
				<Image 
          		src='/assets/images/store.png'
          		alt='logo'
          		width={150}
          		height={150}
          		className='object-contain'
          	/>
			</Link>
		</div>	
		</div>
		)
}
export default Ride