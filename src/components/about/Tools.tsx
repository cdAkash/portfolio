import React from 'react';

const skills = [
  { logo: '/icons8-visual-studio-code-480.png', text: 'VScode' },
  { logo: '/postman.png', text: 'Postman' },
  { logo: '/icons8-git-144.png', text: 'Git' },
  { logo: '/docker.png', text: 'Docker' },
  { logo: '/mongodb-seeklogo.svg', text: 'MongoDB' },
];

const Tools = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 dark:text-white">
          Tools I use
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="relative group w-40 h-40 bg-white dark:bg-gray-700 rounded-lg shadow-lg flex items-center justify-center">
              <img src={skill.logo} alt={skill.text} className="w-16 h-16" />
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

export default Tools;