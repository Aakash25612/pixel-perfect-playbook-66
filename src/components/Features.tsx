import React from 'react';

export const Features: React.FC = () => {
  const features = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b155b43a7569a17b97cd1de4dfc0891693164460?placeholderIfAbsent=true",
      title: "Get answers you can trust",
      description: "Every insight links to original sources so you can verify information with a single click"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/92762232d271445717f7e2a40eb913ca5b4917b5?placeholderIfAbsent=true",
      title: "Responds using your files",
      description: "Eliminate hallucinations by limiting responses to your uploaded files"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/5fb8b04e0e203cab86c7825848555eda0ca32cfc?placeholderIfAbsent=true",
      title: "Find citations automatically",
      description: "Anara searches for relevant papers and books based on your writing"
    }
  ];

  const workflowFeatures = [
    {
      title: <>Understand any file or<br />group of files, instantly</>,
      altText: "Understand any file or group of files, instantly",
      description: <>Whether it's a dense 200-page textbook, a new clinical study, or a<br />technical research paper, just upload it and start asking questions</>,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/448af277074f66a5f2a680fed3cacd8ffcbdb971?placeholderIfAbsent=true"
    },
    {
      title: <>Get concise, scholarly<br />answers to any question</>,
      altText: "Get concise, scholarly answers to any question",
      description: <>When you ask a question, Anara searches major academic databases<br />like PubMed, arXiv and JSTOR to deliver a comprehensive response</>,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/065eb60eac00bb375691563fd74ca26e89d272d5?placeholderIfAbsent=true"
    },
    {
      title: <>Generate flashcards and<br />multiple choice questions</>,
      altText: "Generate flashcards and multiple choice questions",
      description: <>Upload lecture slides, textbooks, or videos, and Anara will create<br />flashcards and practice quizzes tailored to your specific materials</>,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d17249b7f45f154dddeb37defddb0ec9281f21d9?placeholderIfAbsent=true"
    },
    {
      title: <>Build a single, searchable<br />library for all your projects</>,
      altText: "Build a single, searchable library for all your projects",
      description: <>Whether working solo or collaborating with a team, Anara<br />provides one organized place for all your scholarly work</>,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/069088bed1bf853b7a711b661f378f13bf7659b1?placeholderIfAbsent=true"
    }
  ];

  const stats = [
    { label: "Files analyzed", value: "14M" },
    { label: "Citations generated", value: "530K" },
    { label: "Answers generated", value: "27M" },
    { label: "Hours saved per paper", value: "20H" }
  ];

  return (
    <div className="py-16">
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="font-perfectly-nineties font-[550] text-black text-[56px] leading-[50px] tracking-[-0.32px] text-center pb-4 max-md:text-3xl max-md:mb-10">
          Built specifically for academic workflows
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {features.map((feature, index) => (
            <article key={index} className="text-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="aspect-[1.56] object-contain w-full rounded-xl mb-8"
              />
              <h3 className="text-neutral-900 text-lg leading-none mb-1.5">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm font-medium tracking-[-0.32px] leading-none">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        {workflowFeatures.map((feature, index) => (
          <section key={index} className="mb-[276px] max-md:mb-20">
            <div className="text-center mb-14 max-md:mb-10">
              <h2 className="font-perfectly-nineties font-[550] text-black text-[56px] leading-[60px] tracking-[-0.32px] max-w-[672px] pb-4 mx-auto max-md:text-3xl">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-base font-medium max-w-[672px] mx-auto leading-6 text-center">
                {feature.description}
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-14 max-md:p-5">
              <img
                src={feature.image}
                alt={feature.altText}
                className="aspect-[1.8] object-contain w-full rounded-[20px_20px_0px_0px]"
              />
            </div>
          </section>
        ))}

        <section className="text-center mb-32">
          <h2 className="font-perfectly-nineties font-[570] text-black text-[41px] leading-none tracking-[-0.96px] mb-14 max-md:text-3xl max-md:mb-10">
            Trusted by millions
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-100 p-8 rounded-2xl text-left">
                <div className="text-base font-normal leading-none text-gray-600 mb-4">
                  {stat.label}
                </div>
                <div className="text-[38px] font-medium leading-loose text-gray-600">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};
