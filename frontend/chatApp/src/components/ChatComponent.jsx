import React from 'react'
import { ImCross } from "react-icons/im";

function ChatComponent() {
  return (
   <>
   <div className='lg:w-[70%] '>
      <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
         <div className="avatar flex items-center gap-4">
         <div className="ring-primary ring-offset-base-100 lg:w-13 w-24 rounded-full ring ring-offset-2">
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
   </div>
   </>
  )
}

export default ChatComponent