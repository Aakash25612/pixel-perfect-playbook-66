import React from 'react';
import { Button } from '@/components/ui/Button';
import { AnimatedCompanies } from './AnimatedCompanies';
import { useEntranceAnimation } from '@/hooks/useEntranceAnimation';

export const Hero: React.FC = () => {
  const isVisible = useEntranceAnimation();

  return (
    <section className="pt-[150px] pb-16 w-full">
      <div className="w-full text-center">
        <h1 className={`font-perfectly-nineties font-[570] text-balance leading-[80px] text-[72px] max-w-[820px] tracking-[-0.96px] text-black mx-auto transition-all duration-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`}>
          AI workspace for scientists,{" "}
          <br />
          students, and research teams
        </h1>
        
        <p className={`font-inter text-secondary-foreground text-base font-medium tracking-[-0.4px] mt-7 max-w-[750px] mx-auto text-center leading-6 font-[500] transition-all duration-600 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Search for papers, extract key passages, organize research
          <br />
          and create flashcards — all without sacrificing academic rigor
        </p>

        <div className={`flex justify-center gap-3.5 mt-9 max-md:flex-col max-md:items-center transition-all duration-700 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'
        }`}>
          <Button variant="primary" className="w-[143px]">
            Get Anara free
          </Button>
          <Button variant="secondary" className="w-[142px]">
            Request demo
          </Button>
        </div>

        <p className={`text-gray-500 text-sm font-medium leading-none tracking-[-0.4px] mt-[55px] max-md:mt-10 transition-all duration-600 ease-out delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Trusted by 2,000,000+ researchers and students
        </p>

        <div className={`transition-all duration-600 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <AnimatedCompanies />
        </div>

        <div className={`bg-gradient-to-br from-gray-100 to-gray-200 h-[666px] mt-9 rounded-2xl flex items-center justify-center max-md:h-[400px] transition-all duration-800 ease-out delay-700 hover-lift glass-effect border border-white/50 shadow-2xl overflow-hidden group ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`}>
          <div className="text-gray-400 text-lg animate-pulse-glow group-hover:text-gray-500 transition-colors duration-300">
            <div className="animate-spin-slow w-16 h-16 border-4 border-gray-300 border-t-primary rounded-full mb-4 mx-auto"></div>
            Product Demo Video
          </div>
        </div>
      </div>
    </section>
  );
};
