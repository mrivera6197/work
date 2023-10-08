import Footer  from "./Footer";

import React, { useRef } from 'react'; 
import { useNavigate } from 'react-router-dom';


const About = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const navToContact = () => {
      navigate('/contact');
      scrollToTop();
    };

    const scrollToTop = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top:0, 
                behavior: "instant",
            })
        } else {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }

    const colorChange = () => {
        var reveals = document.querySelectorAll(".color");
        
        for (var i=0; i<reveals.length; i++) {
          var windowHeight = window.innerHeight; 
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150; 
    
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active")
          }
        }
      }

      window.addEventListener("scroll", colorChange)

    return (
        <>
        <div className="aboutPage">
            <div className="aboutIntro">
                <h3>Here's a bit about Me!</h3>
            </div>
            <div className="aboutContent">
                <div className="overview reveal">
                    <p>My name is Mali, I am a Software Developer who specializes in front-end development.</p>
                    <p>I'm passionate about UX design and data analysis.</p>
                    <p>Here's a list of my skills and what I have been learning lately.</p>

                    <div className="overviewContent"> 
                    <div className="skills">
                        <h4>Skills</h4>
                        <div className="skills1">
                        <ul>
                            <li>
                                React.js
                            </li>
                            <li>
                                Node.js
                            </li>
                            <li>
                                Material UI
                            </li>
                            <li>
                                Chart.js
                            </li>
                            <li>
                                Java
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Spring Boot
                            </li>
                            <li>
                                JUnit5
                            </li>
                            <li>
                                Photoshop
                            </li>
                            <li>
                                Design
                            </li>
                            <li>
                                Git
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Figma
                            </li>
                            <li>
                                Jira
                            </li>
                            <li>
                                Mock MVC
                            </li>
                            <li>
                                Mockito
                            </li>

                        </ul>
                        </div>
                    </div>

                    <div className="skills">
                        <h4>Learning</h4>
                        <div className="skills1">
                        <ul>
                            <li>
                                Agile Process
                            </li>
                            <li>
                               Cucumber Tests 
                            </li>
                            <li>
                               Oauth 
                            </li>
                        </ul>
                        </div>

                    </div>
                    <div className="skills">
                    <h4>Education</h4>
                    <div className="skills1">
                    <ul>
                            <li>
                                BS in Biology
                            </li>
                            <li>
                                MS in Software Development 
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="me reveal color">
                    <div className="mePhoto">

                    </div>
                    <div className="meContent">
                        <p>
                            Based in NYC
                        </p>  
 
                        <p>
                            Looking for opportunites to grow
                        </p>
                        <button 
                        onClick={navToContact}
                        className="contactButton">
                            Contact
                        </button>

                    </div>

                </div>
                <div className="end reveal">
                    <p>Thanks for checking out my site !</p>
                    <p>Hope you have a great day</p>
                </div>
                <div className="end reveal">
                    <div className="catPhoto">
                    </div>    
                </div>
            </div>

        </div>
        <Footer />
        
        </>

    )
}

export default About;