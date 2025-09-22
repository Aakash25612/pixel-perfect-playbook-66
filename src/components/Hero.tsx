import React from 'react';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="pt-[150px] pb-16 px-4">
      <div className="max-w-[1312px] mx-auto text-center">
        <h1 className="text-black text-[53px] font-semibold leading-loose tracking-[-0.96px] max-md:text-[40px]">
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

        <div className="flex justify-center gap-[27px] mt-8 max-md:grid max-md:grid-cols-2 max-md:gap-4">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="w-36 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="w-20 h-16 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 h-[666px] mt-9 rounded-xl flex items-center justify-center max-md:h-[400px]">
          <div className="text-gray-400 text-lg">Product Demo Video</div>
        </div>
      </div>
    </section>
  );
};
