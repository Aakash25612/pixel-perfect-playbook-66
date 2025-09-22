import React from 'react';
import { Button } from '@/components/ui/Button';

export const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Resources",
      links: ["User guide", "Changelog", "Join Discord", "Blog", "FAQs"]
    },
    {
      title: "Company",
      links: ["Careers", "Support", "Contact", "Press kit", "Affiliates"]
    },
    {
      title: "Products",
      links: ["Web application", "Chrome extension", "PDF viewer"]
    },
    {
      title: "Legal",
      links: ["Terms", "DPA", "Privacy", "Subprocessors", "Trust center", "Cookies"]
    },
    {
      title: "Socials",
      links: ["X (Twitter)", "Instagram", "TikTok", "LinkedIn"]
    }
  ];

  return (
    <footer className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* CTA Section */}
        <section className="text-center py-24 max-md:py-16">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/54e2aed4d8ac903922f9ec45fc8fc129f704b2fc?placeholderIfAbsent=true"
            alt="Anara Icon"
            className="w-10 h-10 mx-auto mb-2.5"
          />
          <h2 className="font-perfectly-nineties font-[570] text-black text-[54px] leading-none tracking-[-0.96px] mb-4 max-md:text-[40px]">
            Where people and AI do research work together
          </h2>
          <p className="text-neutral-900 text-base font-medium tracking-[-0.4px] mb-9 max-w-2xl mx-auto">
            Anara helps you find, understand, organize and produce scientific documents with AI. Take it for a spin today. No card required.
          </p>
          
          <div className="flex justify-center gap-3.5 mb-14 max-md:flex-col max-md:items-center">
            <Button variant="primary" size="lg" className="w-[143px]">
              Get Anara free
            </Button>
            <Button variant="secondary" size="lg" className="w-[142px]">
              Request demo
            </Button>
          </div>

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/4d38a068ebd3cca84550b189bff99de961d04aac?placeholderIfAbsent=true"
            alt="Product Screenshot"
            className="aspect-[2.43] object-contain w-full rounded-2xl"
          />
        </section>

        {/* Footer Links */}
        <div className="py-16">
          <div className="grid md:grid-cols-6 gap-8 mb-8">
            <div className="md:col-span-1">
              <div className="mb-3">
                <div className="flex items-center gap-2 text-lg leading-none mb-1">
                  <span className="text-black font-semibold">Anara</span>
                  <span className="text-gray-600 font-normal">— AI for</span>
                </div>
                <div className="text-gray-600 font-normal">scientific advancement</div>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-600 font-medium bg-gray-50 px-3 py-1.5 rounded-full w-fit">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1fb416fb5be4bfac8c6729dcbd55f59f2593e6b7?placeholderIfAbsent=true"
                  alt="Y Combinator"
                  className="w-[18px] h-[18px]"
                />
                <span>Backed by Y Combinator</span>
              </div>
            </div>

            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-black font-semibold text-base leading-none mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-600 font-medium text-base leading-none hover:text-black transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <hr className="border-gray-200 mb-6" />

          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <div className="flex gap-2 mb-3">
                {["GDPR", "SOC 2", "ISO27001"].map((cert) => (
                  <span
                    key={cert}
                    className="bg-black/5 text-gray-600 font-medium text-sm px-1 py-1 rounded-lg"
                  >
                    {cert}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 font-normal text-sm">
                Sub-processors include Stripe, Vercel and AWS.
              </p>
            </div>
            <p className="text-gray-400 text-base font-medium">
              © 2025 Anara Labs, Inc
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
