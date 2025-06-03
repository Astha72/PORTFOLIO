import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-[#111] text-white py-10 px-6 md:px-20 relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-blue-500">Astha</span>{" "}
            <span className="text-pink-500">Gautam</span>
          </h1>
          <p className="text-gray-300 mt-4">
            Professional Full-Stack Mobile & Web Developer providing high-quality development services and innovative solutions for your digital needs.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#"><FaGithub className="bg-[#222] p-2 rounded-full text-3xl" /></a>
            <a href="#"><FaLinkedin className="bg-[#222] p-2 rounded-full text-3xl" /></a>
            <a href="#"><FaInstagram className="bg-[#222] p-2 rounded-full text-3xl" /></a>
            <a href="#"><FaTwitter className="bg-[#222] p-2 rounded-full text-3xl" /></a>
            <a href="#"><FaWhatsapp className="bg-[#222] p-2 rounded-full text-3xl" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-bold text-lg mb-2">Quick Links</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mb-4" />
          <ul className="space-y-2 text-gray-300">
            <li>› Home</li>
            <li>› About</li>
            <li>› Services</li>
            <li>› Projects</li>
            <li className="text-white font-semibold">› Team</li>
            <li>› Contact</li>
            <li>› Privacy Policy</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-bold text-lg mb-2">Services</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mb-4" />
          <ul className="space-y-2 text-gray-300">
            <li>› Mobile App Development</li>
            <li>› Web Development</li>
            <li>› Custom Software Solutions</li>
            <li>› UI/UX Optimization</li>
            <li>› E-Commerce Solutions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-bold text-lg mb-2">Contact Us</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mb-4" />
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <MdPhone className="text-blue-400" />
              +91 8302548250
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-pink-400" />
              asthagautam780@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaLocationDot className="text-blue-400" />
              Jaipur, India
            </li>
          </ul>

          <h3 className="mt-6 font-semibold">Subscribe to Newsletter</h3>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Your email"
              className="rounded-l px-4 py-2 bg-[#222] text-white outline-none"
            />
            <button className="bg-gradient-to-r from-blue-500 to-pink-500 px-4 rounded-r">
              ➜
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 Astha Gautam. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>

      {/* Back to top */}
      <button className="absolute right-6 bottom-6 bg-[#222] text-white p-3 rounded-full">
        <FaArrowUp />
      </button>
    </footer>
  );
}


export default Footer ;