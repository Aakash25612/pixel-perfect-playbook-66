import React, { useState, useEffect } from 'react';

interface CompanySet {
  name: string;
  logo: string;
}

export const AnimatedCompanies: React.FC = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [currentLogos, setCurrentLogos] = useState<CompanySet[]>([]);
  const [transitioningIndex, setTransitioningIndex] = useState<number | null>(null);

  const companySets: CompanySet[][] = [
    [
      { name: 'Amazon', logo: '/logos/amazon.png' },
      { name: 'Caltech', logo: '/logos/caltech.png' },
      { name: 'Kaiser Permanente', logo: '/logos/kaiser-permanente.png' },
      { name: 'Meta', logo: '/logos/meta.png' },
      { name: 'Stanford', logo: '/logos/stanford.png' },
      { name: 'Reckitt', logo: 'https://logo.clearbit.com/reckitt.com' },
      { name: 'Biogen', logo: '/logos/biogen.png' }
    ],
    [
      { name: 'NVIDIA', logo: '/logos/nvidia.png' },
      { name: 'University of Cambridge', logo: '/logos/cambridge.png' },
      { name: 'PWC', logo: 'https://logo.clearbit.com/pwc.com' },
      { name: 'Goldman Sachs', logo: '/logos/goldman-sachs.png' },
      { name: 'MIT', logo: '/logos/mit.png' },
      { name: 'GSK', logo: '/logos/gsk.png' },
      { name: 'Roche', logo: 'https://logo.clearbit.com/roche.com' }
    ]
  ];

  // Initialize with first set
  useEffect(() => {
    setCurrentLogos([...companySets[0]]);
  }, []);

  useEffect(() => {
    let currentPosition = companySets[0].length - 1; // Start from rightmost (index 6)
    let nextSetIndex = 1;

    const interval = setInterval(() => {
      // Set transitioning state for current position
      setTransitioningIndex(currentPosition);
      
      setTimeout(() => {
        // Update the logo at current position
        setCurrentLogos(prev => {
          const newLogos = [...prev];
          newLogos[currentPosition] = companySets[nextSetIndex][currentPosition];
          return newLogos;
        });
        
        // Clear transitioning state
        setTransitioningIndex(null);
        
        // Move to next position (right to left)
        currentPosition--;
        
        // If we've changed all logos in the set, prepare for next set
        if (currentPosition < 0) {
          currentPosition = companySets[0].length - 1;
          nextSetIndex = (nextSetIndex + 1) % companySets.length;
        }
      }, 250); // 250ms transition time
    }, 1000); // Change every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-[27px] mt-8 max-md:grid max-md:grid-cols-2 max-md:gap-4">
      {currentLogos.map((company, index) => (
        <div
          key={`${company.name}-${index}`}
          className={`w-36 h-32 bg-gray-50 rounded-lg flex items-center justify-center p-4 transition-all duration-500 ${
            transitioningIndex === index
              ? 'opacity-0 transform scale-95' 
              : 'opacity-100 transform scale-100 animate-fade-in'
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