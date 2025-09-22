import React, { useState, useEffect } from 'react';

interface Company {
  name: string;
  logo: string;
}

export const AnimatedCompanies: React.FC = () => {
  // All available companies in a single pool
  const allCompanies: Company[] = [
    { name: 'Amazon', logo: '/logos/amazon.png' },
    { name: 'Caltech', logo: '/logos/caltech.png' },
    { name: 'Kaiser Permanente', logo: '/logos/kaiser-permanente.png' },
    { name: 'Meta', logo: '/logos/meta.png' },
    { name: 'Stanford', logo: '/logos/stanford.png' },
    { name: 'Reckitt', logo: 'https://logo.clearbit.com/reckitt.com' },
    { name: 'Biogen', logo: '/logos/biogen.png' },
    { name: 'NVIDIA', logo: '/logos/nvidia.png' },
    { name: 'University of Cambridge', logo: '/logos/cambridge.png' },
    { name: 'PWC', logo: 'https://logo.clearbit.com/pwc.com' },
    { name: 'Goldman Sachs', logo: '/logos/goldman-sachs.png' },
    { name: 'MIT', logo: '/logos/mit.png' },
    { name: 'GSK', logo: '/logos/gsk.png' },
    { name: 'Roche', logo: 'https://logo.clearbit.com/roche.com' }
  ];

  // Track which company is displayed at each position (7 positions)
  const [displayedCompanies, setDisplayedCompanies] = useState<Company[]>(() => 
    allCompanies.slice(0, 7)
  );
  
  // Track which position is currently transitioning
  const [transitioningIndex, setTransitioningIndex] = useState<number | null>(null);
  
  // Track the next company index to use
  const [nextCompanyIndex, setNextCompanyIndex] = useState(7);

  useEffect(() => {
    let currentPosition = 6; // Start from rightmost position (index 6)
    
    const interval = setInterval(() => {
      // Start transition for current position
      setTransitioningIndex(currentPosition);
      
      // After 250ms, change the company at this position
      setTimeout(() => {
        setDisplayedCompanies(prev => {
          const newCompanies = [...prev];
          newCompanies[currentPosition] = allCompanies[nextCompanyIndex % allCompanies.length];
          return newCompanies;
        });
        
        setNextCompanyIndex(prev => prev + 1);
        setTransitioningIndex(null);
      }, 250);
      
      // Move to next position (right to left, then cycle back)
      currentPosition = currentPosition === 0 ? 6 : currentPosition - 1;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-[27px] mt-8 max-md:grid max-md:grid-cols-2 max-md:gap-4">
      {displayedCompanies.map((company, index) => (
        <div
          key={`${company.name}-${index}`}
          className={`w-36 h-32 bg-gray-50 rounded-lg flex items-center justify-center p-4 transition-all duration-500 ${
            transitioningIndex === index
              ? 'opacity-0 transform scale-95' 
              : 'opacity-100 transform scale-100'
          }`}
        >
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                const textElement = document.createElement('div');
                textElement.className = 'text-gray-600 text-sm font-medium text-center';
                textElement.textContent = company.name;
                parent.appendChild(textElement);
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};