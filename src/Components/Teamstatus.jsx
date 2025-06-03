import React from "react";
import {
  Users,
  Briefcase,
  Smile,
  Clock,
} from "lucide-react"; // or your preferred icon library

const stats = [
  { icon: <Users className="text-blue-500" size={32} />, value: "5+", label: "Team Members" },
  { icon: <Briefcase className="text-pink-500" size={32} />, value: "20+", label: "Projects Completed" },
  { icon: <Smile className="text-blue-500" size={32} />, value: "15+", label: "Happy Clients" },
  { icon: <Clock className="text-pink-500" size={32} />, value: "24/7", label: "Support Available" },
];

const TeamStats = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white text-center">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center space-y-3"
          >
            <div className="bg-gray-100 rounded-full p-3">{stat.icon}</div>
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <h2 className="text-3xl  font-bold mb-4">Ready to Work With Our Team?</h2>
      <p className="text-gray-600 mb-8">
        Let's collaborate to transform your ideas into exceptional digital experiences.
      </p>
      <button className="bg-gradient-to-r from-yellow-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition">
        Get in Touch
      </button>
    </section>
  );
};

export default TeamStats;
