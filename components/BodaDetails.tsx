const bodaBrands = ['Yamaha', 'Kawasaki', 'Boxer', 'Hundai'];

const yamahaOptions = ['008', 'the 107', 'branda'];
const kawasakiOptions = ['s9008', 'Tokyo', 'kyoto'];
const boxerOptions = ['Vits', 'Probox', 'Mazda'];
const hundaiOptions = ['golf', 'tourang'];

const colors = ['red', 'orange', 'gray', 'black', 'blue', 'green','pink', 'purple']


const BodaDetails = ({ selectedBodaBrand, handleBodaBrand, selectedRide, handleSelectedRide }) => (
  <>
    <h3 className='mt-4 mb-4 text-xl'>Motocycle Details</h3>
            <label className=' mt-4'>Choose Motocycle brand</label>
            <select id='brand' value={selectedBodaBrand} onChange={handleBodaBrand}
              className='text-gray-500 rounded-lg p-2 w-full mt-4 mb-4'>
              <option value="">-- Select Brand --</option>
              {bodaBrands.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {selectedBodaBrand === 'Yamaha' && (
              <div className='flex flex-col'>
                <label htmlFor="yamaha">Select model:</label>
                <select id="yamaha" value={selectedRide} onChange={handleSelectedRide}
                  className= 'text-gray-500 rounded-lg p-2 mt-4'>
                  <option value="">-- Select Model --</option>
                  {yamahaOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <label className=' mt-4'>Year of manufacture</label>
              <input type="number" placeholder="YYYY" min="1900" max="2099"
                className= 'text-gray-500 rounded-lg p-2 mt-4' />
            <label className=' mt-4'>License plate</label>
             <input type='text' placeholder='example: KCC 000P'
              className= 'text-gray-500 rounded-lg p-2 mt-4' />
            <label className=' mt-4'>Motocycle Color</label>
              <select className= 'text-gray-500 rounded-lg p-2 mt-4'>
                <option value="">-- Select Color --</option>
                    {colors.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
              </select>
              </div>
            )}
            {/* Add similar logic for other Boda brands and their corresponding options */}
          </>
);

export default BodaDetails