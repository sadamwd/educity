import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
             <div className='hero container'> 
                <div className='hero-text'>
                 <h1>We Ensure better education for a better world</h1>
                 <p>Web development encompasses the creation, building, and maintenance of websites and web applications,
                 involving tasks like coding, design, and content management,
                using tools and languages like HTML, CSS, and JavaScript.</p> 
        
                <button className='btn'>Explore More <img src={dark_arrow} alt= ""  /> </button>
       
        </div>
    </div>
  )
}

export default Hero
