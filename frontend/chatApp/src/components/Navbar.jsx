import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoLogOutOutline } from "react-icons/io5";
import { useAuthStore } from '../store/useAuthStore';
import { MdOutlinePermIdentity } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";



function Navbar() {
  const {logOut,loggedOut} = useAuthStore();
  return (
   <>
   <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Inbox</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    <li>
       

       {loggedOut ? null : <NavLink to='/setting'><IoSettingsOutline className='text-2xl'/>Settings</NavLink> }
        </li>
    <li>
       

       {loggedOut ? null : <NavLink to='/profile'><MdOutlinePermIdentity  className='text-2xl'/>Profile</NavLink> }
        </li>
      <li>
       

     {loggedOut ? null : <NavLink to='/signup' onClick={logOut}> <IoLogOutOutline className='text-2xl'/>Logout</NavLink> }
      </li>
    </ul>
  </div>
</div>
   </>
  )
}

export default Navbar