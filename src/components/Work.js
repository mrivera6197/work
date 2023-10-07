import { Typography, Button } from "@mui/material";
import Box from "@mui/material/Box"
import vid from "../images/css.mp4"
import calm from "../images/calm.mp4"
import chartVid from "../images/chart.mp4"
import generator from "../images/generator.mp4"

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
        marginTop: 5, pl: "20" }}>

          <Box sx={{ width: "80%", height: "140vh", display: "flex", 
        justifyContent: "flex-start", alignItems: "center", flexDirection: "column", 
        marginTop: 5}}>
            <div className="workDiv">
              <h3>Welcome to the Work Page!</h3>
              <p>This page shows design, css, and React.js skills.</p>
            </div>
            <div className="portfolio reveal">
              <h3>Portfolio site built from scratch in React.js</h3>
              <p>highlights: Custom Cursor, Smooth Transitions, Design</p>
              <video src={vid} height={570} autoPlay={true} loop={true} />
            </div>

          </Box>

          <Box sx={{ width: "80%", height: "200vh", display: "flex", flexDirection: "column",
        justifyContent: "space-around", alignItems: "center", marginTop: 5}}>
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
        justifyContent: "center", alignItems: "center", flexDirection: "column", 
        marginTop: 5, border:1}}>

        <video src={chartVid} height={350}/>
         
          </Box>

          <div>
            <button
            onClick={navToAbout}>About Page</button>
          </div>

        </Box>
        
        </>
    )
}

export default Work; 