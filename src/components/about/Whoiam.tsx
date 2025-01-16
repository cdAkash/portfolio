import React from 'react';

const Whoiam = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed justify-content">
        I'm <span className="font-extrabold text-3xl">Akash Yadav</span>, currently pursuing my MCA at Meghnad Saha Institute of Technology. 
              Yes, I'm also a Software Engineer. This portfolio might give you a glimpse of my front-end skills – 
              I know, it's pretty basic. But hey, the back-end is where the magic happens. 
              Why don't you take a peek at my GitHub? You'll find a treasure trove of code, 
              sprinkled with some usual techy goodness like RESTful APIs, microservices, and maybe a dash of blockchain. 
              Dive in and enjoy the ride!
            </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img 
            src="/ami.png" 
            alt="Illustration" 
            className="w-3/4 md:w-full dark:invert"
          />
        </div>
      </div>
    </div>
  );
};

export default Whoiam;