import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const Gitcalendar = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 dark:text-white">
          Days I Was On Caffeine
        </h1>
        <div className="flex justify-center">
          <GitHubCalendar 
            username="cdAkash" 
            blockSize={15} 
            blockMargin={5} 
            colorScheme="dark" 
          />
        </div>
      </div>
    </div>
  );
};

export default Gitcalendar;