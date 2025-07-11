import React from 'react'
import './ContactUs.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const ContactUs = () => {
    const [result, setResult] = React.useState("");  
            const onSubmit = async (event) => {
              event.preventDefault();
            setResult("Sending...");
  const formData = new FormData(event.target);

  FormData.append("access_key", "YOUR ACCESS KEY HERE");
 
   const res = await fetch("http://api.web3forms.com/submit", {
     method: "POST",
     body:formData
   }).then((res) => res.json()); 
     
       if(res.success) {
     console.log("Success",res);
     setResult(res.message);
     event.target.reset();
   }   else {
             console.log("Error", res);
             setResult(res.message);
   }
 };
 
  return (
    <div className='contact'>
    <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Molestias soluta deserunt tempora similique cumque eum corporis 
             dolorum nostrum! Animi quisquam architecto veritatis voluptatum
              officiis accusantium veniam vero laudantium aperiam illo!</p>
              <ul>
                <li><img src={mail_icon} alt="" />Contact sadamhussainwd@gmail.com</li>
                <li><img src={phone_icon} alt="" />+1234567890</li>
                <li><img src={location_icon} alt="" />Central Karachi<br/>  75350, M A Jinnah Road Karachi  </li>
              </ul>
      </div>
             <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name'  required/>
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter Your Mobile Number'  required/>
                    <label>Write Your message here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                </form>
                 <span>{result}</span>
             </div>
    </div>
  )
}

export default ContactUs
