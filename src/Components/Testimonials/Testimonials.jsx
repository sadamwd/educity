import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  const tx = useRef(0); 

  const slideForward = () => {
    if (tx.current > -75) {
      tx.current -= 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  const slideBackward = () => {
    if (tx.current < 0) {
      tx.current += 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      
      <div className='slider'>
        <ul ref={slider}>
          {[user_1, user_2, user_3, user_4].map((userImg, index) => (
            <li key={index}>
              <div className='slide'>
                <div className='user-info'>
                  <img src={userImg} alt={`User ${index + 1}`} />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, US</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, 
                    eligendi at consequatur provident rerum ipsum sint libero recusandae fuga voluptatum dolorum
                    quaerat quas ipsa amet blanditiis mollitia nulla veritatis facere.</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
