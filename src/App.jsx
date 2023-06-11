import PhoneList from './components/PhoneList/PhoneList'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import { useState } from 'react'
import RegisterForm from './components/RegisterForm'

function App() {

  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)

  const onLoginClick = () => { 
    setIsLoginOpen(true)
  }

  const onLoginClose = () => { 
    setIsLoginOpen(false)
  }

  const onRegisterClick = () => { 
    setIsRegisterOpen(true)
  }

  const onRegisterClose = () => { 
    setIsRegisterOpen(false)
  } 

  return (
    <>

      <Navbar onLoginClick={onLoginClick} onRegisterClick={onRegisterClick}/>
      <LoginForm isLoginOpen={isLoginOpen} onClose={onLoginClose}/>
      <RegisterForm isRegisterOpen={isRegisterOpen} onClose={onRegisterClose}/>
      <br />

      <PhoneList />



    </>
  )
}

export default App
