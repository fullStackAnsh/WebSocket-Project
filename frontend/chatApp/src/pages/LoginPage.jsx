import React from 'react'
import { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import {toast} from 'react-hot-toast'
import { NavLink } from 'react-router-dom';

function LoginPage() {
   const [formdata,setFormData] = useState({
      email:"",
      password:"",
      
    });
    const {login} = useAuthStore();
    const validateData = () =>{
      if(formdata.email=="") return toast.error("email required");
      if(formdata.password=="") return toast.error("password required");
      return true;
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      const success = validateData();
      if(success){
          login(formdata);
      }
    }
  return (
    <>
    <div className='w-full h-[90vh] flex flex-col justify-center items-center'>
       <fieldset className="fieldset w-xs  bg-base-200 border border-base-300 p-4 rounded-box">
      <legend className="fieldset-legend">Login</legend>
    
     
      
      <label className="fieldset-label">Email</label>
      <input type="email" value={formdata.email} className="input" placeholder="Email" onChange={(e)=>setFormData({...formdata,email:e.target.value})} />
      
      <label className="fieldset-label">Password</label>
      <input type="password" value={formdata.password} className="input" placeholder="Password" onChange={(e)=>setFormData({...formdata,password:e.target.value})}/>
      
      <button className="btn btn-neutral mt-4" onClick={handleSubmit}>Login</button>
    </fieldset>
    <div className=''>Don't have a account? <NavLink to={"/signup"}>Create one</NavLink></div>
    </div>
    </>
  )
}

export default LoginPage