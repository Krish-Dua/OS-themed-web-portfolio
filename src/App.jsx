import { useEffect, useState } from 'react'
import './App.css'
import BootScreen from './Components/BootScreen'
import LoginScreen from './Components/LoginScreen'
import Desktop from './Components/Desktop'

function App() {
  const [phase, setPhase] = useState("boot")
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showFullscreenPrompt, setShowFullscreenPrompt] = useState(false)
  const [hasPromptedThisSession, setHasPromptedThisSession] = useState(false)

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement))
    }

    onFullscreenChange()
    document.addEventListener("fullscreenchange", onFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange)
  }, [])

  const enterFullscreen = async () => {
    if (document.fullscreenElement) return
    try {
      await document.documentElement.requestFullscreen()
    } catch {
    }
  }

  useEffect(() => {
    if (phase !== "desktop") {
      setShowFullscreenPrompt(false)
      setHasPromptedThisSession(false)
      return
    }

    if (!isFullscreen && !hasPromptedThisSession) {
      setShowFullscreenPrompt(true)
      setHasPromptedThisSession(true)
      return
    }

    if (isFullscreen) {
      setShowFullscreenPrompt(false)
    }
  }, [phase, isFullscreen, hasPromptedThisSession])

  if (phase === "boot") {
    return <BootScreen onFinish={() => setPhase("login")} />
  }

  if (phase === "login") {
    return <LoginScreen onLogin={() => setPhase("desktop")} />
  }

  return (
    <div className="relative h-screen w-screen">
      <Desktop onLogout={() => setPhase("login")} />
      {showFullscreenPrompt && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/35">
          <div
            className="w-[min(90vw,420px)] rounded-[10px] bg-[#f2f2f2] p-4 text-[#111827] shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
            role="dialog"
            aria-modal="true"
          >
            <p className="mb-3 text-[15px]">Do you want to enter fullscreen for a better experience?</p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="cursor-pointer rounded-md bg-[#0b5ed7] px-[14px] py-[7px] text-white"
                onClick={async () => {
                  setShowFullscreenPrompt(false)
                  await enterFullscreen()
                }}
              >
                OK
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-md bg-[#6b7280] px-[14px] py-[7px] text-white"
                onClick={() => setShowFullscreenPrompt(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
