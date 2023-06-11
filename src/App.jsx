import PhoneList from './components/PhoneList/PhoneList'
import './App.css'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import { useState } from 'react'
import CenterItemOverlay from './components/CenterItemOverlay'

function App() {

  const [isLoginOpen, setIsLoginOpen] = useState(true)

  const onLoginClick = () => { 
    setIsLoginOpen(true)
  }

  const onLoginClose = () => { 
    setIsLoginOpen(false)
  }

  return (



    <>

      <Navbar onLoginClick={onLoginClick}/>
      <LoginForm isLoginOpen={isLoginOpen} onClose={onLoginClose}/>
     
      

      <br />

      <PhoneList />



    </>
  )
}

export default App
