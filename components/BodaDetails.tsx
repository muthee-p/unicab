

const bodaBrands = ['Yamaha', 'Kawasaki', 'Boxer', 'Honda', 'Suzuki', 'Ranger', 'Shineray', 'Captain', 'Tiger', 'Dugati', 'BMW','TVS','Kibo']; 

const yamahaOptions = ['crux', 'Yamaha'];
const kawasakiOptions = ['Kawasaki'];
const boxerOptions = ['Bajaj Boxer'];
const hondaOptions = ['ace', 'Honda'];
const suzukiOptions = ['suzuki']
const rangerOptions = ['ranger']
const shinerayOptions = ['Shineray']
const captainOptions = ['Captain']
const tigerOptions = ['Tiger']
const dugatiOptions = ['Dugati']
const bmwOptions = ['BMW']
const tvsOptions = ['TVS']
const kiboOptions = ['Kibo']

const colors = ['red', 'orange', 'gray', 'black', 'blue', 'green','pink', 'purple']

const brandOptionsMap = {
  Yamaha: {
    models: yamahaOptions,
  },
  Kawasaki: {
    models: kawasakiOptions,
  }, 
  Boxer: {
    models: boxerOptions
  },
  Honda: {
    models: hondaOptions,
  },
  Suzuki: {
    models: suzukiOptions,
  },
  Ranger: {
    models: rangerOptions,
  },
  Shineray: {
    models: shinerayOptions,
  },
  Captain: {
    models: captainOptions,
  }, 
  Tiger: {
    models: tigerOptions,
  }, 
  Dugati:{
    models: dugatiOptions,
  },
  BMW: {
    models: bmwOptions,
  },
  TVS: {
    models: tvsOptions,
  },
  Kibo: {
    models: kiboOptions,
  }
};


type BodaDetailsProps = {
  selectedBodaBrand: string;
  handleBodaBrand: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedModel: string;
  handleSelectedModel: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedColor: string;
  handleSelectedColor: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  formData: RegisterFormData; 
};

const BodaDetails = ({ formData, handleInputChange, selectedBodaBrand, handleBodaBrand, selectedColor, handleColorChange, selectedModel, handleModel } : BodaDetailsProps) => (
  
  <>
       <h3 className='mt-4 mb-4 text-xl'>Motocycle Details</h3>
          <div className='flex flex-col'>

            <label className=' mt-4'>Choose Motocycle brand</label>
            <select 
                id='brand' 
                name='brand' 
                value={selectedBodaBrand} 
                onChange={handleBodaBrand}
                className='text-gray-500  rounded-lg p-2 w-full mt-4'
                >
              <option value="">-- Select Brand --</option>
              {bodaBrands.map((option) => (
                <option key={option} value={option} 
                >{option}</option>
              ))}
              <option value="Other">Other</option>
            </select>

            {selectedBodaBrand === 'Other' && (
              <>
              <label className=' mt-4'>Please type your Motocycle brand</label>
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

            {selectedBodaBrand && (
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
            {brandOptionsMap[selectedBodaBrand]?.models.map((option) => (
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


                <label className=' mt-4'>Year of manufacture</label>
              <input
                name='year' 
                value={formData.year}
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
            
          </>
);

export default BodaDetails