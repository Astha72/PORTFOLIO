import React, { useState } from "react";
import { Monitor, Smartphone, DollarSign, Settings, CameraIcon, MessageCircleHeart, MessageCircle } from "lucide-react";

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const projects = [
    {
      title: "E-Commerce Mobile App",
      description:
        "A feature-rich shopping application with seamless checkout process and real-time inventory tracking.",
      tag: "Flutter",
      icon: <Smartphone size={48} className="text-white" />,
      category: "Mobile Apps",
      tags:['flutter', 'firebase'],
    },
    {
      title: "Corporate Portal",
      description:
        "A comprehensive business management system with employee dashboard, task management, and analytics.",
      tag: "Laravel",
      icon: <Monitor size={48} className="text-white" />,
      category: "Websites",
      tags:["React","marn"]
    },
    {
      title: "Expense Tracker",
      tags:["flutter", "dart","firebase"],
      description:
        "A personal finance app with budget planning, expense tracking, and visual reports to help users manage finances.",
      tag: "React Native",
      icon: <DollarSign size={48} className="text-white" />,
      category: "Mobile Apps",
    },

    {
      title: "Inventory Management System",
    description:
      "A custom software solution for tracking inventory, managing suppliers, and generating reports.",
    tags: ["Java", "SQL", "Desktop App"],
    tag:"Java",
    gradient: "from-pink-500 to-blue-500",
    icon: <Settings size={48} className="text-white" />,
    techBadge: "Java",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Photography Portfolio",
    tag:"Kotlin",
    description:

      "A visually stunning website showcasing a photographer's work with image galleries and booking system.",
    tags: ["PHP", "JavaScript", "Responsive"],
    gradient: "from-blue-500 to-pink-500",
    icon: <CameraIcon size={48} className="text-white" />,
    techBadge: "PHP",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Chat Application",
    tag :"php",
    description:
      "A real-time messaging platform with group chats, file sharing, and end-to-end encryption.",
    tags: ["Kotlin", "Firebase", "Real-time"],
    gradient: "from-pink-500 to-blue-500",
    icon: <MessageCircle size={48} className="text-white" />,
    techBadge: "Kotlin",
    demoLink: "#",
    githubLink: "#",

  },
  ];

  const filters = ["All Projects", "Mobile Apps", "Websites", "Custom Software"];

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="px-6 md:px-20 py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-2">
        Projects
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mt-1 rounded-full"></div>
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Explore my latest work and see how I bring ideas to life with code and
        creativity.
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeFilter === filter
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <div className="p-6 bg-gradient-to-br from-blue-500 to-pink-500 relative h-44 flex items-center justify-center">
              <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded-full">
                {project.tag}
              </span>
              {project.icon}
              
            </div>
            
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags?.map((t,i)=>(<span key={i} className="bg-[#2a2a2a] text-xs text-white px-2 py-1 rounded-full border border-gray-800">{t}</span>))}
            </div>
            <div className="flex justify-between items-center mt-4 p-5">
                <a href={project.demoLink} className="text-blue-500 hover:underline text-sm">
                  Live Demo ↗
                </a>
                <a href={project.githubLink} className="text-pink-500 hover:underline text-sm">
                  GitHub
                </a>
              </div>
              <br />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
