import React from 'react'
import { useMessageStore } from '../store/useMessageStore'
import { useEffect } from 'react';


function Sidebar() {
    const {users,getUsers} = useMessageStore();
    useEffect(()=>{
      getUsers();
    },[]);
   
    
    const arr=[...users];
  return (
    <>
    <div className=' lg:w-[30%] lg:min-h-[90vh] h-[13vh] overflow-auto flex flex-row lg:flex-col lg:gap-0 gap-9 lg:'>
        
       { arr.map((user)=><div key={user._id} className=' lg:w-[100%] lg:h-[5rem] lg:p-4 lg:flex lg:justify-start lg:items-center  lg:border-1 lg:border-gray-200 p-2'>
             <div className='lg:flex lg:items-center lg:justify-start  lg:gap-5'>
                <img className='lg:h-15 rounded-full h-10' src='./avatar.png'  alt="" /><div className='text-[0.8rem]'>{user.fullName}</div>
                </div> 
           </div>
)}
        </div>
    </>
  )}


export default Sidebar