import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const UserPurpose: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSchool, setSelectedSchool] = useState<string>("");
  const [filteredSchools, setFilteredSchools] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const navigate = useNavigate();

  const schools = [
    "Harvard University", 
    "Stanford University", 
    "Massachusetts Institute of Technology (MIT)",
    "University of California, Berkeley",
    "Yale University",
    "Princeton University",
    "Columbia University",
    "University of Chicago",
    "University of Pennsylvania",
    "California Institute of Technology (Caltech)",
    "Duke University",
    "Johns Hopkins University",
    "Northwestern University",
    "Dartmouth College",
    "Brown University",
    "Cornell University",
    "Rice University",
    "University of Notre Dame",
    "Vanderbilt University",
    "Washington University in St. Louis",
    "Emory University",
    "Georgetown University",
    "Carnegie Mellon University",
    "University of Southern California",
    "University of California, Los Angeles (UCLA)",
    "Tufts University",
    "Wake Forest University",
    "University of Michigan",
    "Boston College",
    "New York University"
  ];

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = schools.filter(school => 
        school.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSchools(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setFilteredSchools([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleSchoolSelect = (school: string) => {
    setSelectedSchool(school);
    setSearchQuery(school);
    setShowSuggestions(false);
  };

  const handleContinue = () => {
    if (selectedSchool) {
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
        <h2 className="text-2xl font-medium text-black text-center mb-3 leading-8">
          What school do you go to?
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-600 text-base mb-12">
          Start typing to search. Pick your school to save it.
        </p>

        {/* School Search */}
        <div className="relative mb-8">
          <Input
            type="text"
            placeholder="Find your institution"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery && setShowSuggestions(true)}
            className="w-full px-6 py-4 rounded-3xl border border-gray-300 text-base font-normal bg-gray-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white"
          />
          
          {/* Suggestions Dropdown */}
          {showSuggestions && filteredSchools.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg z-10 max-h-60 overflow-y-auto">
              {filteredSchools.map((school, index) => (
                <button
                  key={index}
                  onClick={() => handleSchoolSelect(school)}
                  className="w-full px-6 py-3 text-left text-base font-normal text-gray-900 hover:bg-gray-50 first:rounded-t-2xl last:rounded-b-2xl transition-colors"
                >
                  {school}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Continue Button */}
        <Button
          variant="primary"
          size="lg"
          className={`w-full py-4 text-base font-medium !rounded-xl mb-8 transition-all duration-200 ${
            selectedSchool 
              ? 'bg-black text-white hover:bg-gray-800' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300'
          }`}
          onClick={handleContinue}
          disabled={!selectedSchool}
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