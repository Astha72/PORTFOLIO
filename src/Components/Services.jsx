import { FaMobileAlt, FaDesktop, FaCogs, FaShoppingBasket, FaShoppingCart, FaDashcube, FaShopware, FaFire, FaSuperpowers, FaUikit } from "react-icons/fa";
import {BiSupport } from "react-icons/bi"

const ServiceCard = ({ icon, title, description, tags }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
    <div className="flex justify-center items-center mb-4">
      <div className="bg-blue-100 p-4 rounded-full text-2xl text-blue-600">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold text-center">{title}</h3>
    <p className="text-gray-600 text-center mt-2">{description}</p>
    <div className="mt-4 flex flex-wrap justify-center gap-2">
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className={`px-4 py-1 rounded-md font-medium text-sm ${
            tag.color === "blue"
              ? "bg-blue-50 text-blue-600"
              : "bg-pink-50 text-pink-500"
          }`}
        >
          {tag.name}
        </span>
      ))}
    </div>
  </div>
);

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Services{" "}
          <span className="block h-1 w-16 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mt-2 rounded-full" />
        </h2>
        <p className="mt-4 text-gray-600">
          Specialized services tailored to meet your digital needs with
          cutting-edge technologies and expert solutions.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto px-4">
        <ServiceCard
          icon={<FaMobileAlt />}
          title="Mobile App Development"
          description="Cross-platform and native mobile applications with beautiful UI and seamless performance."
          tags={[
            { name: "Flutter", color: "blue" },
            { name: "React Native", color: "pink" },
            { name: "Java", color: "blue" },
            { name: "Kotlin", color: "pink" },
          ]}
        />
        <ServiceCard
          icon={<FaDesktop />}
          title="Web Development"
          description="Responsive, modern websites and web applications with focus on performance and usability."
          tags={[
            { name: "HTML/CSS", color: "blue" },
            { name: "JavaScript", color: "pink" },
            { name: "Laravel", color: "blue" },
            { name: "PHP", color: "pink" },
          ]}
        />
        <ServiceCard
          icon={<FaCogs />}
          title="Custom Software Solutions"
          description="Tailored software solutions designed to address your specific business challenges."
          tags={[
            { name: "API Integration", color: "blue" },
            { name: "UI/UX Design", color: "pink" },
            { name: "Database", color: "blue" },
            { name: "Testing", color: "pink" },
          ]}

        />
        <ServiceCard
          icon={<FaShoppingCart />}
          title="E-Commerce Solutions"
          description="Complete online shopping platforms with secure payment gateways and inventory management.."
          tags={[
            { name: "WooCommerce", color: "blue" },
            { name: "Payment API", color: "pink" },
            { name: "Security", color: "blue" },
            { name: "Analytics", color: "pink" },
          ]}
          
        />
        <ServiceCard
          icon={<FaUikit />}
          title="UI/UX Optimization"
          description="Enhance user experience with intuitive interfaces and smooth interactions that boost engagement.."
          tags={[
            { name: "Wireframing", color: "blue" },
            { name: "Prototyping", color: "pink" },
            { name: "User Testing", color: "blue" },
            { name: "Animations", color: "pink" },
          ]}
          />
          <ServiceCard
          icon={<BiSupport />}
          title="Maintenance & Support"
          description="Ongoing technical support and maintenance to keep your applications running smoothly.."
          tags={[
            { name: "Bug Fixes", color: "blue" },
            { name: "Updates", color: "pink" },
            { name: "Optimizatio", color: "blue" },
            { name: "Consultation", color: "pink" },
          ]}
          >

          </ServiceCard>
  
      </div>
      
    </section>
  );
};

export default Services;
