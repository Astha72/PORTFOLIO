import { FaGithub, FaInstagram, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaLocationPinLock, FaMapLocation } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import '@fortawesome/fontawesome-free/css/all.min.css';


function ContactHeader(){
    return(
        <>
        <div className="bg-black w-full">

<div>
    
    <h1 className="text-white text-4xl text-center mb-2">Get In Touch</h1>
    {/* <br /> */}
    <div className=" mb-2 w-24 h-2 bg-gradient-to-r from-blue-700 to-pink-800 items-center flex flex-col-reverse mx-auto rounded-full"></div>
    {/* <br /> */}
    <p className="text-center text-s text-white">Ready to discuss your project? Reach out to us for a consultation or just to say hello.</p>
</div>

<div className="flex flex-col md:flex-row gap-6 mt-10 p-8">
  {/* Left Section */}
  <div className="text-white md:w-1/2 w-60 rounded-2xl p-8 bg-[#262626] h-200">
  <h1 className="text-white text-2xl font-bold p-1 ">Contact Information</h1>
   <p className="mb-10 text-white ">
            Feel free to reach out to us through any of these channels. We're eager to hear about your project and how we can help.
          </p>
            

          <div className="flex items-center space-x-4">
<div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-blue-800 text-xl">
  <FaPhone />
</div>

            <div  className="">
                <div> Phone</div>
                <div>123456789</div>
            </div>
          </div>
 <br />
 {/* Second Part*/}
   <div className="flex items-center space-x-4">
<div className="bg-[#ff006e1a] rounded-full w-12 h-12 flex items-center justify-center text-[#ff006e] text-xl">
  <MdEmail />
</div>

            <div  className="">
                <div> Email</div>
                <div>xyz@gmail.com</div>
            </div>
          </div>
 
<br />
  {/* Third Part*/}
   <div className="flex items-center space-x-4">
<div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-blue-800 text-xl">
  <FaLocationPinLock />
</div>

            <div  className="">
                <div> Location</div>
                <div>Jaipur </div>
            </div>
          </div>

<h2 className="p-3 font-bold text-white text-xl">Connect with Us</h2>

<div className="flex items-center space-x-4">
  {/* GitHub */}
  <a href="https://github.com/Astha72" target="_blank" rel="noopener noreferrer">
    <div className="w-8 h-8 rounded-full bg-blue-700 text-blue-200 flex items-center justify-center hover:bg-pink-600">
      <FaGithub />
    </div>
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/company/innovatex-technology/" target="_blank" rel="noopener noreferrer">
    <div className="w-8 h-8 rounded-full bg-blue-700 text-blue-200 flex items-center justify-center hover:bg-pink-600">
      <FaLinkedin />
    </div>
  </a>

  {/* WhatsApp */}
  <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
    <div className="w-8 h-8 rounded-full bg-blue-700 text-blue-200 flex items-center justify-center hover:bg-pink-600">
      <FaWhatsapp />
    </div>
  </a>

  {/* Instagram */}
  <a href="https://www.instagram.com/innovatex_tech" target="_blank" rel="noopener noreferrer">
    <div className="w-8 h-8 rounded-full bg-blue-700 text-blue-200 flex items-center justify-center hover:bg-pink-600">
      <FaInstagram />
    </div>
  </a>
</div>
<br />
<div className="bg-[#25D3661a] rounded-md
                w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl
                h-auto py-6 px-4 sm:px-6 md:px-8
                sm:rounded-lg md:rounded-xl lg:rounded-2xl
                mx-auto space-y-6">

  {/* Top Section */}
  <div className="flex items-center space-x-4">
    <div className="bg-[#25d366] rounded-full 
                    w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                    flex items-center justify-center 
                    text-white text-lg sm:text-xl md:text-2xl">
      <FaWhatsapp />
    </div>

    <div className="text-sm sm:text-base md:text-lg">
      <div className="font-semibold text-white">WhatsApp</div>
      <div className="text-white">Get Instant Response</div>
    </div>
  </div>

  {/* Button or Input Section */}
  <div className="w-full flex justify-center">
    <div className="bg-[#25d366] rounded-md gap-2
                    w-64 sm:w-80 md:w-96 lg:w-[28rem]
                    h-10 sm:h-12 md:h-14
                    flex items-center justify-center text-white text-sm sm:text-base md:text-lg font-semibold shadow-md hover:bg-[#20c153] transition-all duration-300 cursor-pointer">
      Start Chat
    </div>
  </div>
</div>
</div>
  {/* Right Section */}
  <div className="text-white w-full md:w-1/2 flex   mb-8 md:mb-0  w-40 rounded-2xl p-8 bg-[#262626] h-200">
   <div className=" text-white px-4 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14 rounded-xl w-full max-w-4xl mx-auto shadow-lg">
  <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Send Us a Message</h2>

  <form className="space-y-6">
    {/* Name and Email */}
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <label className="block text-sm mb-1">Your Name</label>
        <input
          type="text"
          placeholder="jerry"
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
      <div className="flex-1">
        <label className="block text-sm mb-1">Your Email</label>
        <input
          type="email"
          placeholder="jerry@example.com"
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
    </div>

    {/* Phone Number */}
    <div>
      <label className="block text-sm mb-1">Phone Number</label>
      <input
        type="tel"
        placeholder="+1 (123) 456-7890"
        className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>

    {/* Subject */}
    <div>
      <label className="block text-sm mb-1">Subject</label>
      <input
        type="text"
        placeholder="Project Inquiry"
        className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>

    {/* Message */}
    <div>
      <label className="block text-sm mb-1">Your Message</label>
      <textarea
        rows="5"
        placeholder="Please describe your project or inquiry..."
        className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
      ></textarea>
    </div>

    {/* Consent Checkbox */}
    <div className="flex items-start space-x-2">
      <input type="checkbox" id="consent" className="mt-1" />
      <label htmlFor="consent" className="text-sm text-gray-300">
        I consent to having this website store my submitted information so they can respond to my inquiry.
      </label>
    </div>

    {/* Submit Button */}
    <div>
      <button
        type="submit"
        className="w-full sm:w-110 bg-gradient-to-r from-pink-700 to-blue-600 hover:bg-pink-700 transition px-6 py-2 rounded-md font-medium text-white justify-center items-center"
      >
        Send Message
      </button>
    </div>
  </form>
</div>

  </div>
</div>
</div>
        </>
    );
}

export default ContactHeader;