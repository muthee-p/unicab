"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";

const Profile = () =>{
const { data: session} = useSession();

if(session && session.user){
  return (
    <div className='border-b pb-8 flex flex-col items-center'>
       <Image 
          src='/assets/icons/profile.ico'
          alt='profile'
          width={150}
          height={150}
          className='object-contain my-4  '
          />
      <h4 className="">{session.user.name}</h4>
      
    </div>
  );
}
  return(
    <p>Please log in</p>
  )
};


export default Profile;
