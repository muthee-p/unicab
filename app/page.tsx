import Image from 'next/image'
import Link from 'next/link';


export default function Home() {
  return (
    <main className="min-h-screen  items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl flex  flex-col items-center justify-between font-mono text-sm lg:flex">
        <div>
        <Image 
          src='/assets/images/driver.jpg'
          alt='logo'
          width={500}
          height={500}
          className='object-contain'
          />
    
        <section>
          <h2>safe way of earning</h2>
          <h3> become a driver and start earning</h3>
          <Link href='/drive'>
          <button className='main_btn'>
            Become a driver
            </button>
          </Link>
        </section>
      </div>
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p>We strive to revolutionize transportation and connect people with seamless, reliable, and efficient rides. Our vision is to create a world where getting from point A to point B is not only convenient but also an enjoyable experience.</p>
          <Link href='/about'>
            <button className='main_btn'>learn more</button>
          </Link>
        </section>
        <h3>Earn money</h3>
        step1: create an account
        step 2: fill the drivers form
        step 3: upload necessary documents
        <Link href='/drive'>
          <button className='main_btn'>learn more</button>
        </Link>
        <h4>Download the mobile app</h4>
      </div>
    </main>
  )
}
