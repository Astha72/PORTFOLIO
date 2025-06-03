import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Project from './Components/Project';
import Services from './Components/Services';
import Home from './Components/Home';
import HowWework from './Components/HowWework';
import Teamsection from './Components/Teamsection';
import Teamstatus from './Components/Teamstatus';
import TestimonialSlider from './Components/Testimonialslider';
import TrustedSection from './Components/TrustedSection';
import ContactHeader from './Components/ContactHeader';
import LocationCard from './Components/LocationCard';
import Footer from './Components/footer';
 const App = () => {
 
  return (
    
// {/* <Routes>
        
//         <Route path="/about" element={<About />} />
//         <Route path="/poject" element={<Project/>} />
//         <Route path="/services" element={<Services />} />
//       </Routes> */}
      <>
      <Header/>
     
     <section id="home"><Home /></section>
     <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="project"><Project /></section>
      <section><HowWework /></section>
      <section id="team"><Teamstatus /></section>
      <section id ="testimonails"><TestimonialSlider /></section>
      <section id="contact"><ContactHeader /></section>
      <section><LocationCard /></section>
      <Footer />
    
     </>
  )
}

export default App ;