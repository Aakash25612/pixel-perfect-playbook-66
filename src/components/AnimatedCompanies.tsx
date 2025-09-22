import React, { useState, useEffect } from 'react';

interface CompanySet {
  name: string;
  logo: string;
}

export const AnimatedCompanies: React.FC = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [currentLogos, setCurrentLogos] = useState<CompanySet[]>([]);
  const [nextLogos, setNextLogos] = useState<CompanySet[]>([]);
  const [transitioningIndex, setTransitioningIndex] = useState<number | null>(null);
  const [currentPosition, setCurrentPosition] = useState(6); // Start from rightmost (index 6)
  const [nextSetIndex, setNextSetIndex] = useState(1);

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
    setNextLogos([...companySets[1]]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Prepare the next logo before transition
      setNextLogos(prev => {
        const newLogos = [...prev];
        newLogos[currentPosition] = companySets[nextSetIndex][currentPosition];
        return newLogos;
      });

      // Set transitioning state for current position
      setTransitioningIndex(currentPosition);
      
      setTimeout(() => {
        // Update the current logo to the next one
        setCurrentLogos(prev => {
          const newLogos = [...prev];
          newLogos[currentPosition] = companySets[nextSetIndex][currentPosition];
          return newLogos;
        });
        
        // Clear transitioning state
        setTransitioningIndex(null);
        
        // Move to next position (right to left)
        setCurrentPosition(prevPosition => {
          const newPosition = prevPosition - 1;
          
          // If we've changed all logos in the set, prepare for next set
          if (newPosition < 0) {
            setNextSetIndex(prevNextSetIndex => {
              const newNextSetIndex = (prevNextSetIndex + 1) % companySets.length;
              // Update nextLogos to the next set
              setNextLogos([...companySets[newNextSetIndex]]);
              return newNextSetIndex;
            });
            return companySets[0].length - 1; // Reset to rightmost position
          }
          
          return newPosition;
        });
      }, 300); // 300ms transition time
    }, 1000); // Change every 1 second

    return () => clearInterval(interval);
  }, [currentPosition, nextSetIndex]);

  return (
    <div className="flex justify-center gap-[27px] mt-8 max-md:grid max-md:grid-cols-2 max-md:gap-4">
      {currentLogos.map((company, index) => (
        <div
          key={`container-${index}`}
          className="w-36 h-32 bg-gray-50 rounded-lg flex items-center justify-center p-4 relative"
        >
          {/* Current logo */}
          <div className={`absolute inset-4 flex items-center justify-center transition-opacity duration-300 ${
            transitioningIndex === index ? 'opacity-0' : 'opacity-100'
          }`}>
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
          
          {/* Next logo (only visible during transition) */}
          {transitioningIndex === index && nextLogos[index] && (
            <div className="absolute inset-4 flex items-center justify-center transition-opacity duration-300 opacity-100">
              <img
                src={nextLogos[index].logo}
                alt={`${nextLogos[index].name} logo`}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const textElement = document.createElement('div');
                    textElement.className = 'text-gray-600 text-sm font-medium text-center';
                    textElement.textContent = nextLogos[index].name;
                    parent.appendChild(textElement);
                  }
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};