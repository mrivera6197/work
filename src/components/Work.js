import { Typography, Button, Link } from "@mui/material";
import Box from "@mui/material/Box"
import vid from "../images/css.mp4"
import calm from "../images/calm.mp4"
import budget from "../images/budget.mp4"
import budgetFinal from "../images/dashFinal.mp4"
import generator from "../images/generator.mp4"
import Footer from "./Footer"

import React, { useRef } from 'react'; 
import { useNavigate } from 'react-router-dom';


const Work = () => {

  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const navToAbout = () => {
      navigate('/about');
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

    return (
        <>
        <Box sx={{ width: "100%", height: "450vh", display: "flex", 
        justifyContent: "flex-start", alignItems: "center", flexDirection: "column", 
        marginTop: 10, pl: "20" }}>

          <Box sx={{ width: "80%", height: "140vh", display: "flex", 
        justifyContent: "flex-start", alignItems: "center", flexDirection: "column", 
        marginTop: 5}}>
            <div className="workDiv">
              <h3>Welcome to the Work Page!</h3>
              <p>This page showcases design, css, and React.js skills.</p>
              <h4>Scroll to See Portfolio Site </h4>
            </div>
            <Link sx={{fontSize:20, marginTop:10}} target='_blank' href='https://neon-pavlova-ab8313.netlify.app/'>Check out Lemoncub</Link>
            <div className="portfolio reveal">
              <video src={vid} height={570} autoPlay={true} loop={true} />
            </div>
          </Box>

          <Box sx={{ width: "80%", height: "200vh", display: "flex", flexDirection: "column",
        justifyContent: "space-around", alignItems: "center"}}>
          <div className="leftShow reveal">
            <p>Keyframe Animations</p>
              <video src={calm} height={550} autoPlay={true} loop={true}  
               className=""/>

          </div>

          <div className="rightShow reveal">
            <p>Random Generation</p>
              <video src={generator} height={600} autoPlay={true} loop={true}  
               className=""/>

          </div>
            
         
          </Box>
          <Box sx={{ width: "80vw", height: "80vh", display: "flex", 
        justifyContent: "flex-start", alignItems: "center", flexDirection: "column", 
        marginTop: 5, mb:6, boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"}}>
          <div className="budget">
          <h3>Budgeting Application</h3>
          <p>Java Spring Boot, Chart.js, Material UI</p>

          </div>

        <video src={budgetFinal} height={450} autoPlay={true} loop={true} />
         
          </Box>

          <div>
            <button 
            className="contactButton aboutButton"
            onClick={navToAbout}>About Page</button>
          </div>

        </Box>
        <Footer/>
        
        </>
    )
}

export default Work; 