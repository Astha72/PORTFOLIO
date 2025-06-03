import React from "react";

const companies = [
  { name: "TechCorp", color: "bg-blue-100 text-blue-800" },
  { name: "Innovex", color: "bg-pink-100 text-pink-800" },
  { name: "DigiTrend", color: "bg-blue-100 text-blue-800" },
  { name: "NextWave", color: "bg-pink-100 text-pink-800" },
  { name: "FutureLab", color: "bg-blue-100 text-blue-800" },
];

const TrustedSection = () => {
  return (
    <section className="bg-gray-50 px-4 py-16 text-center">
      {/* Trusted Companies */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-10">Trusted by Companies Worldwide</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-20">
        {companies.map((company, idx) => (
          <div
            key={idx}
            className={`shadow-md rounded-xl px-6 py-3 font-semibold text-lg ${company.color}`}
          >
            {company.name}
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-100 to-pink-100 rounded-3xl p-10 md:p-16 max-w-4xl mx-auto shadow-sm">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
          Join our satisfied clients and let us bring your digital ideas to life with our expertise and creativity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-yellow-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition">
            Contact Us Today
          </button>
          <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition">
            Explore Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
