import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatComponent from '../components/ChatComponent'

function HomePage() {
  return (
    <>
    <div className='flex w-full min-h-[90vh] lg:flex-row flex-col'>
     <Sidebar />
     <ChatComponent />
     </div>
    </>
  )
}

export default HomePage