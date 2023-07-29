import { RegisterFormData } from '@lib/types/RegisterFormData'

const carBrands = [ 'Toyota', 'Mazda', 'Mitsubishi','Suzuki', 'Peugeot', 'Volkswagen', 'Volvo','Honda', 'Hyundai', 'Nissan', 'Subaru'];

const suzukiOptions = ['Alto', 'Celerio', 'Swift','Ignis', 'Baleno', 'Dzire','Ciaz', 'Brezza', 'S-Cross'];
const toyotaOptions = ['Vitz', 'Probox', 'HiAce','Sienta','Ractis','Passo', 'Corolla Fielder', 'Noah', 'Corolla', 'Corolla Axio', 'Belta', 'Premio', 'Wish','Yaris','Alphard', 'Rush','Ist'];
const mazdaOptions = ['Demio', 'Biante', 'Carlo', 'Premacy', 'Verisa']
const mitsubishiOptions = ['Lancer', 'Delica', 'Mirage', 'Galant', 'EK Wagon']
const peugeotOptions = ['208', '308', '2008', '207']
const volkswagenOptions = ['Golf', 'Tourang', 'Jetta', 'Persert'];
const volvoOptions = ['440','S60', 'V40','XC60']
const hondaOptions = ['Fit', 'Jade', 'Vezel', 'Shuttle','Odyssey', 'Grace', 'Wagon']
const hyundaiOptions = ['Palisade', 'Santa Fe']
const subaruOptions =['Impreza', 'G4']
const nissanOptions = ['Note', 'March', 'Tiida', 'Advan', 'Lafesta','NV 200','Latio', 'Dayz', 'Serana', 'sylphy']

const colors = ['red', 'orange', 'gray', 'black', 'blue', 'green','pink', 'purple']

const brandOptionsMap = {

  Suzuki: {
    models: suzukiOptions,
  }, 
  Toyota: {
    models: toyotaOptions,
  },
  Mazda: {
    models: mazdaOptions,
  },
  Mitsubishi: {
    models: mitsubishiOptions,
  },
  Peugeot: {
    models: peugeotOptions,
  },
  Volkswagen: {
    models: volkswagenOptions,
  },
  Volvo: {
    models: volvoOptions,
  },  
  Honda:{
    models: hondaOptions,
  },
  Hyundai: {
    models: hyundaiOptions
  },
  Nissan: {
    models: nissanOptions,
  },
  Subaru:{
    models: subaruOptions,
  }
};

type CarDetailsProps = {
  selectedCarBrand: string;
  handleCarBrand: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedModel: string;
  handleModel: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedColor: string;
  handleColorChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formData: RegisterFormData; 
  yearValue: number; 
};

const CarDetails = ({ yearValue, selectedCarBrand, handleCarBrand, formData, handleInputChange, selectedColor, handleColorChange, selectedModel, handleModel }: CarDetailsProps ) => (
  <>
    <h3 className='mt-4 mb-4 text-xl'>Vehicle Details</h3>
          <div className='flex flex-col'>
            <label className=' mt-4'>Choose vehicle brand</label>
            <select 
              id='brand' 
              name='brand'
              value={selectedCarBrand} 
              onChange={handleCarBrand} 
              className='text-gray-500 rounded-lg p-2 w-full mt-4 mb-4'
            >
              <option value="" >-- Select Brand --</option>
              {carBrands.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            <option value="Other">Other</option>
            </select>

            {selectedCarBrand === 'Other' && (
              <>
              <label className=' mt-4'>Please type your Vehicle brand</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                placeholder="Enter other brand"
                className='text-gray-700 bg-gray-200 rounded-lg p-2 mt-4'
              />
              </>
            )}
          </div>
            {selectedCarBrand && (
        <div className='flex flex-col'>
          <label htmlFor="brand" className=' mt-4'>Select model:</label>
          <select
            id="brand"
            name='model'
            value={selectedModel}
            onChange={handleModel}
            className='text-gray-500  rounded-lg p-2 mt-4'
          >
            <option value="">-- Select Model --</option>
            {brandOptionsMap[selectedCarBrand as keyof typeof brandOptionsMap]?.models.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
            <option value="Other">Other</option>
          </select>

          {selectedModel === 'Other' && (
            <>
            <label className=' mt-4'>Please type your Motocycle model</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleInputChange}
            placeholder="Enter other model"
            className='text-gray-700 bg-gray-200 rounded-lg p-2 mt-4'
          />
          </>
        )}
                <label className=' mt-4'>Vehicle year</label>
              <input
                name='year' 
                value={yearValue}
                onChange={handleInputChange}
                type="number" placeholder="YYYY" min="1900" max="2099"
                className= 'text-gray-700 rounded-lg p-2 mt-4' />


            <label className=' mt-4'>License plate</label>
             <input 
             name='licensePlate'
              value={formData.licensePlate}
              onChange={handleInputChange}
             type='text' placeholder='example: KCC 000P'
              className= 'text-gray-700 rounded-lg p-2 mt-4' />


            <label className=' mt-4'>Motocycle Color</label>
              <select
                name="color" value={selectedColor} onChange={handleColorChange} 
                className= 'text-gray-500 rounded-lg p-2 mt-4'>
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