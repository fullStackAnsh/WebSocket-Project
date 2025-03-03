import React from 'react'
import { ImCross } from "react-icons/im";
import { IoSend } from "react-icons/io5";


function ChatComponent() {
  return (
   <>
   <div className='lg:w-[70%] '>
      <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
         <div className="avatar flex items-center gap-4">
         <div className="ring-primary ring-offset-base-100 lg:w-13 w-14 rounded-full ring ring-offset-2">
         <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
         </div>
         <h3 >Name</h3>
         </div>
        
      </div>
      <div className="flex-none">
       <button className="btn btn-square btn-ghost">
       <ImCross />
      
      </button>
      </div>
      </div>
    <div className='lg:h-[73vh] h-[57vh] bg-amber-200'>Chat Bubble</div>
    <div className='  lg:h-[8vh] h-[9vh] flex items-center justify-around'>
        <input type="text" placeholder="Type here" className="input lg:w-[90%]" />
        <IoSend className='text-3xl'/>

    </div>
   </div>
   </>
  )
}

export default ChatComponent