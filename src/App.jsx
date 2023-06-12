import PhoneList from './components/PhoneList/PhoneList'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import { useState } from 'react'
import RegisterForm from './components/RegisterForm'


function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [isLoginOverlayOpen, setIsLoginOverlayOpen] = useState(false)
  const [isRegisterOverlayOpen, setIsRegisterOverlayOpen] = useState(false)

  const onLoginClick = () => { 
    setIsLoginOverlayOpen(true)
  }

  const onLoginClose = () => { 
    setIsLoginOverlayOpen(false)
  }

  const onRegisterClick = () => { 
    setIsRegisterOverlayOpen(true)
  }

  const onRegisterClose = () => { 
    setIsRegisterOverlayOpen(false)
  } 

  const onAuthenticated = () => {
    setIsUserLoggedIn(true)
  }
  
  const onLogout = () => {
    setIsUserLoggedIn(false)
  }

  return (
    <>
      <Navbar onLogout={onLogout} onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} isUserLoggedIn={isUserLoggedIn}/>
      <LoginForm onSuccessfulLogin={onAuthenticated} isLoginOpen={isLoginOverlayOpen} onClose={onLoginClose}/>
      <RegisterForm onSuccessfulRegister={onAuthenticated} isRegisterOpen={isRegisterOverlayOpen} onClose={onRegisterClose}/>
      <br />

      <PhoneList />



    </>
  )
}

export default App
