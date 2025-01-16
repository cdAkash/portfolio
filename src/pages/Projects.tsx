import React from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: "Blockchain-based Electronic Voting Machine",
    description: (
      <ul className="list-disc list-inside">
        <li>Developed a blockchain-based electronic voting system using Ethereum and Node.js, showcasing expertise in decentralized technologies.</li>
        <li>Integrated an Arduino R3 to simulate a voting button, providing a physical interface for users.</li>
        <li>Implemented smart contracts to securely record and tally votes, ensuring an immutable and tamper-proof voting process.</li>
      </ul>
    ),
    github: "https://github.com/cdAkash/BlockchainBasedEVM"
  },
  {
    title: "College Management System",
    description: (
      <ul className="list-disc list-inside">
        <li>Engineered a MERN stack-based CRUD college management system to streamline hierarchical data management and enhance transparency within educational institutions.</li>
        <li>Developed interactive dashboards for admins, principals, department heads, teachers, and students, enabling role-based data access and updates.</li>
        <li>Utilized Node.js, React.js, Express.js, and MongoDB for implementation.</li>
      </ul>
    ),
   
    github: "https://github.com/cdAkash/college-management-system"
  },
  {
    title: "Restaurant Management System",
    description: (
      <ul className="list-disc list-inside">
        <li>Developed a comprehensive restaurant management system using the MERN stack, enabling efficient order management, inventory tracking, and customer relationship management.</li>
        <li>Implemented real-time order updates and notifications using WebSockets, enhancing communication between kitchen staff and waiters.</li>
        <li>Utilized Node.js, React.js, Express.js, and MongoDB for implementation.</li>
      </ul>
    ),
   
    github: "https://github.com/cdAkash/restaurant-management-system"
  }
];

const Projects = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden flex flex-col h-full">
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <div className="text-gray-600 dark:text-gray-300 mb-4 flex-grow text-lg">
                  {project.description}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  <Github className="mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;