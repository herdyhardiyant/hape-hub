import PhoneList from './components/PhoneList/PhoneList'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import { useState } from 'react'
import RegisterForm from './components/RegisterForm'
import CenterItemOverlay from './components/CenterItemOverlay'
import Cart from './components/Cart/Cart'


function App() {
  //User States
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  //User features states
  const [isCartOpen, setIsCartOpen] = useState(false)

  //Dialog OVerlay States
  const [isLoginOverlayOpen, setIsLoginOverlayOpen] = useState(false)
  const [isRegisterOverlayOpen, setIsRegisterOverlayOpen] = useState(false)
  const [isWelcomeOverlayOpen, setIsWelcomeOverlayOpen] = useState(false)
  const [isLogoutOverlayOpen, setIsLogoutOverlayOpen] = useState(false)


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
    setIsWelcomeOverlayOpen(true)
  }

  const onLogout = () => {
    setIsUserLoggedIn(false)
    setIsLogoutOverlayOpen(true)
    setIsCartOpen(false)
  }

  const closeWelcomeOverlay = () => {
    setIsWelcomeOverlayOpen(false)
  }

  const closeLogoutOverlay = () => {
    setIsLogoutOverlayOpen(false)
  }

  const onOpenCart = () => {
    setIsCartOpen(true)
  }

  const onCloseCart = () => {
    setIsCartOpen(false)
  }

  return (
    <>
      <Navbar onLogout={onLogout} onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} isUserLoggedIn={isUserLoggedIn} onOpenCart={onOpenCart} />
      <LoginForm onSuccessfulLogin={onAuthenticated} isLoginOpen={isLoginOverlayOpen} onClose={onLoginClose} />
      <RegisterForm onSuccessfulRegister={onAuthenticated} isRegisterOpen={isRegisterOverlayOpen} onClose={onRegisterClose} />

      <CenterItemOverlay isShown={isWelcomeOverlayOpen} onBackdropClick={closeWelcomeOverlay}>
        <h1>Welcome to the Phone Hub</h1>
        <br />
        <button onClick={closeWelcomeOverlay}>Close</button>
      </CenterItemOverlay>

      <CenterItemOverlay isShown={isLogoutOverlayOpen} onBackdropClick={closeLogoutOverlay}>
        <h1>You just logged out</h1>
        <br />
        <button onClick={closeLogoutOverlay}>Close</button>
      </CenterItemOverlay>


      <Cart isLoggedIn={isUserLoggedIn} isOpen={isCartOpen} onCloseCart={onCloseCart}/>


      <PhoneList isUserLoggedIn={isUserLoggedIn} isShown={!isCartOpen} />

    </>
  )
}

export default App
