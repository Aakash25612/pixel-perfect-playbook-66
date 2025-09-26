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
    navigate("/dashboard");
  };

  const handleCopyInviteLink = () => {
    // Copy invite link to clipboard
    const inviteLink = "https://anara.app/invite/abc123";
    navigator.clipboard.writeText(inviteLink);
  };

  return (
    <div
      className="min-h-screen bg-white flex flex-col items-center justify-center px-4 font-inter font-medium leading-6 tracking-[-0.32px] antialiased"
      style={{
        colorScheme: "light",
        fontFeatureSettings: "normal",
        fontVariationSettings: "normal",
      }}
    >
      <div className="fixed top-0 flex flex-row justify-between px-9 py-11 w-full">
        <div>
          <button
            className="flex justify-center items-center w-11 h-11 rounded-4 p-3 ease-in transition-all duration-150 cursor-pointer hover:bg-popover-hover"
            type="button"
            onClick={() => navigate("/user-purpose")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#666666"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-left"
              aria-hidden="true"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full max-w-sm flex flex-col items-stretch px-7 pt-24">
        <div className="bg-background-primary p-9">
          <h2 className="text-2xl text-center leading-[120%] font-semibold mb-4">
            Invite and earn $10 cash for every friend that joins
          </h2>

          {/* Subtitle */}
          <p className="text-text-secondary font-medium text-sm text-center mb-9 leading-[130%]">
            You get $10 cash, they get $10 off
          </p>

          {/* Email Inputs */}
          <div className="space-y-4">
            {emails.map((email, index) => (
              <Input
                key={index}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => handleEmailChange(index, e.target.value)}
                className="flex rounded-4 border-input bg-background-primary px-6 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full h-14 rounded-6 border-2"
              />
            ))}
          </div>

          {/* Add More Invites */}
          <div className="flex items-center justify-center w-full pb-6">
            <button
              onClick={addMoreInvites}
              className="hover:bg-control-primary px-4 py-2 rounded-4 text-text-secondary font-medium text-xs leading-[20px] tracking-[-0.32px] flex items-center justify-center mt-4"
            >
              + Add more invites
            </button>
          </div>

          {/* Install Extension Button */}
          <Button
            variant="primary"
            size="lg"
            className="inline-flex items-center select-none relative justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border bg-background-inverse text-text-inverse px-1.5 py-2 text-sm rounded-4 font-medium gap-3 w-full rounded-6 h-14"
            onClick={handleTakeToAnara}
          >
            Install extension
          </Button>

          {/* Copy Invite Link Button */}
          <Button
            variant="secondary"
            size="lg"
            className="inline-flex items-center select-none relative justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border bg-secondary text-secondary-foreground hover:bg-secondary-hover px-1.5 py-2 text-sm rounded-4 font-medium gap-3 w-full rounded-6 h-14 mt-5"
            onClick={handleCopyInviteLink}
          >
            Copy invite link
          </Button>

          {/* Join Text */}
          <p className="text-center text-sm text-text-primary mt-7">
            Join 100k+ students
          </p>
        </div>
      </div>
      {/* Email Info */}
      <div className="flex flex-col items-center justify-center py-8 text-text-primary w-120 text-center text-sm">
        <span className="mb-2">
          Continuing as{" "}
          <span className="font-semibold">jasara.pauling@inboxorigin.com</span>
        </span>
        <span>
          Log in with another email{" "}
          <a
            href="#"
            className="hover:text-black transition-all duration-150 ease-in underline"
          >
            here
          </a>
        </span>
      </div>
    </div>
  );
};

export default InviteFriends;
