import React from 'react'
import { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import {toast} from 'react-hot-toast'
import { NavLink } from 'react-router-dom';

function SignupPage() {
  const [formdata,setFormData] = useState({
    fullName:"",
    email:"",
    password:"",
    
  });
  const {signUp} = useAuthStore()
  const validateData = () => {
    if(formdata.fullName=="") return toast.error("FullName Required")
      if(formdata.email=="") return toast.error("Email Required")

        if(formdata.password=="") return toast.error("Password Required")
     return true;

  }
  const handleSubmit=(e)=>{
     e.preventDefault();
     const success=validateData();
     if(success){
      signUp(formdata);
     }

  }
  return (
   <><div className='w-full h-[90vh] flex flex-col justify-center items-center'>
   <fieldset className="fieldset w-xs  bg-base-200 border border-base-300 p-4 rounded-box">
  <legend className="fieldset-legend">SignUP</legend>

  <label className="fieldset-label">Full Name</label>
  <input type="text" value={formdata.fullName}  className="input" placeholder="Full Name" onChange={(e)=>setFormData({...formdata,fullName:e.target.value})}/>
  
  <label className="fieldset-label">Email</label>
  <input type="email" value={formdata.email} className="input" placeholder="Email" onChange={(e)=>setFormData({...formdata,email:e.target.value})} />
  
  <label className="fieldset-label">Password</label>
  <input type="password" value={formdata.password} className="input" placeholder="Password" onChange={(e)=>setFormData({...formdata,password:e.target.value})}/>
  
  <button className="btn btn-neutral mt-4" onClick={handleSubmit}>SignUP</button>
</fieldset>
<div className=''>Already have an account? <NavLink to={"/login"}>Login</NavLink></div>
</div>
   </>
  )
}

export default SignupPage