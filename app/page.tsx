import Image from 'next/image'
import Link from 'next/link';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Image 
          src='/assets/images/driver.jpg'
          alt='logo'
          width={500}
          height={500}
          className='object-contain'
          />
        <h2>Welcome to Unicab</h2>
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
