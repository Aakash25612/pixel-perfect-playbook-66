import React from "react";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/textarea";
const Dashboard: React.FC = () => {
  return <div className="min-h-screen bg-white flex font-inter antialiased">
      {/* Sidebar */}
      <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
        {/* User Dropdown */}
        <div className="p-4 border-b border-gray-200">
          <button className="flex items-center space-x-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md px-2 py-1 w-full">
            <span>Aakash</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <div className="p-4 space-y-1">
          <button className="flex items-center space-x-3 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md px-3 py-2 w-full">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Home</span>
          </button>
          <button className="flex items-center space-x-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md px-3 py-2 w-full">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span>Library</span>
          </button>
          <button className="flex items-center space-x-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md px-3 py-2 w-full">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search</span>
          </button>
        </div>

        {/* Chats Section */}
        <div className="px-4 py-2">
          <button className="flex items-center space-x-2 text-xs font-medium text-gray-500 hover:text-gray-700 w-full">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <span>Chats</span>
          </button>
          <p className="text-xs text-gray-500 mt-2 px-5">No chats available</p>
        </div>

        {/* Folders Section */}
        <div className="px-4 py-2">
          <button className="flex items-center space-x-2 text-xs font-medium text-gray-500 hover:text-gray-700 w-full">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <span>Folders</span>
          </button>
          <button className="flex items-center space-x-2 text-xs text-gray-600 hover:bg-gray-100 rounded-md px-2 py-1 w-full mt-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span>Age reversal research</span>
          </button>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto p-4 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Plan usage</span>
              <span className="text-blue-600">Free</span>
            </div>
            <div className="flex justify-between text-xs text-gray-600">
              <span>AI words/day</span>
              <span>0/1000</span>
            </div>
            <div className="flex justify-between text-xs text-gray-600">
              <span>Imports/day</span>
              <span>0/5</span>
            </div>
            <Button className="w-full bg-black text-white hover:bg-gray-800 text-xs py-2 !rounded-lg">
              Get unlimited
            </Button>
          </div>

          <div className="space-y-1">
            <button className="flex items-center space-x-3 text-xs text-gray-600 hover:bg-gray-100 rounded-md px-2 py-1 w-full">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              <span>Invite and earn</span>
            </button>
            <button className="flex items-center space-x-3 text-xs text-gray-600 hover:bg-gray-100 rounded-md px-2 py-1 w-full">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8m10 0H7" />
              </svg>
              <span>Feedback</span>
            </button>
            <button className="flex items-center space-x-3 text-xs text-gray-600 hover:bg-gray-100 rounded-md px-2 py-1 w-full">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Support</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          <Button className="bg-black text-white hover:bg-gray-800 text-sm px-4 py-2 !rounded-lg">
            Upgrade
          </Button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="max-w-4xl w-full text-center space-y-8">
            {/* Main Heading */}
            <h1 className="text-2xl font-medium text-gray-900 mb-8">
              Understand, research and write about anything
            </h1>

            {/* GPT-Style Chat Input */}
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative border-2 border-gray-200 rounded-2xl bg-white shadow-sm">
                {/* Action Buttons Inside Input */}
                <div className="flex items-center justify-start space-x-2 p-3 pb-2">
                  <Button className="bg-blue-100 text-blue-600 hover:bg-blue-200 text-xs px-3 py-1.5 !rounded-full">
                    @ Mention
                  </Button>
                  <Button className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs px-3 py-1.5 !rounded-full flex items-center space-x-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3" />
                      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <span>GPT OSS</span>
                    <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Button>
                  <Button className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs px-3 py-1.5 !rounded-full flex items-center space-x-1">
                    <span>250 words</span>
                    <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Button>
                  <Button className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs px-2 py-1.5 !rounded-full">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </Button>
                  <Button className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs px-2 py-1.5 !rounded-full">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </Button>
                  <Button className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs px-2 py-1.5 !rounded-full">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8m10 0H7" />
                    </svg>
                  </Button>
                </div>
                
                {/* Text Input Area */}
                <div className="relative px-3 pb-3">
                  <Textarea
                    placeholder="Understand, research and write about anything"
                    className="min-h-[60px] w-full resize-none border-0 bg-transparent px-2 py-2 text-base placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-0"
                    rows={2}
                  />
                  <div className="absolute bottom-5 right-5">
                    <Button className="bg-black text-white hover:bg-gray-800 text-sm px-4 py-2 !rounded-lg">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;