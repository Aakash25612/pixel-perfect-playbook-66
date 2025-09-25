import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleContinueWithEmail = () => {
    if (email.trim()) {
      navigate('/verify-email');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 font-inter font-medium leading-6 tracking-[-0.32px] antialiased" style={{ 
      colorScheme: 'light',
      fontFeatureSettings: 'normal',
      fontVariationSettings: 'normal',
    }}>
      <div className="w-full max-w-md">
        {/* Anara Logo */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-medium text-black">Anara</h1>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-medium text-black text-center mb-12">
          Log in or sign up
        </h2>

        {/* Social Login Buttons */}
        <div className="space-y-3 mb-8">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-0 bg-black/5 hover:bg-black/10 rounded-2xl text-sm font-semibold text-neutral-900 transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer select-none h-11 leading-5 tracking-[-0.32px] font-inter mt-3" 
            onClick={() => navigate('/user-purpose')}
            style={{ 
            fontFeatureSettings: 'normal',
            fontVariationSettings: 'normal',
            colorScheme: 'light'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62Z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
              />
            </svg>
            Continue with Google
          </button>

          <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gray-100 hover:bg-gray-200 rounded-xl text-base font-medium text-black transition-colors"
            onClick={() => navigate('/user-purpose')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#f25022" d="M0 0h11.377v11.372H0z" />
              <path fill="#00a4ef" d="M12.623 0H24v11.372H12.623z" />
              <path fill="#ffb900" d="M0 12.628h11.377V24H0z" />
              <path fill="#02af5c" d="M12.623 12.628H24V24H12.623z" />
            </svg>
            Continue with Microsoft
          </button>

          <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gray-100 hover:bg-gray-200 rounded-xl text-base font-medium text-black transition-colors"
            onClick={() => navigate('/user-purpose')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            Continue with Apple
          </button>
        </div>

        {/* Divider */}
        <div className="text-center mb-8">
          <span className="text-gray-500 text-base">or</span>
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-4 border border-gray-300 rounded-xl text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        {/* Continue Button */}
        <Button
          variant="primary"
          size="lg"
          className="w-full py-4 text-base font-medium !rounded-xl mb-8"
          onClick={handleContinueWithEmail}
        >
          Continue with email
        </Button>

        {/* Join Text */}
        <p className="text-center text-gray-600 text-base mb-16">
          Join 10k+ students
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

export default SignUp;