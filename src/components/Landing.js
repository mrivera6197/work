import { Typography, Box } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { homeData } from './dummyData';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import Questions from './Questions';
import Projects from './Projects';
import LinearProgress from '@mui/material/LinearProgress';
import Movie from './Movie';

const Landing = () => {
    const [section, setSection] = useState('home'); 
    const [lightMode, setLightMode] = useState(false);
    const [loaded, setLoaded] = useState(false); 
    const [selectedProject, setSelectedProject] = useState(false); 
    const targetRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
          setLoaded(true);
        }, 3000); 
      }, []);

    const scrollToMovies = () => {
        if (targetRef.current) {
            console.log("target", targetRef)
            targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
    };

    return ( <>
    {!loaded ? (
            <Box
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', 
            height: '100vh', color:'white', width: '100%', background: '#151616'}} 
            >
                <Box style={{width: '90%', height: '90vh', justifyContent: 'center', display: 'flex',
            flexDirection: 'column', alignItems:"center"}} className='loadingDiv'>
                    <LinearProgress  
                    style={{ margin: 10, width: "25%" }}
                    color='secondary'/>
                </Box>
            
            </Box>
        ) : ( 
        <Grid container spacing={2} 
        style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            borderRadius: '8px',
            background: !loaded ? '#151616' : (lightMode ? '#FBFBFB' : '#151616'),
            }}>
            <Grid xs={12} style={{display:"flex", flexDirection: 'column', alignItems:'flex-end',
            justifyContent: 'center', width: '100%'}}>
                    <button style={{margin:5, marginRight: 10, border: 'none', background:'none'}} onClick={() => setLightMode(!lightMode)}>{
                        lightMode ? <Brightness1Icon fontSize='small' style={{color:'rgba(26, 26, 26, 0.851)'}}/> : <WbSunnyIcon fontSize='small' style={{color:'rgba(196, 196, 187, 0.93)'}}/>
                    }</button>
                    <Grid xs={12} style={{ 
                            height: '100vh', 
                            display: 'flex',
                            justifyContent: 'center', 
                            alignItems: 'center',
                            width: '100%',
                            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
                            background: lightMode ? '#FBFBFB' : '#181818',
                            borderRadius: '8px',
                            margin: 5,                            
                            }}
                            className="landingContainer"
                            >
                        <Grid xs={12} style={{  
                            marginTop:0,
                            margin: 20, 
                            width: '100%', 
                            height: '93vh',
                            boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 0px 1px',
                            display: 'flex',
                            justifyContent: 'center',
                            borderRadius: '8px',
                            }}
                            className={lightMode ? 'backdrop' : 'backdropDark'}
                            >
    
                        <Grid xs={4} style={{ width: '40%'}}>
                            <div style={{
                                display:'flex', 
                                flexDirection: 'column',
                                justifyContent: 'center', 
                                alignItems: 'flex-start', 
                                boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
                                margin: '4rem',
                                }}>
                            <Typography 
                            style={{fontSize:'2rem', 
                            fontFamily: '"Nunito Sans", sans-serif',
                            color: lightMode ? 'rgba(26, 26, 26, 0.851)' : 'rgba(196, 196, 187, 0.93)',
                            animation: 'twistIn 1s ease-in-out forwards',
                            transformStyle: 'preserve3d;',
                            transition: 'transform 0.5s;',
                            '&:hover': {
                              animation: 'twistIn 1s ease-in-out forwards',
                            }
                        }}
                            >Mali Rivera</Typography>
                            <Typography 
                            style={{fontSize:'16px', fontFamily: '"Nunito Sans", sans-serif',  color: lightMode ? 'rgba(26, 26, 26, 0.851)' : 'rgba(196, 196, 187, 0.93)',  animation: 'fadeIn 2s ease-in-out forwards',}}
                            >Designer & Software Engineer</Typography>
                            </div>
                            <div style={{
                                display:'flex',
                                flexDirection:'column',
                                justifyContent:'center',
                                alignItems:'flex-start',
                                margin:"4rem",
                                marginTop: '2rem',
                                height:'20vh',
                                borderRadius: '8px',
                                animation: 'fadeIn 2s ease-in-out forwards',
                                }}>
                                <div style={{
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent:'center',
                                    width: '50%',
                                }}>
                                    <button style={
                                        {width: '50%', 
                                        fontSize:'16px',
                                        background: 'none', 
                                        border: 'none',
                                        padding: 5, 
                                        margin: 5, 
                                        fontWeight: 'bold',
                                        fontFamily: '"Nunito Sans", sans-serif',
                                        '&:hover': {
                                            color: 'blue'
                                        }
                                        }} 
                                        className={lightMode ? 'landingButton' : 'landingButtonDark'}
                                        onClick={() => setSection('home')}
                                        >Home</button>
                                    <button style={
                                        {width: '50%', 
                                        fontSize:'16px',
                                        background: 'none', 
                                        border: 'none',
                                        padding: 5, 
                                        margin: 5, 
                                        fontWeight: 'bold',
                                        fontFamily: '"Nunito Sans", sans-serif'
                                        }}
                                        className={lightMode ? 'landingButton' : 'landingButtonDark'}
                                        onClick={scrollToMovies}
                                        >Movies</button>
                                    <button style={
                                        {width: '50%', 
                                        fontSize:'16px',
                                        border: 'none',
                                        color: lightMode ? '#292826' : '#E9E9E1',
                                        background: 'none', 
                                        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
                                        margin: 5, 
                                        fontWeight: 'bold',
                                        fontFamily: '"Nunito Sans", sans-serif'
                                        }}
                                        className={lightMode ? 'landingButton' : 'landingButtonDark'}
                                        onClick={() => setSection('projects')}
                                        >Projects</button>
                                    <button style={
                                        {width: '50%', 
                                        fontSize:'16px',
                                        border: 'none',
                                        color: lightMode ? '#292826' : '#E9E9E1',
                                        background: 'none', 
                                        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
                                        margin: 5, 
                                        fontWeight: 'bold',
                                        fontFamily: '"Nunito Sans", sans-serif'
                                        }}
                                        className={lightMode ? 'landingButton' : 'landingButtonDark'}
                                        onClick={() => setSection('questions')}
                                        >Qs</button>
                                </div>
                            </div>
                        </Grid>
    
                            {section && section === 'home' ? (
                            <Grid xs={6} 
                            style={{ width: '60%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            justifyContent:'flex-end',
                            }}>
                                <div style={{ 
                                    width: '80%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    justifyContent:'flex-end',
                                    fontSize: '16px',
                                    overflow:'hidden',
                                    margin:'4rem',
                                }} >
                                        <div style={{
                                            width: '21%', padding: 15, 
                                            display: 'flex', justifyContent:'center', alignItems: 'flex-end'
                                            , textAlign: 'left',
                                            background: lightMode ? '#fff' : 'none',
                                            overflow:'hidden',
                                            borderRadius:'8px',
                                            animation: 'fadeIn 1s ease-in-out forwards',
                                            }}>
                                        {section && section === 'home' && (
                                        homeData[0].bio.map((line ) => (
                                            <Typography style={{
                                                 lineHeight:'1.3rem',
                                                 fontSize: '16px',
                                                 fontFamily: '"Nunito Sans", sans-serif',
                                                 color: lightMode ? 'rgba(26, 26, 26, 0.851)' : 'rgba(196, 196, 187, 0.93)',
                                                }}>{line}</Typography>
                                        ))
                                    )} 
    
                                        </div>
                                </div>
                                </Grid>
                            ): null}
    
                            {section && section === 'questions' ? (
                                <Grid xs={6} style={{display:'flex',
                                justifyContent:'center', alignItems: 'flex-start', width: '60%'
                                }}
                                >
                                 <Questions lightMode={lightMode}/>
                                </Grid>
    
                            ): <></>}
                            {section && section === 'projects' ? (
                                <Grid xs={6} style={{display:'flex',
                                justifyContent:'center', alignItems: 'flex-start', width: '60%',}}>
                                 <Projects lightMode={lightMode} setSelectedProject={setSelectedProject}/>
                                </Grid>
    
                            ): <></>}
    
                           
                    </Grid>
                    </Grid>
    
                </Grid>
                <Movie lightMode={lightMode} ref={targetRef}/>
        </Grid>
        )}
            </>
        )
}

export default Landing; 