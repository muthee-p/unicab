'use client'
import { useState } from 'react';

const rideOptions = ['car', 'bodaboda'];

const carBrands = ['Audi', 'Suzuki', 'Toyota', 'Volkswagen'];
const audiOptions = ['008', 'the 107', 'branda'];
const suzukiOptions = ['s9008', 'Tokyo', 'kyoto'];
const toyotaOptions = ['Vits', 'Probox', 'Mazda'];
const volkswagenOptions = ['golf', 'tourang'];

const colors = ['red', 'orange', 'gray', 'black', 'blue', 'green','pink', 'purple']

const Driver = () => {
  const [ride, setRide] = useState('');
  const [selectedRide, setSelectedRide] = useState('');
  const [selectedCarBrand, setSelectedCarBrand] = useState('');
  
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

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <form className='flex flex-col'>
        <label>Personal details</label>
        <label>Your name</label>
        <span className='text-gray-500'>Please insert your name as it is on your ID card</span>
        <input type='text' placeholder='example: John Omolo' />
        <label>Your email</label>
        <input type='email' placeholder='example: john369@gmail.com' />
        <label>Your phone number</label>
        <input type='number' placeholder='example: +254700000000' />
        
        <label>Choose your mode</label>
        <select id='ride' value={ride} onChange={handleRide}>
          <option value="">-- Select Ride --</option>
          {rideOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>

        {ride === 'car' && (
          <div>
            <h3>Vehicle Details</h3>
            <label>Choose vehicle brand</label>
            <select id='brand' value={selectedCarBrand} onChange={handleCarBrand}>
              <option value="">-- Select Brand --</option>
              {carBrands.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {selectedCarBrand === 'Audi' && (
              <div className='flex flex-col'>
                <label htmlFor="audi">Select model:</label>
                <select id="audi" value={selectedRide} onChange={handleSelectedRide}>
                  <option value="">-- Select Model --</option>
                  {audiOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <label>Vehicle year</label>
        			<input type='date' />
        		<label>License plate</label>
       			 <input type='text' placeholder='example: KCC 000P' />
        		<label>Vehicle Color</label>
       				<select>
       					<option value="">-- Select Model --</option>
                  	{colors.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
       				</select>
              </div>
            )}
            {/* Add similar logic for other car brands and their corresponding options */}
          </div>
        )}

        {ride === 'bodaboda' && (
          <div>
            <label htmlFor="rides">Select a drink:</label>
            <select id="drinks" value={selectedRide} onChange={handleSelectedRide}>
              <option value="">-- Select Drink --</option>
              <option value="tea">Tea</option>
              <option value="coffee">Coffee</option>
            </select>
          </div>
        )}
        
        <label>Legal Details</label>
        <label>Your National ID Number</label>
        <input type='number' placeholder='e.g. 009089' />
        <label>Your Driver's License</label>
        <input type='number' placeholder='e.g. 345678' />
        
        <label>Uploads</label>
        <label>Upload your passport photo</label>
			<input type="file" accept="image/*" 
				onChange={handlePassportUpload} />
        <label>Upload your ID (front)</label>
        	<input type="file" accept="image/*" 
        		onChange={handleIDUpload} />
        <label>Upload your Driver's License</label>
        	<input type="file" accept="image/*" 
        	onChange={handleLicenseUpload} />
        
      </form>
    </div>
  );
};

export default Driver;
