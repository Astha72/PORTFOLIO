import React from 'react';
import Header from './header';
import About from './About';
import Project from './Project';
import { Route, Routes } from 'react-router-dom';
function Home (){

                const cards = [{ id: 1, name: "HTML" },
                                { id: 2, name: "CSS" , },
                                { id: 3, name: "JavaScript",  },
                                { id: 4, name: "React" , },
                                { id: 5, name: "Tailwind",  },
                                { id: 6, name: "Node.js" , },
                                { id: 7, name: "Express" , },
                                { id: 8, name: "MongoDB" , },
                                { id: 9, name: "Next.js" , },
                                { id: 10, name: "TypeScript",  },]
               
               return(<div className="bg-slate-900">
     <Header/>
          <div className='flex flex-col-reverse md:flex-row items-center justify-between text-left text-white bg-[#171717] px-6 py-12'>
                <div className="md:w-1/2 text-left">
                  <h1 className='text-5xl font-bold'>
                    Hi I am <span className='bg-gradient-to-r from-blue-700 to-pink-500 bg-clip-text text-transparent'>Astha Gautam</span>
                  </h1>
                  <br />
                  <h2 className='text-2xl text-white gap-10'>Fullstack Developer And Web Developer</h2>
                  <h2 className='text-2xl text-blue-400'>React Native</h2>
                  <p className='text-xl mt-4 text-white-200'>
                    Crafting high-performance, visually stunning applications with <br />cutting-edge technologies and sleek UI/UX design.
                  </p>
                  <br />
                  <div className="flex gap-4">
                    <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                      Download Profile
                    </button>
                    <button className="px-6 py-2 bg-transparent border border-pink-700 text-white rounded-lg hover:bg-green-600">
                      Contact Me
                    </button>
                  </div>
                </div>
                
                <div className='w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0'>
                  <img src="src/assets/banner.jpg" alt="" className='w-full h-auto max-h-80 object-contain' />
                </div>
              
                      
                    </div>
                     <div className="bg-[#161616] max-h-screen p-6">
                    <div className="flex flex-wrap justify-center gap-4">
                      {cards.map((card) => (
                        <div
                          key={cards.id}
                          className="w-24 h-24 bg-[#262626] rounded-lg shadow-md flex items-center justify-center text-pink-700 text-sm font-semibold"
                        >
                          {card.name}
                        </div>
                      ))}
                    </div>
                    <br />
                    <br />
              
              
              
                  </div>
                
                  </div>
               )
}
export default Home ;