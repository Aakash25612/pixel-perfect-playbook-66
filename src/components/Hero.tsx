import React from 'react';
import { Button } from '@/components/ui/Button';
import { AnimatedCompanies } from './AnimatedCompanies';

export const Hero: React.FC = () => {
  return (
    <section className="pt-[150px] pb-16 px-4">
      <div className="max-w-[1312px] mx-auto text-center">
        <h1 className="font-perfectly-nineties font-[400] text-balance text-center mx-[174px] leading-[80px] text-[72px] max-w-[820px] tracking-[-0.96px] text-black m-0">
          AI workspace for scientists,{" "}
          <br />
          students, and research teams
        </h1>
        
        <p className="text-neutral-900 text-base font-medium tracking-[-0.4px] mt-[17px] max-w-2xl mx-auto">
          Search for papers, extract key passages, organize research{" "}
          and create flashcards — all without sacrificing academic rigor
        </p>

        <div className="flex justify-center gap-3.5 mt-9 max-md:flex-col max-md:items-center">
          <Button variant="primary" className="w-[143px]">
            Get Anara free
          </Button>
          <Button variant="secondary" className="w-[142px]">
            Request demo
          </Button>
        </div>

        <p className="text-gray-500 text-sm font-medium leading-none tracking-[-0.4px] mt-[55px] max-md:mt-10">
          Trusted by 2,000,000+ researchers and students
        </p>

        <AnimatedCompanies />

        <div className="bg-gray-100 h-[666px] mt-9 rounded-xl flex items-center justify-center max-md:h-[400px]">
          <div className="text-gray-400 text-lg">Product Demo Video</div>
        </div>
      </div>
    </section>
  );
};
