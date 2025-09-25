import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const InviteFriends: React.FC = () => {
  const [emails, setEmails] = useState<string[]>(["", "", ""]);
  const navigate = useNavigate();

  const handleEmailChange = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const addMoreInvites = () => {
    setEmails([...emails, ""]);
  };

  const handleTakeToAnara = () => {
    // Navigate to main app/dashboard
    console.log("Taking to Anara with emails:", emails.filter(email => email.trim()));
  };

  const handleCopyInviteLink = () => {
    // Copy invite link to clipboard
    const inviteLink = "https://anara.app/invite/abc123";
    navigator.clipboard.writeText(inviteLink);
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
          onClick={() => navigate('/user-purpose')}
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
        <h2 className="text-2xl font-medium text-black text-center mb-3 leading-8">
          Invite and earn $10 cash<br />for every friend that joins
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-600 text-base mb-8">
          You get $10 cash, they get $10 off
        </p>

        {/* Email Inputs */}
        <div className="space-y-3 mb-4">
          {emails.map((email, index) => (
            <Input
              key={index}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => handleEmailChange(index, e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-base font-normal focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          ))}
        </div>

        {/* Add More Invites */}
        <button
          onClick={addMoreInvites}
          className="text-gray-600 text-base mb-8 hover:text-gray-800 transition-colors"
        >
          + Add more invites
        </button>

        {/* Install Extension Button */}
        <Button
          variant="primary"
          size="lg"
          className="w-full py-4 text-base font-medium bg-black text-white hover:bg-gray-800 !rounded-xl mb-3"
          onClick={handleTakeToAnara}
        >
          Install extension
        </Button>

        {/* Copy Invite Link Button */}
        <Button
          variant="secondary"
          size="lg"
          className="w-full py-4 text-base font-medium bg-gray-100 text-gray-900 hover:bg-gray-200 !rounded-xl mb-8"
          onClick={handleCopyInviteLink}
        >
          Copy invite link
        </Button>

        {/* Join Text */}
        <p className="text-center text-gray-600 text-base mb-8">
          Join 10k+ students
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

export default InviteFriends;