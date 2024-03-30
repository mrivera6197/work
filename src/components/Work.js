import { Typography } from "@mui/material";
import Box from "@mui/material/Box"
import vid from "../images/css.mp4"
import calm from "../images/calm.mp4"
import budgetFinal from "../images/dashFinal.mp4"
import generator from "../images/generator.mp4"
import movie from '../images/movieApp.mp4'
import Footer from "./Footer"
import React from 'react'; 



const Work = () => {

    return (
        <>
        <Box sx={{ 
          width: "100%", 
          display: "flex", 
           justifyContent: "flex-start", 
           alignItems: "center", 
           flexDirection: "column", 
            marginTop: 10, 
            pl: "20", 
            padding: 2,
            marginBottom: 20, 
            }}>
          <Box 
          sx={{ 
            width: "80%", 
            display: "flex", 
            justifyContent: "flex-start", 
            alignItems: "center", 
            flexDirection: "column", 
            marginTop: 10,
            }}>
            <Box sx={{
              padding: 2,
            }}>
            <Typography sx={{
              margin:1,
              fontFamily: '"Baloo Chettan 2", sans-serif;',
              color: 'rgba(7, 8, 8, 0.8)', 
              fontWeight: 'bold', 
              fontSize: 25, 
              animation: 'twistIn 1s ease-in-out forwards',
              transformStyle: 'preserve3d;',
              transition: 'transform 0.5s;',
              '&:hover': {
                animation: 'twistIn 1s ease-in-out forwards',
              }
            }}>
              Welcome to the Work Page!
              </Typography>
              <Typography sx={{
                    fontFamily: '"Baloo Chettan 2", sans-serif;',
                    fontWeight: 'bold',
                    color: 'rgba(7, 8, 8, 0.8)', 
                }}>  
                This page showcases design, css, and React.js skills.
                </Typography>
                <Typography 
                    sx={{
                        fontFamily: '"Baloo Chettan 2", sans-serif;',
                        color: 'rgba(7, 8, 8, 0.8)', 
                        marginBottom: 5, 
                    }}> 
                    Scroll to See Portfolio Site 
                    </Typography>
            </Box>
            <Box sx={{
            }} className="portfolio reveal">
              <video src={vid} height={570} autoPlay={true} loop={true} />
            </Box>
          </Box>

          <Box sx={{ 
            width: "80%", 
            marginTop: 15,  
            display: "flex", 
            flexDirection: "column",
            justifyContent: "space-around", 
            alignItems: "center",
            padding: 10
            }}>
          <div className="leftShow reveal">
          <Typography
                sx={{
                  fontFamily: '"Baloo Chettan 2", sans-serif;',
                  color: 'rgba(7, 8, 8, 0.8)', 
                  marginBottom: 5, 
                  fontSize: 25,
                  fontWeight: 'bold', 
              }}
          >Keyframe Animations</Typography>
              <video src={calm} height={550} autoPlay={true} loop={true}  
               className=""/>

          </div>
          <div className="rightShow reveal">
            <Typography
                 sx={{
                  fontFamily: '"Baloo Chettan 2", sans-serif;',
                  color: 'rgba(7, 8, 8, 0.8)', 
                  marginBottom: 5, 
                  fontSize: 25,
                  fontWeight: 'bold', 
              }}
            >Random Generation</Typography>
              <video src={generator} height={600} autoPlay={true} loop={true}  
               className=""/>

          </div>
          </Box>
          <Box 
          sx={{ 
            width: "80vw", 
            display: "flex", 
            justifyContent: "flex-start", 
            alignItems: "center", 
            flexDirection: "column",
            marginTop: 10, 
            mb:10, 
            padding: 5, 
          }}
        className='reveal'>
          <div className="budget">
          <Typography
                sx={{
                  fontFamily: '"Baloo Chettan 2", sans-serif;',
                  color: 'rgba(7, 8, 8, 0.8)', 
                  marginBottom: 5, 
                  fontSize: 25,
                  fontWeight: 'bold', 
              }}
          >Budgeting Application</Typography>
          <Typography
                sx={{
                  fontFamily: '"Baloo Chettan 2", sans-serif;',
                  color: 'rgba(7, 8, 8, 0.8)', 
                  marginBottom: 5, 
                  fontSize: 20,
              }}
          >Java Spring Boot, Chart.js, Material UI</Typography>
          </div>
        <video src={budgetFinal} height={450} autoPlay={true} loop={true} />
          </Box>
          <Box sx={{ 
            width: '80vw', 
            height: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
             marginTop: '5rem', 
             marginBottom: 10}}>
            <Box className='movieApp reveal' sx={{
              marginBottom: 10, 
            }}>
              <Box sx={{ marginBottom: 5}}>
              <Typography 
                sx={{
                  fontFamily: '"Baloo Chettan 2", sans-serif;',
                  color: 'rgba(7, 8, 8, 0.8)', 
                  marginBottom: 5, 
                  fontSize: 25,
                  fontWeight: 'bold', 
              }}
              >Movie Application</Typography>
              <Typography
                sx={{
                  fontFamily: '"Baloo Chettan 2", sans-serif;',
                  color: 'rgba(7, 8, 8, 0.8)', 
                  fontSize: 20,
              }}
              >Node.js and MongoDB for data persistence</Typography>
              <Typography
                sx={{
                  fontFamily: '"Baloo Chettan 2", sans-serif;',
                  color: 'rgba(7, 8, 8, 0.8)', 
                  fontSize: 20,
              }}
              >Express, Google Cloud to store images</Typography>
              </Box>

              <video src={movie} height={650} autoPlay={true} loop={true} ></video>
            </Box>

          </Box>

        </Box>
        <Footer/>
        
        </>
    )
}

export default Work; 