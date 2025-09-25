import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

const UserPurpose: React.FC = () => {
  const [selectedPurpose, setSelectedPurpose] = useState<string>("");
  const navigate = useNavigate();

  const purposes = [
    { id: "work", label: "For work" },
    { id: "studying", label: "For studying" },
    { id: "personal", label: "For personal use" }
  ];

  const handleContinue = () => {
    if (selectedPurpose) {
      navigate('/invite-friends');
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
          onClick={() => navigate('/verify-email')}
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
        <h2 className="text-2xl font-medium text-black text-center mb-12 leading-8">
          How are you planning<br />to use Anara?
        </h2>

        {/* Purpose Options */}
        <div className="space-y-4 mb-8">
          {purposes.map((purpose) => (
            <button
              key={purpose.id}
              onClick={() => setSelectedPurpose(purpose.id)}
              className={`w-full px-6 py-4 rounded-2xl text-base font-medium transition-all duration-200 border ${
                selectedPurpose === purpose.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-300 bg-white text-gray-900 hover:bg-gray-50'
              }`}
            >
              {purpose.label}
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <Button
          variant="primary"
          size="lg"
          className={`w-full py-4 text-base font-medium !rounded-xl mb-8 transition-all duration-200 ${
            selectedPurpose 
              ? 'bg-black text-white hover:bg-gray-800' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300'
          }`}
          onClick={handleContinue}
          disabled={!selectedPurpose}
        >
          Continue
        </Button>

        {/* Join Text */}
        <p className="text-center text-gray-600 text-base mb-8">
          Join 2M+ researchers
        </p>

        {/* Email Info */}
        <div className="text-center text-sm text-gray-600 space-y-1">
          <p>Continuing as <span className="font-medium text-black">aakashgoel2040@gmail.com</span></p>
          <p>
            Log in with another email{" "}
            <button 
              onClick={() => navigate('/signup')}
              className="text-blue-600 underline hover:text-blue-700"
            >
              here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPurpose;