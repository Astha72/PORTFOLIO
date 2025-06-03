import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
const testimonials=[{
                name: "Astha Sharma",
                position: "CEO, TechInnovate",
                message:
                  "Astha and his team delivered an exceptional mobile application that exceeded our expectations. The UI is sleek, the performance is outstanding, and the user feedback has been overwhelmingly positive. Their communication throughout the project was excellent.",
                initials: "AS",
              },
              {
                name: "komal Pareek",
                position: "CTO, InnovateX",
                message:
                  "The collaboration was seamless and professional. Highly impressed with the delivery speed and responsiveness.",
                initials: "KP",
              },
              {
                name: "Maria smith",
                position: "Product Manager, FutureTech",
                message:
                  "Incredible results! The design and features blew us away. Highly recommended for startups.",
                initials: "MS",
              },
            ];
            
            const companies = [
              "TechCorp",
              "Innovex",
              "DigiTrend",
              "NextWave",
              "FutureLab",
            ];
function TestimonialSlider(){
const [current , setCurrent] = useState(0);

                const nextTestimonial = () => {
                                setCurrent((prev) => (prev + 1) %  testimonials.length);
                }

                const prevTestimonial =() => {
                                setCurrent((prev)=> prev==0 ? testimonials.length -1 : prev-1) ;
                };
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20 text-center">
      
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-2">Testimonials</h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-pink-500 rounded-full mb-4" />
        <p className="text-gray-600">
          What our clients say about our expertise and delivered solutions.
        </p>
      </div>

      {/* Card */}
      <div className="relative max-w-5xl mx-auto" id="testimonials">
        <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 text-left">
          {/* Avatar */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xl font-semibold">
            {testimonials[current].initials}
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-lg text-gray-800 mb-4">
              "{testimonials[current].message}"            </p>
            <p className="font-bold text-gray-900">{testimonials[current].name}</p>
            <p className="text-gray-500 text-sm">{testimonials[current].position}</p>
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <button className="bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
            <ChevronLeft size={20}
            onClick={prevTestimonial} />
            
          </button>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <button className="bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
            <ChevronRight size={20}
            onClick={nextTestimonial}/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
