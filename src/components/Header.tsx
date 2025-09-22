import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm z-50 fixed top-0 left-0 right-0 w-full">
      <div className="flex w-full max-w-[1425px] mx-auto items-start text-sm font-medium tracking-[-0.32px] leading-none px-[70px] max-md:px-5">
        <div className="flex w-full max-w-[1158px] mx-auto items-start gap-5 justify-between">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c622229a382a8d0a5434c0749f005d4cfcbe9597?placeholderIfAbsent=true"
            alt="Anara Logo"
            className="aspect-[0.46] object-top object-contain w-12 h-6 shrink-0"
          />
          
          <nav className="hidden md:flex items-stretch gap-[22px] text-black">
            <div className="flex items-stretch gap-1 cursor-pointer hover:text-gray-600">
              <span>Use cases</span>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f348dc727c3979694787182f662d34a569797f72?placeholderIfAbsent=true"
                alt=""
                className="aspect-[1] object-contain w-3 mt-1.5"
              />
            </div>
            <div className="flex items-stretch gap-1 whitespace-nowrap cursor-pointer hover:text-gray-600">
              <span>Resources</span>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ca0daba315d34fc440222bf56c0ab68a3abb9023?placeholderIfAbsent=true"
                alt=""
                className="aspect-[1] object-contain w-3 mt-1.5"
              />
            </div>
            <div className="flex items-stretch gap-[21px] text-neutral-900">
              <a href="#pricing" className="hover:text-gray-600">Pricing</a>
              <a href="#careers" className="hover:text-gray-600">Careers</a>
              <a href="#contact" className="hover:text-gray-600">Contact sales</a>
            </div>
          </nav>

          <div className="flex gap-2.5">
            <Button variant="secondary" size="sm" className="w-[63px]">
              Log in
            </Button>
            <Button variant="primary" size="sm" className="w-[117px]">
              Get Anara free
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <span className="block w-full h-0.5 bg-black mb-1"></span>
              <span className="block w-full h-0.5 bg-black mb-1"></span>
              <span className="block w-full h-0.5 bg-black"></span>
            </div>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-5 py-4">
          <nav className="flex flex-col gap-4">
            <a href="#use-cases" className="text-black hover:text-gray-600">Use cases</a>
            <a href="#resources" className="text-black hover:text-gray-600">Resources</a>
            <a href="#pricing" className="text-black hover:text-gray-600">Pricing</a>
            <a href="#careers" className="text-black hover:text-gray-600">Careers</a>
            <a href="#contact" className="text-black hover:text-gray-600">Contact sales</a>
          </nav>
        </div>
      )}
    </header>
  );
};
