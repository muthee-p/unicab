const carBrands = ['Audi', 'Suzuki', 'Toyota', 'Volkswagen'];

const audiOptions = ['A-series', 'Q-series'];
const suzukiOptions = ['Alto'];
const toyotaOptions = ['Vitz', 'Probox', 'haice','sienta','Ractis','passo'];
const mazdaOptions = ['demio']
const mitsubishiOptions = ['lancer']
const peugeotOptions = ['peugeot']
const volkswagenOptions = ['golf', 'tourang', 'jetta', 'Persert'];
const volvoOptions = ['Volvo']
const isuzuOptions = ['isuzu']
const bmwOptions = ['BMW']
const hondaOptions = ['fit']
const hyndaiOptions = ['Hyndai']
const nissanOptions = ['Note']

const colors = ['red', 'orange', 'gray', 'black', 'blue', 'green','pink', 'purple']

type CarDetailsProps = {
  selectedCarBrand: string;
  handleCarBrand: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedRide: string;
  handleSelectedRide: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CarDetails = ({ selectedCarBrand, handleCarBrand, selectedRide, handleSelectedRide }: CarDetailsProps ) => (
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