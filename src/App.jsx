import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'; 
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import ContactUs from './Components/Contact Us/ContactUs';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter> 
      <Navbar /> 
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <Hero />
            <div className="container">
              <Title subTitle="OUR PROGRAM" title="What We Offer" />
              <Programs />
              <About />
              <Title subTitle="Gallery" title="Campus Photos" />
              <Campus />
              <Title subTitle="TESTIMONIAL" title="What Student Says" />
              <Testimonials />
              <Title subTitle="Contact Us" title="Get In Touch" />
              <ContactUs />
            </div>
            <Footer />
          </>
        } />

        {/* Other Pages */}
        <Route path="/program" element={
          <>
          <Title subTitle="OUR PROGRAM" title="What We Offer" />
 
          <Programs />
          <Footer />
          </>
        }
         />
        <Route path="/about" element={<><About /><Footer /></>} />
        <Route path="/campus" element={
          <>
          <Title subTitle="Gallery" title="Campus Photos" />
          <Campus />
          <Footer />
          </>
        }
         />
        <Route
          path="/testimonials"
          element={
            <>
              <Title subTitle="TESTIMONIAL" title="What Student Says" />
              <Testimonials />
              <Footer />
            </>
          }
        />
        <Route path="/contactus" element={
          <>
          <Title subTitle="Contact Us" title="Get In Touch" />
          <ContactUs />
          <Footer />
          </>
          } 
          />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
