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