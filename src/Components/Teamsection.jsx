import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const developers = [
  {
    name: "Astha",
    title: "Laravel/PHP Developer",
    tags: ["Laravel", "PHP"],
    description:
      "Expert in building robust backend systems and RESTful APIs with Laravel and PHP.",
    color: "text-blue-500",
  },
  {
    name: "Kumkum ",
    title: "Laravel Developer",
    tags: ["Laravel", "Full-Stack"],
    description:
      "Passionate developer with expertise in Laravel framework and modern web development practices.",
    color: "text-pink-500",
  },
  {
    name: "Charu",
    title: "Software Developer",
    tags: ["Java", "Software"],
    description:
      "Skilled programmer specializing in custom software solutions and application development.",
    color: "text-blue-500",
  },
  {
                name: "Alice",
                title: "QA Tester",
                tags: ["Selenium", "Java"],
                description:
                  "Quality assurance expert with experience in Selenium and Java for comprehensive testing solutions.",
                color: "text-blue-500",
              },
              {
                name: "Jay ",
                title: "Accountant",
                tags: ["Tally", "Accounting"],
                description:
                  "Expert in financial management and accounting with comprehensive knowledge of Tally software..",
                color: "text-pink-500",
              },
              {
                name: "Jitedra",
                title: "Software Developer",
                tags: ["Java", "Software"],
                description:
                  "Skilled programmer specializing in custom software solutions and application development.",
                color: "text-blue-500",
              },
];

const DeveloperCard = ({ name, title, tags, description, color }) => (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-sm mx-auto">
    <div className="bg-gradient-to-br from-blue-400 to-pink-500 p-8 flex flex-col items-center">
      <div className="bg-white rounded-full p-4 mb-4">
        <svg
          className="w-16 h-16 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </div>
      <div className="flex space-x-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-white text-gray-700 text-sm px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-1">{name}</h2>
      <h3 className={`text-lg mb-4 ${color}`}>{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex justify-center space-x-4">
        <FaGithub className="text-gray-600 hover:text-black cursor-pointer" />
        <FaLinkedin className="text-gray-600 hover:text-blue-700 cursor-pointer" />
        <FaInstagram className="text-gray-600 hover:text-pink-500 cursor-pointer" />
      </div>
    </div>
  </div>
);

const Teamsection = () => {
  return (
    
    <div className="min-h-screen bg-gray-100 py-12 px-4">
                <div className="text-4xl font-bold items-center flex flex-col-reverse">Our Team</div>
                
                <div className=" mt-4 w-48 h-2 bg-gradient-to-r from-pink-700 to-blue-600 items-center flex flex-col-reverse mx-auto rounded rounded-full"></div>
                <br />
                <p className="text-s items-center flex flex-col-reverse text-center">Meet the talented professionals behind our exceptional work. Each member brings unique <br /> expertise to deliver quality solutions.</p>
                <br />
      <div className="grid gap-8 md:grid-cols-3">
        {developers.map((dev) => (
          <DeveloperCard key={dev.name} {...dev} />
        ))}
      </div>
    </div>
  );
};

export default Teamsection;
