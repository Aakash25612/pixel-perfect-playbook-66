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
    <div
      className="min-h-screen bg-white flex flex-col items-center justify-center px-4 font-inter font-medium leading-6 tracking-[-0.32px] antialiased"
      style={{
        colorScheme: "light",
        fontFeatureSettings: "normal",
        fontVariationSettings: "normal",
      }}
    >
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col h-full items-center justify-center">
          <div className="fixed top-0 flex flex-row justify-between px-9 py-11 w-full">
            <div>
              <button
                className="flex justify-center items-center w-11 h-11 rounded-4 p-3 ease-in transition-all duration-150 cursor-pointer hover:bg-popover-hover"
                type="button"
                onClick={() => navigate("/signup")}
                aria-label="Go back"
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

          <div className="w-80 flex flex-col items-stretch">
            {/* Title */}

            <div className="px-9">
              <h2 className="text-xl text-center mb-3">
                <span
                  style={{
                    display: "inline-block",
                    verticalAlign: "top",
                    textDecoration: "inherit",
                    textWrap: "balance",
                  }}
                >
                  Log in or sign up
                </span>
              </h2>

              <p className="text-sm text-text-secondary text-center mb-8 leading-6">
                <span
                  style={{
                    display: "inline-block",
                    verticalAlign: "top",
                    textDecoration: "inherit",
                    textWrap: "balance",
                    maxWidth: "255px",
                  }}
                >
                  We sent a temporary log in code. Check your inbox at{" "}
                  <strong>yobapi7533@hiepth.com</strong>
                </span>
              </p>
            </div>

            {/* Code Input Fields */}
            <div className="flex justify-center mb-6">
              <div className="flex  rounded-lg ">
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
                    className={`relative flex h-15 w-[3.3rem] items-center justify-center border-y-2 border-r-2 text-base transition-all first:rounded-l-lg first:border-l-2 last:rounded-r-lg border-border-primary2 text-center ${
                      index < 5 ? "border-r border-gray-300" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="px-9">
              {/* Continue Button */}
              <Button
                variant="primary"
                size="lg"
                className="inline-flex items-center select-none relative font-semibold justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border bg-background-inverse text-text-inverse h-14 px-7 rounded-7 gap-5 hover:scale-[1.02] transition-all w-full mb-6"
                onClick={() => navigate("/user-purpose")}
              >
                Continue
              </Button>

              {/* Email Client Buttons */}
              {/* <div className="flex gap-4 justify-center mb-6">
                <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-medium text-black transition-colors">
                  Open Gmail
                </button>
                <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-medium text-black transition-colors">
                  Open Outlook
                </button>
              </div> */}

              <div className="flex flex-row justify-stretch gap-4">
                <div className="w-1/2">
                  <button
                    aria-busy="false"
                    className="inline-flex items-center select-none relative font-semibold justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border bg-secondary text-secondary-foreground hover:bg-secondary-hover h-14 px-7 rounded-7 gap-5 w-full hover:scale-[1.02] transition-all"
                    type="button"
                  >
                    <span className="truncate">Open Gmail</span>
                  </button>
                </div>
                <div className="w-1/2">
                  <button
                    aria-busy="false"
                    className="inline-flex items-center select-none relative font-semibold justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border bg-secondary text-secondary-foreground hover:bg-secondary-hover h-14 px-7 rounded-7 gap-5 w-full hover:scale-[1.02] transition-all"
                    type="button"
                  >
                    <span className="truncate">Open Outlook</span>
                  </button>
                </div>
              </div>

              {/* Join Text */}
              <p className="text-sm text-text-primary mt-9 text-center">
                Join 100k+ students
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center py-8 text-text-secondary3 w-64 text-center fixed bottom-0">
            <span className="text-sm text-text-tertiary">
              By continuing, you agree to Anara’s{" "}
              <a
                href="https://anara.com/docs/legal/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-all duration-150 ease-in underline"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="https://anara.com/docs/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-all duration-150 ease-in underline"
              >
                Privacy Policy
              </a>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
