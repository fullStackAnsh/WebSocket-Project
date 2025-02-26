import React from 'react'
import Navbar from './components/Navbar.jsx'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import { useEffect } from 'react'
import { useAuthStore } from './store/useAuthStore.js'
import { Navigate } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

function App() {
 const {authUser} = useAuthStore();
  return (
   <>
  <div>
  <Toaster
  position="top-center"
  reverseOrder={false}
/>
   <Navbar />
  <Routes>
    <Route path='/' element={authUser ? <HomePage /> : <Navigate to='/login'/>}/>
    <Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to='/login'/>}/>
    <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to='/'/>}/>
    <Route path='/signup' element={!authUser ? <SignupPage />  : <Navigate to='/'/>}/>
    <Route path='/setting' element={<SettingsPage />}/>
  </Routes>
 
  </div>
</>
  )
}

export default App