'use client'
import { useState } from 'react';
import CarDetails from '@components/CarDetails';
import BodaDetails from '@components/BodaDetails';


const rideOptions = ['car', 'bodaboda'];

const colors = ['red', 'orange', 'gray', 'black', 'blue', 'green','pink', 'purple']

const Driver = () => {
  const [ride, setRide] = useState('');
  const [selectedRide, setSelectedRide] = useState('');
  const [selectedCarBrand, setSelectedCarBrand] = useState('');
  const [selectedBodaBrand, setSelectedBodaBrand] = useState('');
  const [section, setSection] = useState(1);
  
  const handleRide = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRide(event.target.value);
    setSelectedRide('');
    setSelectedCarBrand('');
  };
  
  const handleSelectedRide = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRide(event.target.value);
  };
  
  const handleCarBrand = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCarBrand(event.target.value);
  };
  const handleBodaBrand = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBodaBrand(event.target.value);
  };

  
  const handlePassportUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files && event.target.files[0];
  if (file) {
    // Do something with the uploaded file
    console.log('Uploaded file:', file);
  }
  };

  const handleIDUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files && event.target.files[0];
  if (file) {
    // Do something with the uploaded file
    console.log('Uploaded file:', file);
  }
}

const handleLicenseUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files && event.target.files[0];
  if (file) {
    // Do something with the uploaded file
    console.log('Uploaded file:', file);
  };
  };

  const handleSection = () => {
    setSection(section + 1);
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <form className='flex flex-col bg-gray-700 text-gray-200 p-4 rounded-2xl md:min-h-[60%] md:min-w-[40%]'>

      	{section === 1 && 
      		<div className='flex flex-col'>
      			<label className='mb-4 mt-4'>Personal details</label>
        		<label className='mb-4 mt-4'>Your name</label>
        			<span className='text-gray-500 text-sm'>
        				Please insert your name as it is on your ID card
        			</span>
        			<input type='text' 
        				placeholder='example: John Omolo' 
        				className='rounded-lg p-2 mt-4' />
        		<label className='mt-4'>Your email</label>
        			<input type='email' 
        				placeholder='example: john369@gmail.com' 
        				className='rounded-lg p-2 mt-4' />
        		<label className=' mt-4'>Your phone number</label>
        		<input type='number' 
        			placeholder='example: +254700000000' 
        			className='rounded-lg p-2 mt-4' />
      		</div>
      	}
        
        {section === 2 && 
        	<div className='flex flex-col'>
        		<label className=' mt-4 mb-4 text-xl'>Choose transportation means</label>
        			<select id='ride' value={ride} onChange={handleRide}
        				className= 'text-gray-500 rounded-lg p-2'>
          			<option value="" className='rounded-lg p-2 mt-4'
          				>-- Select Ride --</option>
          			{rideOptions.map((option) => (
            			<option key={option} value={option}>{option}</option>
          			))}
        			</select>

        		{ride === 'car' && (
          			<div>
          				<CarDetails
            				selectedCarBrand={selectedCarBrand}
            				handleCarBrand={handleCarBrand}
            				selectedRide={selectedRide}
            				handleSelectedRide={handleSelectedRide}
          				/>
           			</div>
        		)}

        		{ride === 'bodaboda' && (
          			<div>
          		  		<BodaDetails
            				selectedBodaBrand={selectedBodaBrand}
            				handleBodaBrand={handleBodaBrand}
            				selectedRide={selectedRide}
            				handleSelectedRide={handleSelectedRide}
          				/>
          			</div>
        		)}
        	</div>
    	}
        
        {section === 3 && 
        	<div className='flex flex-col'>
        		<label className=' mt-4'>Legal Details</label>
        			<label className=' mt-4'>Your National ID Number</label>
        				<input type='number' placeholder='e.g. 009089'
        					className='rounded-lg p-2 mt-4' />
        			<label className=' mt-4'>Your Driver's License</label>
        				<input type='number' placeholder='e.g. 345678'
        					className='rounded-lg p-2 mt-4' />
        	</div>

    	}
        
        {section === 4 && 
        	<div className='flex flex-col items-center'>
        		<label className=' mt-4 text-xl'>Uploads</label>
        			<label className=' mt-4'>Upload your passport photo</label>
						<input type="file" accept="image/*" 
							onChange={handlePassportUpload}
							className='rounded-lg p-2 mt-4' />
        			<label className=' mt-4'>Upload your ID (front)</label>
        				<input type="file" accept="image/*" 
        					onChange={handleIDUpload} 
        					className='rounded-lg p-2 mt-4'/>
        			<label className=' mt-4'>Upload your Driver's License</label>
        				<input type="file" accept="image/*" 
        				onChange={handleLicenseUpload} 
        				className='rounded-lg p-2 mt-4'/>


        		<button type='submit' 
        		className='rounded-full bg-blue-500 mt-8 p-1 w-full'> Finish</button>
        	</div>

    	}
    	{section < 4 && (
          <button type="button" 
          onClick={handleSection}
          className='rounded-full bg-blue-500 mt-8 p-1'
          >Next</button>
        )}
       	
      </form>
    </div>
  );
};

export default Driver;
