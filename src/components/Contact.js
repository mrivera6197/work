import Footer from "./Footer"
import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const Contact = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const validateEmail = (email) => {
      // Regular expression for email validation
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Logic to send email with the form data
  
       // Validate email
       if (!validateEmail(email)) {
          setErrorMessage('Please enter a valid email address.');
          return;
        }
        emailjs.send('service_sn9aiph', 'template_ay4e8op', {
          name,
          lastName,
          email,
          message,
        }, 'hR1-Bc4NvvTvKRGuf')
          .then(() => {
            // Reset form fields
            setName('');
            setLastName('');
            setEmail('');
            setMessage('');
            setErrorMessage('');
            alert('Email sent successfully!');
          })
          .catch((error) => {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again later.');
          });
      };
  


    return (
        <>
        <div className="contactContainer">
        <div className='formTitle'>
            <h3>You can reach me here!</h3>
            </div>
        <div className='contactForm'> 
        <p>Send Email</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                    <input
                        type="text"
                        placeholder="Last name"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        id="message"
                        placeholder="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    {errorMessage && <p>{errorMessage}</p>}
                <button type="submit" className="contactButton">Send</button>
            </form>
        </div>
            

        </div>
        <Footer />
        
        </>
    )
}

export default Contact;