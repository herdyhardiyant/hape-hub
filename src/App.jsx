import PhoneList from './components/PhoneList/PhoneList'
import './App.css'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import { useState } from 'react'
import CenterItemOverlay from './components/CenterItemOverlay'

function App() {


  return (



    <>

      <Navbar />
      <LoginForm />

      <br />

      <PhoneList />



    </>
  )
}

export default App
