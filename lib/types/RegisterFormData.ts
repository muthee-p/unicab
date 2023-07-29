export interface RegisterFormData {
  name: string;
  email: string;
  phoneNumber: string;
  brand: string;
  model: string;
  year: number | null; // Use 'null' to indicate that the value can be null or a number
  licensePlate: string;
  color: string;
  nationalId: string;
  driverLicense: string;
  passportUpload: string;
  idUpload: string;
  licenseUpload: string;
  userId: string | null; // Use 'null' to indicate that the value can be null or a string
}