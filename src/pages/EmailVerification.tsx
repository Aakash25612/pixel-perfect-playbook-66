import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

const EmailVerification: React.FC = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 font-inter font-medium leading-6 tracking-[-0.32px] antialiased" style={{ 
      colorScheme: 'light',
      fontFeatureSettings: 'normal',
      fontVariationSettings: 'normal',
    }}>
      <div className="w-full max-w-md relative">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/signup')}
          className="absolute top-0 left-0 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Go back"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>

        {/* Anara Logo */}
        <div className="text-center mb-16 mt-16">
          <h1 className="text-5xl font-medium text-black">Anara</h1>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-medium text-black text-center mb-6">
          Log in or sign up
        </h2>

        {/* Instructions */}
        <p className="text-center text-gray-600 text-base mb-8 leading-6">
          We sent a temporary log in code. Check your inbox at{" "}
          <span className="font-medium text-black">aakashgoel2070@gmail.com</span>
        </p>

        {/* Code Input Fields */}
        <div className="flex justify-center mb-8">
          <div className="flex border border-gray-300 rounded-2xl overflow-hidden">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className={`w-12 h-12 text-center text-lg font-medium focus:outline-none focus:bg-gray-50 border-0 ${
                  index < 5 ? 'border-r border-gray-300' : ''
                }`}
              />
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <Button
          variant="primary"
          size="lg"
          className="w-full py-4 text-base font-medium !rounded-xl mb-6"
        >
          Continue
        </Button>

        {/* Email Client Buttons */}
        <div className="flex gap-4 justify-center mb-8">
          <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-medium text-black transition-colors">
            Open Gmail
          </button>
          <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-medium text-black transition-colors">
            Open Outlook
          </button>
        </div>

        {/* Join Text */}
        <p className="text-center text-gray-600 text-base mb-16">
          Join 2M+ researchers
        </p>

        {/* Terms and Privacy */}
        <p className="text-center text-gray-500 text-sm">
          By continuing, you agree to{" "}
          <a href="/terms" className="underline">
            Anara's Terms
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default EmailVerification;