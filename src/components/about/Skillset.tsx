import React from 'react';
import { FaJava } from "react-icons/fa6";

const skills = [
  { logo: 'java.png', text: 'Java' },
  { logo: '/javascript.png', text: 'JavaScript' },
  { logo: '/icons8-python-750.png', text: 'Python' },
  { logo: '/react.png', text: 'ReactJS' },
  { logo: '/express.png', text: 'ExpressJS' },
];

const Skillset = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 dark:text-white">
          My Skillset
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="relative group w-40 h-40 bg-white dark:bg-gray-700 rounded-lg shadow-lg flex items-center justify-center">
              {typeof skill.logo === 'string' ? (
                <img src={skill.logo} alt={skill.text} className="w-16 h-16" />
              ) : (
                skill.logo
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-12 rounded-b-lg">
                <span className="text-white text-lg">{skill.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skillset;