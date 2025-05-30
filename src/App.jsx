import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import About from './Components/About';
import Project from './Components/Project';
import Services from './Components/Services';
import Home from './Components/Home';
import HowWework from './Components/HowWework';
import Teamsection from './Components/Teamsection';
 const App = () => {
 
  return (
    
// {/* <Routes>
        
//         <Route path="/about" element={<About />} />
//         <Route path="/poject" element={<Project/>} />
//         <Route path="/services" element={<Services />} />
//       </Routes> */}
      <><Home/>
      <About/>
      <Services/>
      <HowWework/>
      <Project/>
      <Teamsection/>
     </>
  )
}

export default App ;