import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 dark:text-white">
          Let me introduce myself
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p className="leading-relaxed">
            I fell in love with programming and I have at least learnt something, 
            I think… 🤷‍♂️
          </p>
          <p className="leading-relaxed">
            I am fluent in classics like Java, Javascript and C++;
          </p>
          <p className="leading-relaxed">
            My field of interest includes building new web technologies and products, 
            and also areas related to blockchain.
          </p>
          <p className="leading-relaxed">
            Whenever possible, I also apply my passion for developing products 
            with Node.js and modern JavaScript libraries and frameworks like 
            React.js and Next.js.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;