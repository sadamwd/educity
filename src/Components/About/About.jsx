import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className="about-section">
    <div className='about-left'>
      <div className='image-container'>
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
    </div>
  
    <div className='about-right'>
      <h3>ABOUT UNIVERSITY</h3>
      <h2>Nurturing Tomorrow's Leaders Today</h2>
      <p>Embark on a transformative educational journey with our university's comprehensive education programs. 
        Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experience needed 
        to excel in the dynamic field of education.
      </p>   
      <p>Join a community of passionate learners and forward-thinking educators who are shaping the future.</p>   
      <p>Whether you're starting your journey or advancing your career, we provide the support and tools to help you succeed.</p>   
    </div>
  </div>
  )
}  
export default About
