// pages/profile.tsx (or any other Next.js page/component where you want to display the driver's name and image)
"use client"
import { PrismaClient, Driver, User } from '@prisma/client';
import { useEffect, useState } from 'react';

const prisma = new PrismaClient();

type ProfileProps = {
  user: User & { driverId: number } | null; // Add null to the union type to handle the case where the user is not logged in or not found
};

const ProfilePage: React.FC<ProfileProps> = ({ user }) => {
  // State to store the driver's data
  const [driver, setDriver] = useState<Driver | null>(null);

  // Effect to fetch the driver's data when the component mounts or when 'user' changes
  useEffect(() => {
    const getDriverData = async (): Promise<void> => {
      if (user) {
        const driver = await prisma.driver.findUnique({
          where: { id: user.driverId },
          // Include the 'image' field in the query to get the driver's image
         
        });
        setDriver(driver);
      }
    };
    getDriverData();
  }, [user]);

  if (!user) {
    // You may redirect the user to the login page or show an appropriate message
    return <div>Please log in to view this page.</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      {driver && (
        <div>
          <h2>Driver's Name: {driver.name}</h2>
          
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps({ }) {
  // Assuming you're using server-side rendering (SSR) to fetch the user data
  // Here, you should fetch the currently logged-in user's data using your authentication system (e.g., session, JWT, etc.)
  const user: User & { driverId: number } | null = null; // Replace with your actual user data
  // Fetch the logged-in user data here and update the 'user' variable accordingly

  return { props: { user } };
}

export default ProfilePage;
