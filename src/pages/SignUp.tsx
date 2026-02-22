import { Button, Label, TextInput, Select } from "flowbite-react";
import { useEffect } from "react";
import wideLogo from '../assets/wide-discord-logo.png';

function SignUp({ onSwitchToSignIn, onSwitchToHome }: { onSwitchToSignIn: () => void, onSwitchToHome: () => void }) {
  useEffect(() => {
    document.title = "Discord App Sign Up";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1e1f22] p-4">
      {/* LOGO POJOK KIRI ATAS */}
        <img 
          src={wideLogo} 
          alt="Discord Logo" 
          onClick={onSwitchToHome}
          className="absolute top-10 left-10 w-45 cursor-pointer hover:scale-105 transition-transform" 
        />

      <div className="max-w-[480px] w-full bg-[#313338] p-8 rounded-md shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white">Create an account</h2>
        </div>
        
        <form className="flex flex-col gap-3">
          <div>
            <Label htmlFor="email" className="text-[#B5BAC1] text-[14px] mb-2 block">Email *</Label>
            <TextInput 
              id="email" 
              type="email" 
              required 
              className="[&_input]:bg-[#1e1f22] [&_input]:text-white [&_input]:border-gray-600 [&_input]:focus:ring-1 [&_input]:focus:ring-blue-500 [&_input]:p-2 [&_input]:rounded-md" 
            />
          </div>

          <div>
            <Label htmlFor="displayName" className="text-[#B5BAC1] text-[14px] mb-2 block">Display Name</Label>
            <TextInput 
              id="displayName" 
              type="text" 
              className="[&_input]:bg-[#1e1f22] [&_input]:text-white [&_input]:border-gray-600 [&_input]:focus:ring-1 [&_input]:focus:ring-blue-500 [&_input]:p-2 [&_input]:rounded-md" 
            />
          </div>
          
          <div>
            <Label htmlFor="username" className="text-[#B5BAC1] text-[14px] mb-2 block">Username *</Label>
            <TextInput 
              id="username" 
              type="text" 
              required 
              className="[&_input]:bg-[#1e1f22] [&_input]:text-white [&_input]:border-gray-600 [&_input]:focus:ring-1 [&_input]:focus:ring-blue-500 [&_input]:p-2 [&_input]:rounded-md" 
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-[#B5BAC1] text-[14px] mb-2 block">Password *</Label>
            <TextInput 
              id="password" 
              type="password" 
              required 
              className="[&_input]:bg-[#1e1f22] [&_input]:text-white [&_input]:border-gray-600 [&_input]:focus:ring-1 [&_input]:focus:ring-blue-500 [&_input]:p-2 [&_input]:rounded-md" 
            />
          </div>

          <div>
            <Label className="text-[#B5BAC1] text-[14px] mb-2 block">Date of Birth *</Label>
            <div className="flex gap-3">
              <Select id="month" className="flex-1 [&_select]:bg-[#1e1f22] [&_select]:text-[#B5BAC1] [&_select]:border-gray-600 [&_select]:focus:ring-1 [&_select]:focus:ring-blue-500 [&_select]:py-2 [&_select]:rounded-md"><option>Month</option></Select>
              <Select id="day" className="flex-1 [&_select]:bg-[#1e1f22] [&_select]:text-[#B5BAC1] [&_select]:border-gray-600 [&_select]:focus:ring-1 [&_select]:focus:ring-blue-500 [&_select]:py-2 [&_select]:rounded-md"><option>Day</option></Select>
              <Select id="year" className="flex-1 [&_select]:bg-[#1e1f22] [&_select]:text-[#B5BAC1] [&_select]:border-gray-600 [&_select]:focus:ring-1 [&_select]:focus:ring-blue-500 [&_select]:py-2 [&_select]:rounded-md"><option>Year</option></Select>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <label htmlFor="marketing" className="relative flex items-center mt-[2px] cursor-pointer">
              <input id="marketing" type="checkbox" className="peer sr-only" />
              <div className="w-6 h-6 bg-[#1e1f22] border border-gray-600 rounded flex items-center justify-center peer-checked:bg-[#5865f2] peer-checked:border-[#5865f2] transition-colors [&_svg]:hidden peer-checked:[&_svg]:block">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </label>

            <Label htmlFor="marketing" className="!text-[#B5BAC1] font-normal text-[14px] leading-relaxed cursor-pointer">
              (Optional) It's okay to send me emails with Discord updates, tips, and special offers. You can opt out at any time.
            </Label>
          </div>

          <p className="text-[12px] text-[#B5BAC1]">
            By clicking "Create Account", you agree to Discord's <a href="#" className="text-[#00a8fc] hover:underline">Terms of Service</a> <br></br>and have read the <a href="#" className="text-[#00a8fc] hover:underline">Privacy Policy</a>.
          </p>

          <Button 
            type="submit" 
            size="lg"
            className="text-[15px] w-full bg-[#5865f2] hover:bg-[#4752c4] p-2 border-none rounded-md mt-2"
          >
            Create Account
          </Button>

          <button 
            type="button" 
            onClick={onSwitchToSignIn} 
            className="text-[14px] text-[#B5BAC1] mt-1 text-left"
          >
            Already have an account?{' '}
            <span className="text-[#8c94ec] hover:underline cursor-pointer font-medium">
              Sign-In
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;