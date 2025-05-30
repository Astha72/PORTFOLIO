import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-black">
      {/* Logo / Name */}
      <motion.h1
        className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Astha Gautam
      </motion.h1>

      {/* Navigation Menu */}
      <nav className="space-x-8 text-white text-lg">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
        <a href="#">Team</a>
        <a href="#">Testimonials</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  );
}

export default Header;
