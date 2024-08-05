import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import budget from '../images/dashFinal.mp4'
import lemoncub from '../images/calm.mp4';
import termVid from '../images/termVid.mp4';
import pythonApp from '../images/pythonApp.mp4';
import resume from '../images/resume.mp4'; 
import  movieApp from '../images/movieOld.mp4';
import { useState } from 'react';
import { useDarkModeContext } from '../hooks/DarkModeProvider';

const Projects = () => {
    const [videoPopup, setVideoPopup] = useState(null); 
    const { isDarkMode } = useDarkModeContext(); 

    return (
        <div 
        style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        width:'100%',
        height:'90vh',
        filter: videoPopup ? 'brightness(80%)' : ''
        }}>
            <Grid container spacing={2} style={{width:'100%', height:'100%'}}> 
            <Grid xs={videoPopup && videoPopup === termVid ? 6 : ( !videoPopup ? 2 : 1)} style={{height:"15vh", marginTop: videoPopup && videoPopup === termVid ? '20%' :"10%", background: videoPopup && videoPopup !== termVid ? 'none' : (!isDarkMode ? '#FBFBFB' : ''),
                borderRadius:'8px', display:"flex", flexDirection:'column', alignItems:"center", justifyContent:"center",
                }}
                onMouseEnter={(e) => {
                    setVideoPopup(termVid)
                }}
                onMouseLeave={()=> {
                    setVideoPopup(null)
                }}
            >
                {
                    !videoPopup ? (
                        <Typography style={{color: !isDarkMode ? '#151616' : '#FBFBFB', fontSize:16,  fontFamily: '"Nunito Sans", sans-serif'
                        ,fontWeight:'bold', textDecoration:"underline"}}>Music App</Typography>
                    ) : videoPopup === termVid && (
                        <div style={{fontSize:16,  fontFamily: '"Nunito Sans", sans-serif'}}>
                        <video src={videoPopup} muted height={350} autoPlay={true} loop={true} 
                        style={{borderRadius:"8px"}}/> 
                        <div style={{color: !isDarkMode ? '#151616' : '#FBFBFB' }}>
                            <h3>Music Playlist App Designed for Runners </h3>
                            <p>Front-end React App inteacting with spotify and Geolocation APIs </p>
                            <p>Material UI components</p>
                        </div>
                        </div>
                        
                    )
                }
            </Grid>
            <Grid xs={videoPopup && videoPopup === budget ? 6 : ( !videoPopup ? 2 : 1)} style={{height:"15vh",  marginTop: videoPopup && videoPopup === budget ? '35%' :"45%", background: videoPopup && videoPopup !== 'hi' ? 'none' : (!isDarkMode ? '#FBFBFB' : ''),
            borderRadius:'8px', display:"flex", flexDirection:'column', alignItems:"center",justifyContent:"center"
                }}
                onMouseEnter={(e) => {
                    setVideoPopup(budget)
                }}
                onMouseLeave={()=> {
                    setVideoPopup(null)
                }}
            >
                {
                    !videoPopup ? (
                        <Typography style={{color: !isDarkMode ? '#151616' : '#FBFBFB', fontSize:16,  fontFamily: '"Nunito Sans", sans-serif'
                        ,fontWeight:'bold', textDecoration:"underline"}}>Budgeting App</Typography>
                    ) : videoPopup === budget && (
                        <div style={{fontSize:16,  fontFamily: '"Nunito Sans", sans-serif'}}>
                        <video src={videoPopup} muted height={350} autoPlay={true} loop={true} style={{borderRadius:'8px'}} /> 
                        <div style={{color: !isDarkMode ? '#151616' : '#FBFBFB' }}>
                        <h3>Budgeting App</h3>
                        <p>Java Spring Boot and MariaDB backend, React frontend</p>
                         <p>Material UI components, Chart JS visualizations</p>
                        </div>
                        </div>
                    )
                }
               
            </Grid>
            <Grid xs={videoPopup && videoPopup === lemoncub ? 6 : ( !videoPopup ? 2 : 1)} style={{height:"15vh",  marginTop: videoPopup && videoPopup === lemoncub ? '20%' :"22%", background: videoPopup && videoPopup !== lemoncub ? 'none' : (!isDarkMode ? '#FBFBFB' : ''),
            borderRadius:'8px', display:"flex", flexDirection:'column', alignItems:"center",justifyContent:"center"
                    }}
                    onMouseEnter={(e) => {
                        setVideoPopup(lemoncub)
                    }}
                    onMouseLeave={()=> {
                        setVideoPopup(null)
                    }}
                >
                    {
                        !videoPopup ? (
                            <Typography style={{color: !isDarkMode ? '#151616' : '#FBFBFB', fontSize:16,  fontFamily: '"Nunito Sans", sans-serif'
                            ,fontWeight:'bold', textDecoration:"underline"}}>lemoncub</Typography>
                        ) : videoPopup === lemoncub && (
                            <div style={{fontSize:16,  fontFamily: '"Nunito Sans", sans-serif'}}>
                            <video src={videoPopup} muted height={400} autoPlay={true} loop={true} style={{borderRadius:'8px'}}/> 
                            <div style={{color: !isDarkMode ? '#151616' : '#FBFBFB' }}>
                                <h3>Artist Portfolio App</h3>
                                <p>Front-end React App focused on design, transitions, and animations</p>
                                <p>built from scratch</p>
                            </div>    
                            </div>
                        )
                    }
            </Grid>
            <Grid xs={videoPopup && videoPopup === resume ? 6 : ( !videoPopup ? 2 : 0)} style={{height:"15vh",  marginTop: videoPopup && videoPopup === resume ? '60%' :"70%", background: videoPopup && videoPopup !== resume ? 'none' : (!isDarkMode ? '#FBFBFB' : ''),
            borderRadius:'8px', display:"flex", flexDirection:'column', alignItems:"center",justifyContent:"center",
                }}
                onMouseEnter={(e) => {
                    setVideoPopup(resume)
                }}
                onMouseLeave={()=> {
                    setVideoPopup(null)
                }}
            >
                {
                    !videoPopup ? (
                        <Typography style={{color: !isDarkMode ? '#151616' : '#FBFBFB', fontSize:16,  fontFamily: '"Nunito Sans", sans-serif'
                        ,fontWeight:'bold', textDecoration:"underline"}}>Old Resume</Typography>
                    ) : videoPopup === resume && (
                        <video src={videoPopup} muted height={400} autoPlay={true} loop={true} style={{borderRadius:'8px'}}/> 
                    )
                }
            </Grid> 
            <Grid xs={videoPopup && videoPopup === pythonApp ? 6 : ( !videoPopup ? 2 : 0)} style={{height:"15vh",  marginTop: videoPopup && videoPopup === pythonApp ? '50%' :"50%", background: videoPopup && videoPopup !== pythonApp ? 'none' : (!isDarkMode ? '#FBFBFB' : ''),
            borderRadius:'8px', display:"flex", flexDirection:'column', alignItems:"center",justifyContent:"center", 
                }}
                onMouseEnter={(e) => {
                    setVideoPopup(pythonApp)
                }}
                onMouseLeave={()=> {
                    setVideoPopup(null)
                }}
            >
                {
                    !videoPopup ? (
                        <Typography style={{color: !isDarkMode ? '#151616' : '#FBFBFB', fontSize:16,  fontFamily: '"Nunito Sans", sans-serif'
                        ,fontWeight:'bold', textDecoration:"underline"}}>Gene Computation</Typography>
                    ) : videoPopup === pythonApp && (
                        <div style={{color: !isDarkMode ? '#151616' : '#FBFBFB' }}>
                        <video src={videoPopup} muted height={300} autoPlay={true} loop={true} style={{borderRadius:'8px'}}/> 
                        <div style={{color: !isDarkMode ? '#151616' : '#FBFBFB' }}>
                        <h3>Gene computation App</h3>
                        <p>Python, Matplotlib visualizations</p>
                        </div>
                        </div>
                    )
                }
            </Grid> 
            <Grid xs={videoPopup && videoPopup === movieApp ? 6 : ( !videoPopup ? 2 : 0)} style={{height:"15vh", marginTop:"30%", background: videoPopup && videoPopup !== movieApp ? 'none' : (!isDarkMode ? '#FBFBFB' : ''),
            borderRadius:'8px', display:"flex", flexDirection:'column', alignItems:"center",justifyContent:"center", 
            marignRight: videoPopup && videoPopup === movieApp ? '5rem' : ''
                }}
                onMouseEnter={(e) => {
                    setVideoPopup(movieApp)
                }}
                onMouseLeave={()=> {
                    setVideoPopup(null)
                }}
            >
                {
                    !videoPopup ? (
                        <Typography style={{color: !isDarkMode ? '#151616' : '#FBFBFB', fontSize:16,  fontFamily: '"Nunito Sans", sans-serif'
                        ,fontWeight:'bold', textDecoration:"underline"}}>Movie App</Typography>
                    ) : videoPopup === movieApp && (
                        <div style={{color: !isDarkMode ? '#151616' : '#FBFBFB' }}>
                        <video src={videoPopup} muted height={400} autoPlay={true} loop={true} style={{borderRadius:'8px'}}/>
                        <div>
                            <h3>Movie Application</h3>
                            <p>MongoDB, Mongoose, Express, and Node </p>
                        </div> 
                      </div>
                    )
                }
            </Grid> 

            </Grid>

            </div>
    )
}

export default Projects; 