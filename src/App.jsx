import { useState } from 'react'
import './App.css'
import BootScreen from './Components/BootScreen'
import LoginScreen from './Components/LoginScreen'
import Desktop from './Components/Desktop'

function App() {
  const [phase, setPhase] = useState("desktop")

  if (phase === "boot") {
    return <BootScreen onFinish={() => setPhase("login")} />
  }

  if (phase === "login") {
    return <LoginScreen onLogin={() => setPhase("desktop")} />
  }

  return <Desktop onLogout={() => setPhase("login")}/>
}

export default App
