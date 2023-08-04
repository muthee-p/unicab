import Image from 'next/image'
import Link from 'next/link';


export default function Home() {
  return (
    <main className="min-h-screen  items-center justify-between px-4 sm:px-6 lg:px-32 pt-36">
      <div className="z-10 w-full max-w-5xl flex  flex-col items-center justify-between text-sm lg:flex">
        <div className='flex flex-col md:flex-row justify-between px-6 md:py-8'>
        
        <div className='flex md:mr-12 pl-8 items-center'>
          <div>
          <h2 className='font-bold text-5xl leading-tight'>
            Ride with Confidence,</h2>
            <h2 className='font-bold text-5xl leading-tight'>Earn With Comfort.</h2>
          <h4 className='text-xl text-gray-400 mt-4'>
            Driving Towards a Smoother Tomorrow.</h4>
          <Link href='/drive'>
          <button className='main_btn'>
            Become a driver
            </button>
          </Link>
          </div>
        </div>

        <Image 
          src='/assets/images/driver.jpg'
          alt='logo'
          width={600}
          height={600}
          className='object-contain'
          />
        
      </div>
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p>We strive to revolutionize transportation and connect people with seamless, reliable, and efficient rides. Our vision is to create a world where getting from point A to point B is not only convenient but also an enjoyable experience.</p>
          <Link href='/about'>
            <button className='main_btn'>learn more</button>
          </Link>
        </section>
        <section className='sm_column justify-around m-12 p-8 bg-gray-50 rounded-lg mt-12' >
        <Image 
          src='/assets/images/g-maps.png'
          alt='logo'
          width={400}
          height={400}
          className='object-contain'
          />
          <p className='md:w-[40%]'>We are delighted to have you on board as a valued customer of our cutting-edge transportation service. 
					Whether you're commuting to work, exploring a new city, or heading out for a night on the town, 
					Unicab is here to make your journey seamless and enjoyable.</p>
        </section>
        {/* <h3>Earn money</h3>
        step1: create an account
        step 2: fill the drivers form
        step 3: upload necessary documents
        <Link href='/drive'>
          <button className='main_btn'>learn more</button>
        </Link>
        <h4>Download the mobile app</h4> */}
      </div>
    </main>
  )
}
