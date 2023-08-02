"use client"
import { useSession } from "next-auth/react";

const Profile = () =>{
const { data: session} = useSession();

if(session && session.user){
  return (
    <div className='border-b pb-8 flex items-center'>
      <h1>{session.user.name}</h1>
      
    </div>
  );
}
  return(
    <p>Please log in</p>
  )
};


export default Profile;
