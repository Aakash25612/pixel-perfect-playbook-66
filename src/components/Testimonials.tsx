import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export const Testimonials: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const testimonials = [
    [
      {
        name: "Anne",
        title: "Research Scientist, GSK",
        content: "I love it! It accomplishes in minutes what would take me ages to do manually. What really impresses me is how Anara recognizes themes and patterns I've completely missed. It's particularly good at pointing out important details and research gaps that aren't immediately obvious."
      },
      {
        name: "Paul",
        title: "Research Scientist, Biogen",
        content: "With Anara, I'm able to do in 30 mins what used to take 3 hours. There's nothing else like it."
      },
      {
        name: "Alice",
        title: "Associate, Goldman Sachs",
        content: "Genuinely makes research so much more intuitive. The related documents feature is amazing, and I love how effortless the annotation process is."
      }
    ],
    [
      {
        name: "Filip",
        title: "Data Scientist, Intel",
        content: "I've tried a lot of AI research apps, and Anara is so far ahead in simplicity, quality, and speed!"
      },
      {
        name: "Zeyu",
        title: "Lab Assistant, UC Berkeley",
        content: "I'm using Anara right now for my research into single-cell multiomics frameworks, and it's amazing!"
      },
      {
        name: "Tylar",
        title: "PhD Student, Stanford University",
        content: "As a PhD candidate, Anara is my number one app for annotations, lit reviews and manuscripts."
      },
      {
        name: "Alamin",
        title: "Dermatologist, Mayo Clinic",
        content: "Anara makes diving into research papers so much easier and quicker. A must-try tool."
      }
    ],
    [
      {
        name: "Samantha",
        title: "Neuroscientist, NIH",
        content: "Anara makes life easier for anyone new to the team. It breaks down complex information so effectively that newcomers can contribute and feel included right from the start."
      },
      {
        name: "Michael",
        title: "Physician, Cedars Sinai",
        content: "Interacting with documents on Anara is like speaking to the team who wrote the research paper. It's fantastic."
      },
      {
        name: "Nabila",
        title: "Undergraduate Student, MIT",
        content: "It aided in my research works tremendously…The review writing that would take me several days now it's only a matter of minutes!!! I already recommended it to all my friends struggling with research papers."
      }
    ],
    [
      {
        name: "Zevarn",
        title: "Physician, Kaiser Permanente",
        content: "I love how functional and flexible it is for understanding papers. It provides a unified platform for reading, writing, and referencing, plus the search features help you explore concepts easily. It makes the whole process of working with academic papers so much smoother."
      },
      {
        name: "Elyane",
        title: "Astroparticle Physicist",
        content: "It's so useful to be able to find a little piece of information you know you've already read in a paper but you don't remember where. And it's trustworthy since it show you where it picked it's information, and you can verify afterward."
      },
      {
        name: "Taylor",
        title: "Master's Student, Columbia University",
        content: "Excellent tool to use, especially for understanding and translating research papers. I'm enjoying it. Thank you"
      }
    ]
  ];

  return (
    <section ref={elementRef} className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`font-perfectly-nineties font-[570] text-black text-[41px] leading-none tracking-[-0.96px] text-center mb-14 max-md:text-3xl max-md:mb-10 transition-all duration-600 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          What people are saying
        </h2>

        <div className={`grid md:grid-cols-4 gap-5 max-md:grid-cols-1 transition-all duration-600 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {testimonials.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {column.map((testimonial, index) => (
                <article key={index} className={`border border-neutral-200 rounded-2xl p-[25px] hover-lift transition-all duration-500 group hover:border-neutral-300 hover:shadow-lg animate-bounce-in glass-effect bg-white/70 backdrop-blur-sm`} style={{ animationDelay: `${(columnIndex * column.length + index) * 80}ms` }}>
                  <div className="mb-6">
                    <h3 className="text-neutral-900 font-medium text-base group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400 text-base group-hover:text-gray-500 transition-colors duration-300">
                      {testimonial.title}
                    </p>
                  </div>
                  <p className="text-neutral-900 font-normal text-base tracking-[-0.32px] group-hover:text-neutral-800 transition-colors duration-300">
                    {testimonial.content}
                  </p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
