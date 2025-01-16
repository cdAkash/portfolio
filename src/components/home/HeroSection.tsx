import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
          Hi There!{' '}
          <span className="inline-block animate-wave">👋</span>
        </h1>
        <div className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          I'm{' '}
          <TypeAnimation
            sequence={[
              'Akash',
              1000,
              'a Software Engineer',
              1000,
              'a Backend Developer',
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-blue-600 dark:text-blue-400"
            repeat={Infinity}
          />
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Passionate about creating innovative solutions and building amazing web experiences.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/a.png"
          alt="Profile"
          className="rounded-full w-64 h-64 object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;