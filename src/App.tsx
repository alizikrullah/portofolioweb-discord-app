import { useState } from 'react'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {
  const [page, setPage] = useState('home');
  if (page === 'signin') {
    return <SignIn onSwitchToSignUp={() => setPage('signup')} onSwitchToHome={() => setPage('home')} />;
  }

  if (page === 'signup') {
    return <SignUp onSwitchToSignIn={() => setPage('signin')} onSwitchToHome={() => setPage('home')} />;
  }
  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-[#23272A] text-white">
      <div className="flex flex-col items-center">
        <img src="./logo-discord.svg" className="w-32 h-auto hover:scale-110 transition-transform cursor-pointer" alt="Discord logo" />
        <h1 className="text-5xl font-bold mt-4">Welcome to Discord!</h1>
      </div>

      <div className="flex gap-4 mt-6">
        <button 
          onClick={() => setPage('signin')} 
          className="px-8 py-3 bg-[#5865F2] rounded-full font-bold hover:bg-[#4752C4] transition-all"
        >
          Sign In
        </button>
        
        <button 
          onClick={() => setPage('signup')} 
          className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all"
        >
          Sign Up
        </button>
      </div>

      <p className="text-[#9495A5] mt-8 text-sm text-center">
        Click on the Discord logo to learn more
      </p>
    </div>
  )
}

export default App