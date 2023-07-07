const Driver = () => {
	return(
		<div className='flex min-h-screen flex-col items-center justify-between p-24'>
		<form className='flex flex-col'>
		<label> Personal details</label>
		<label>Your name</label>
		<span className='text-gray-500'>Please insert your name as it is on your id card</span>
			<input type='text' placeholder='example: John Omolo' />
		<label>Your email</label>
			<input type='email' placeholder='example: john369@gmail.com' />
		<label>Your phone number</label>
			<input type='number' placeholder='example: +254700000000' />
		
		<label>Choose</label>
			<select>
				<option value="Car">Audi</option>
				<option value="option1">BodaBoda</option>
			</select>
		<label>vehicle Details</label>
		<label>Vehicle make</label>
			<select>
  				<option value="option1">Audi</option>
  				<option value="option1">Suzuki</option>
  				<option value="option2">Toyota</option>
 				<option value="option3">Volkwagen</option>
			</select>
		<label>vehicle year</label>
			<input type='date' />
		<label>License plate</label>
			<input type='email' placeholder='example: KCC 000P' />
		<label>Vehicle Color</label>
			<input type='text' placeholder='e.g. gray' />
		
		<label>Legal Details</label>
		<label>Your National Id Number</label>
			<input type='number' placeholder='eg. 009089' />
		<label>Your Drivers License</label>
			<input type='number' placeholder='ejohn369@g. 345678' />
		
		<label>Uploads</label>
		<label>Upload your profile photo</label>
		<label>Upload your ID (front)</label>
		<label>Upload your Drivers License</label>
		<label>Your Profile photo</label>
		</form>
		</div>
		)

}
export default Driver