'use client'

import Link from 'next/link';
import { useState } from 'react';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import CarDetails from '@components/CarDetails';
import BodaDetails from '@components/BodaDetails';

const rideOptions = ['car', 'bodaboda'];
const colors = ['red', 'orange', 'gray', 'black', 'blue', 'green','pink', 'purple']

type RegisterFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  brand: string;
  model: string;
  year: number | null;
  licensePlate: string;
  color: string;
  nationalId: string;
  driverLicense: string;
  passportUpload: string;
  idUpload: string;
  licenseUpload: string;
  userId: string | null;
};

const DriverForm = () => {

    const router = useRouter();
    const {data: session } = useSession();
    const currentUserId = session?.user.id;
    const [formData, setFormData] = useState<RegisterFormData>({
      name: '',
      email: '',
      phoneNumber: '',
      brand: '',
      model: '',
      year: null,
      licensePlate: '',
      color: '',
      nationalId: '',
      driverLicense: '',
      passportUpload: '',
      idUpload: '',
      licenseUpload: '',
      userId: currentUserId
    });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: name==='year'? Number(value) : value }));
  };

 const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log(formData);

      const response = await fetch('/api/driver', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');

      }
      router.push('/')
     
    } catch (error) {
      console.error(error);
    }
  };



  const [ride, setRide] = useState('');
  const [selectedRide, setSelectedRide] = useState('');
  const [selectedCarBrand, setSelectedCarBrand] = useState('');
  const [selectedBodaBrand, setSelectedBodaBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [section, setSection] = useState(1);
  
  const handleRide = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRide(event.target.value);
    setSelectedRide('');
    setSelectedCarBrand('');
    setSelectedBodaBrand('');
  };
  
  const handleSelectedRide = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRideModel= event.target.value;
    setSelectedRide(selectedRideModel);
    setFormData((prevFormData) => ({ ...prevFormData, model: selectedRideModel }));

  };
  
  const handleCarBrand = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBrand = event.target.value;
    setSelectedCarBrand(selectedBrand);
    setFormData((prevFormData) => ({ ...prevFormData, brand: selectedBrand }));
  };
  const handleBodaBrand = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBrand = event.target.value;
    setSelectedBodaBrand(selectedBrand);
    setFormData((prevFormData) => ({ ...prevFormData, brand: selectedBrand }));

  };
  

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(event.target.value);
    setFormData((prevFormData) => ({ ...prevFormData, color: event.target.value }));
  };
  const handleModel = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(event.target.value);
    setFormData((prevFormData) => ({ ...prevFormData, model: event.target.value }));
  };
  
  const handlePassportUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files && event.target.files[0];
  
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
  const handlePrevSection = () => {
    setSection(section -1);
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-between md:p-24 p-10'>
      <form onSubmit={handleFormSubmit}
      className='flex flex-col bg-gray-700 text-gray-200 p-4 rounded-2xl md:min-h-[60%] md:min-w-[40%] min-w-[18rem]'>

        {section === 1 && 
          <div className='flex flex-col'>
            <label className='mb-4 mt-4'>Personal details</label>
            <label className='mb-4 mt-4'>Your name</label>
              <span className='text-gray-500 text-sm'>
                Please insert your name as it is on your ID card
              </span>
              <input 
              name='name'
                value={formData.name}
                onChange={handleInputChange}
                type='text' 
                placeholder='example: John Omolo' 
                className='rounded-lg p-2 mt-4' />
            <label className='mt-4'>Your email</label>
              <input
              name='email'
                value={formData.email}
                onChange={handleInputChange} 
                type='email' 
                placeholder='example: john369@gmail.com' 
                className='rounded-lg p-2 text-gray-700 mt-4' />
            <label className=' mt-4'>Your phone number</label>
            <input
            name='phoneNumber' 
              value={formData.phoneNumber}
              onChange={handleInputChange}
              type='number' 
              placeholder='example: +254700000000' 
              className='rounded-lg text-gray-700 p-2 mt-4' />
          </div>
        }
        
        {section === 2 && 
          <div className='flex flex-col'>
            <label className=' mt-4 mb-4'>Choose transportation means</label>
              <select id='ride' value={ride} onChange={handleRide}
                className= 'text-gray-500 rounded-lg p-2 mt-4'>
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
                    formData={formData}
                    handleInputChange={handleInputChange}
                    selectedColor={selectedColor}
                    handleColorChange={handleColorChange}
                    selectedModel={selectedModel}
                    handleModel={handleModel}
                  />
                </div>
            )}

            {ride === 'bodaboda' && (
                <div>
                    <BodaDetails
                    selectedBodaBrand={selectedBodaBrand}
                    handleBodaBrand={handleBodaBrand}
                    formData={formData}
                    handleInputChange={handleInputChange}
                    selectedColor={selectedColor}
                    handleColorChange={handleColorChange}
                    selectedModel={selectedModel}
                    handleModel={handleModel}
                  />
                </div>
            )}
          </div>
      }
        
        {section === 3 && 
          <div className='flex flex-col'>
            <label className=' mt-4'>Legal Details</label>
              <label className=' mt-4'>Your National ID Number</label>
                <input 
                name='nationalId'
                  value={formData.nationalId}
                  onChange={handleInputChange}
                  type='number' placeholder='e.g. 009089'
                  className='rounded-lg text-gray-700 p-2 mt-4' />
              <label className=' mt-4'>Your Driver's License</label>
                <input 
                  name='driverLicense'
                  value={formData.driverLicense}
                  onChange={handleInputChange}
                  type='number' placeholder='e.g. 345678'
                  className='rounded-lg text-gray-700 p-2 mt-4' />
          </div>

      }
        
        {section === 4 && 
          <div className='flex flex-col'>
            <label className=' mt-4 text-xl'>Uploads</label>
             <label className=' mt-4'>Upload your passport photo</label>
                <input
                  name='passportUpload'
                  value={formData.passportUpload}
                  onChange={handleInputChange}
                  type='text' placeholder='e.g. 009089'
                  className='rounded-lg text-gray-700 p-2 mt-4' />
              <label className=' mt-4'>Upload your ID (front)</label>
                <input 
                  name='idUpload'
                  value={formData.idUpload}
                  onChange={handleInputChange}
                  type='text' placeholder='e.g. 345678'
                  className='rounded-lg text-gray-700 p-2 mt-4' />
              <label className=' mt-4'>Upload your Driver's License</label>
                <input 
                  name='licenseUpload'
                  value={formData.licenseUpload}
                  onChange={handleInputChange}
                  type='text' placeholder='e.g. 345678'
                  className='rounded-lg text-gray-700 p-2 mt-4' />

               <button type='submit' 
              className='rounded-full bg-blue-500 mt-8 p-1 w-full'> Submit </button>
       <div className= 'flex justify-between mt-8'>
      
       {section > 1 && (
          <button type="button" 
          onClick={handlePrevSection}
          className='rounded-full w-32 bg-gray-500 hover:bg-gray-600 p-1'
          >Back</button>
        )}
       {section < 4 && (
          <button type="button" 
          onClick={handleSection}
          className='rounded-full w-32 bg-blue-500  p-1'
          >Next</button>
        )}
       </div>
        <p>By tapping «Submit» I agree with <Link href='/termsandconditions'>Terms and Conditions,</Link> I acknowledge and agree with processing and transfer of personal data according to conditions of <Link href='/privacypolicy'>Privacy Policy</Link></p>
        </div>

          // <div className='flex flex-col w-[17rem]'>
          //  <label className=' mt-4 text-xl'>Uploads</label>
          //    <label className=' mt-4'>Upload your passport photo</label>
          //  <input type="file" accept="image/*" 
          //    onChange={handlePassportUpload}
          //    className='rounded-lg p-2 mt-4' />
          //    <label className=' mt-4'>Upload your ID (front)</label>
          //      <input type="file" accept="image/*" 
          //        onChange={handleIDUpload} 
          //        className='rounded-lg p-2 mt-4'/>
          //    <label className=' mt-4'>Upload your Driver's License</label>
          //      <input type="file" accept="image/*" 
          //      onChange={handleLicenseUpload} 
          //      className='rounded-lg p-2 mt-4'/>


          //  <button type='submit' 
          //  className='rounded-full bg-blue-500 mt-8 p-1 w-full'> Finish</button>
          // </div>

      }
     
        
      </form>
    </div>
  );
};

export default DriverForm;
