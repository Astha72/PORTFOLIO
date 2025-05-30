import React from "react";

const steps = [
  {
    number: "1",
    title: "Discovery",
    description:
      "Understanding your requirements and project goals through in-depth consultations.",
    color: "bg-blue-500",
  },
  {
    number: "2",
    title: "Planning",
    description:
      "Creating a roadmap with milestones, technologies, and design specifications.",
    color: "bg-pink-500",
  },
  {
    number: "3",
    title: "Development",
    description:
      "Building your solution with clean code and regular progress updates.",
    color: "bg-blue-500",
  },
  {
    number: "4",
    title: "Delivery",
    description:
      "Testing, refining, and launching your product with ongoing support.",
    color: "bg-pink-500",
  },
];

function HowWework() {
  return (
    <div className="py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl p-6 shadow-md text-center"
          >
            <div
              className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 text-white flex items-center justify-center rounded-full ${step.color} font-bold text-lg z-10`}
            >
              {step.number}
            </div>
            <h3 className="mt-6 mb-2 text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>

            {/* Gradient side line */}
            {index !== steps.length - 1 && (
              <div className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 h-1 w-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold mb-6">Ready to bring your idea to life?</h3>
        <button className="px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg hover:scale-105 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default HowWework;
