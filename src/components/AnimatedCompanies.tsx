import React, { useState, useEffect } from 'react';

interface CompanySet {
  name: string;
  logo: string;
}

export const AnimatedCompanies: React.FC = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const companySets: CompanySet[][] = [
    [
      { name: 'Amazon', logo: '/assets/logos/amazon.png' },
      { name: 'Biogen', logo: '/assets/logos/biogen.svg' },
      { name: 'Reckitt', logo: '/assets/logos/reckitt.svg' },
      { name: 'Goldman Sachs', logo: '/assets/logos/goldman-sachs.svg' },
      { name: 'University of Cambridge', logo: '/assets/logos/cambridge.svg' },
      { name: 'NVIDIA', logo: '/assets/logos/nvidia.svg' },
      { name: 'MIT', logo: '/assets/logos/mit.svg' }
    ],
    [
      { name: 'Caltech', logo: '/assets/logos/caltech.svg' },
      { name: 'Roche', logo: '/assets/logos/roche.svg' },
      { name: 'Meta', logo: '/assets/logos/meta.svg' },
      { name: 'Kaiser Permanente', logo: '/assets/logos/kaiser-permanente.svg' },
      { name: 'PWC', logo: '/assets/logos/pwc.svg' },
      { name: 'GSK', logo: '/assets/logos/gsk.svg' },
      { name: 'Stanford', logo: '/assets/logos/stanford.svg' }
    ]
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentSet((prev) => (prev + 1) % companySets.length);
        setIsTransitioning(false);
      }, 250);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-[27px] mt-8 max-md:grid max-md:grid-cols-2 max-md:gap-4">
      {companySets[currentSet].map((company, index) => (
        <div
          key={`${currentSet}-${index}`}
          className={`w-36 h-32 bg-gray-50 rounded-lg flex items-center justify-center p-4 transition-all duration-500 ${
            isTransitioning 
              ? 'opacity-0 transform scale-95' 
              : 'opacity-100 transform scale-100 animate-fade-in'
          }`}
          style={{
            animationDelay: `${index * 100}ms`
          }}
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