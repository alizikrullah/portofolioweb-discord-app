import { Button, Label, TextInput } from "flowbite-react";
import { useEffect } from "react";
import wideLogo from '../assets/wide-discord-logo.png';


function SignIn({ onSwitchToSignUp, onSwitchToHome }: { onSwitchToSignUp: () => void, onSwitchToHome: () => void }) {
    useEffect(() => {
    document.title = "Discord App Sign In";
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen  bg-[#1e1f22]">
      <header className="w-full p-8 md:px-10 md:pt-10 flex justify-center md:justify-start shrink-0">
        <img 
          src={wideLogo} 
          alt="Discord Logo" 
          onClick={onSwitchToHome}
          className="w-36 cursor-pointer hover:scale-105 transition-transform" 
        />
      </header>

      <main className="flex-1 flex items-center justify-center p-4 pb-12">
        
        <div className="max-w-[480px] w-full bg-[#313338] p-8 rounded-md shadow-lg">
          {/* Bagian Header Sign-In */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white">Welcome back!</h2>
            <p className="text-[#B5BAC1] text-[15px] mt-2">We're so excited to see you again!</p>
          </div>
          
          <form className="flex flex-col gap-4">
            {/* Input Email / Phone */}
            <div>
              <Label htmlFor="email" className="text-[#B5BAC1] text-[14px] mb-2 block">
                Email or Phone Number <span className="text-red-500">*</span>
              </Label>
              <TextInput 
                id="email" 
                type="text" 
                required 
                className="[&_input]:bg-[#1e1f22] [&_input]:text-white [&_input]:border-gray-600 [&_input]:focus:ring-1 [&_input]:focus:ring-blue-500 [&_input]:p-2.5 [&_input]:rounded-md" 
              />
            </div>

            {/* Input Password & Forgot Password Link */}
            <div>
              <Label htmlFor="password" className="text-[#B5BAC1] text-[14px] mb-2 block">
                Password <span className="text-red-500">*</span>
              </Label>
              <TextInput 
                id="password" 
                type="password" 
                required 
                className="[&_input]:bg-[#1e1f22] [&_input]:text-white [&_input]:border-gray-600 [&_input]:focus:ring-1 [&_input]:focus:ring-blue-500 [&_input]:p-2.5 [&_input]:rounded-md" 
              />
              {/* Link Forgot Password nyelip di bawah input */}
              <a href="#" className="text-[#8c94ec] hover:underline text-[13px] font-medium mt-2 inline-block">
                Forgot your password?
              </a>
            </div>

            {/* Tombol Log In */}
            <Button 
              type="submit" 
              size="lg"
              className="text-[15px] w-full bg-[#5865f2] hover:bg-[#4752c4] p-2 border-none mt-2 rounded-md"
            >
              Sign In
            </Button>

            <button 
              type="button" 
              onClick={onSwitchToSignUp} 
              className="text-[14px] text-[#B5BAC1] mt-1 text-left"
            >
              Need an account?{' '}
              <span className="text-[#8c94ec] hover:underline cursor-pointer font-medium">
                Sign-Up
              </span>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default SignIn;