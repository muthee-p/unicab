const carBrands = ['Audi', 'Suzuki', 'Toyota', 'Volkswagen'];
const audiOptions = ['008', 'the 107', 'branda'];
const suzukiOptions = ['s9008', 'Tokyo', 'kyoto'];
const toyotaOptions = ['Vits', 'Probox', 'Mazda'];
const volkswagenOptions = ['golf', 'tourang'];

const colors = ['red', 'orange', 'gray', 'black', 'blue', 'green','pink', 'purple']


const CarDetails = ({ selectedCarBrand, handleCarBrand, selectedRide, handleSelectedRide }) => (
  <>
    <h3 className='mt-4 mb-4 text-xl'>Vehicle Details</h3>
            <label className=' mt-4'>Choose vehicle brand</label>
            <select id='brand' value={selectedCarBrand} onChange={handleCarBrand} 
              className='text-gray-500 rounded-lg p-2 w-full mt-4 mb-4'>
              <option value="" >-- Select Brand --</option>
              {carBrands.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {selectedCarBrand === 'Audi' && (
              <div className='flex flex-col'>
                <label htmlFor="audi" >Select model:</label>
                <select id="audi" value={selectedRide} onChange={handleSelectedRide}
                className= 'text-gray-500 rounded-lg p-2 mt-4'>
                  <option value="">-- Select Model --</option>
                  {audiOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <label className=' mt-4'>Vehicle year</label>
              <input type="number" placeholder="YYYY" min="1900" max="2099" 
              className= 'text-gray-500 rounded-lg p-2 mt-4'/>
            <label className=' mt-4'>License plate</label>
             <input type='text' 
                placeholder='example: KCC 000P' 
                className= 'text-gray-500 rounded-lg p-2 mt-4' />
            <label className=' mt-4'>Vehicle Color</label>
              <select className= 'text-gray-500 rounded-lg p-2 mt-4'>
                <option value="">-- Select Color --</option>
                    {colors.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
              </select>
              </div>
            )}
            {/* Add similar logic for other car brands and their corresponding options */}
          </>
);

export default CarDetails