import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is Anara free to try?",
      answer: "Yes, Anara offers a free trial so you can explore all features before committing to a subscription."
    },
    {
      question: "Will this affect my ability to conduct independent research?",
      answer: "Not at all. Anara is designed to enhance your research capabilities while maintaining academic rigor and independence."
    },
    {
      question: "How can I verify the accuracy of AI-generated responses?",
      answer: "Every response includes direct links to original sources, allowing you to verify information with a single click."
    },
    {
      question: "How secure is my data with Anara?",
      answer: "We take data security seriously with enterprise-grade encryption and compliance with major security standards."
    },
    {
      question: "What file types does Anara support?",
      answer: "Anara supports PDFs, Word documents, PowerPoint presentations, and various other academic file formats."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-36 max-md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-[180px] max-md:gap-16">
          <div>
            <h2 className="font-perfectly-nineties font-[550] text-black text-[48px] leading-[50px] tracking-[-0.32px] mb-14 max-w-[388px] w-[388px] max-md:text-3xl">
              Frequently Asked<br />Questions
            </h2>
          </div>

          <div className="max-w-[600px]">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  className="group flex items-center text-start w-full gap-4 px-6 font-medium transition-all rounded-4 justify-between text-lg py-0 leading-[22px]"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center gap-3">
                    <Plus className={`h-7 w-7 shrink-0 transition-transform duration-200 ${openIndex === index ? 'hidden' : ''}`} />
                    <Minus className={`h-7 w-7 shrink-0 transition-transform duration-200 ${openIndex === index ? '' : 'hidden'}`} />
                    {faq.question}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="pb-8 pl-6">
                    <p className="text-gray-600 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}

            <div className="mt-14 max-md:mt-10">
              <a
                href="#more-faqs"
                className="flex items-center gap-1 text-base font-semibold tracking-[-0.25px] leading-none px-5 py-[15px] rounded-xl hover:bg-gray-50 transition-colors"
              >
                <span>More FAQs</span>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/069483645e3123612a5e55b058d381b05f14be5b?placeholderIfAbsent=true"
                  alt=""
                  className="w-4 h-4"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
