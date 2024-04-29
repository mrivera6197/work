import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import budget from '../images/dashFinal.mp4'
import lemoncub from '../images/calm.mp4';
import termVid from '../images/termVid.mp4';
import pythonApp from '../images/pythonApp.mp4';
import resume from '../images/resume.mp4'; 
import  movieApp from '../images/movieOld.mp4';
import { useEffect, useState } from 'react';

const Projects = ({lightMode, setSelectedProject}) => {
    const [anchorEl, setAnchorEl] = useState(null); 
    const [videoPopup, setVideoPopup] = useState(null); 

    useEffect(() => {
        if(videoPopup) {
            setSelectedProject(true); 
        }
    }, [videoPopup])

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
            <Grid xs={videoPopup && videoPopup === termVid ? 6 : ( !videoPopup ? 2 : 1)} style={{height:"15vh", marginTop: videoPopup && videoPopup === termVid ? '20%' :"10%", background: videoPopup && videoPopup !== termVid ? 'none' : (lightMode ? '#FBFBFB' : ''),
                borderRadius:'8px', display:"flex", flexDirection:'column', alignItems:"center", justifyContent:"center",
                }}
                onMouseEnter={(e) => {
                    setAnchorEl(e.currentTarget)
                    setVideoPopup(termVid)
                }}
                onMouseLeave={()=> {
                    setAnchorEl(null)
                    setVideoPopup(null)
                }}
            >
                {
                    !videoPopup ? (
                        <Typography style={{color: lightMode ? '#151616' : '#FBFBFB', fontSize:16,  fontFamily: '"Nunito Sans", sans-serif'
                        ,fontWeight:'bold', textDecoration:"underline"}}>Music App</Typography>
                    ) : videoPopup === termVid && (
                        <video src={videoPopup} muted height={350} autoPlay={true} loop={true} 
                        style={{borderRadius:"8px"}}/> 
                    )
                }
            </Grid>
            <Grid xs={videoPopup && videoPopup === budget ? 6 : ( !videoPopup ? 2 : 1)} style={{height:"15vh",  marginTop: videoPopup && videoPopup === budget ? '35%' :"45%", background: videoPopup && videoPopup !== 'hi' ? 'none' : (lightMode ? '#FBFBFB' : ''),
            borderRadius:'8px', display:"flex", flexDirection:'column', alignItems:"center",justifyContent:"center"
                }}
                onMouseEnter={(e) => {
                    setAnchorEl(e.currentTarget)
                    setVideoPopup(budget)
                }}
                onMouseLeave={()=> {
                    setAnchorEl(null)
                    setVideoPopup(null)
                }}
            >
                {
                    !videoPopup ? (
                        <Typography style={{color: lightMode ? '#151616' : '#FBFBFB', fontSize:16,  fontFamily: '"Nunito Sans", sans-serif'
                        ,fontWeight:'bold', textDecoration:"underline"}}>Budgeting App</Typography>
                    ) : videoPopup === budget && (
                        <video src={videoPopup} muted height={350} autoPlay={true} loop={true} style={{borderRadius:'8px'}} /> 
                    )
                }
               
            </Grid>
            <Grid xs={videoPopup && videoPopup === lemoncub ? 6 : ( !videoPopup ? 2 : 1)} style={{height:"15vh",  marginTop: videoPopup && videoPopup === lemoncub ? '20%' :"22%", background: videoPopup && videoPopup !== lemoncub ? 'none' : (lightMode ? '#FBFBFB' : ''),
            borderRadius:'8px', display:"flex", flexDirection:'column', alignItems:"center",justifyContent:"center"
                    }}
                    onMouseEnter={(e) => {
                        setAnchorEl(e.currentTarget)
                        setVideoPopup(lemoncub)
                    }}
                    onMouseLeave={()=> {
                        setAnchorEl(null)
                        setVideoPopup(null)
                    }}
                >
                    {
                        !videoPopup ? (
                            <Typography style={{color: lightMode ? '#151616' : '#FBFBFB', fontSize:16,  fontFamily: '"Nunito Sans", sans-serif'
                            ,fontWeight:'bold', textDecoration:"underline"}}>lemoncub</Typography>
                        ) : videoPopup === lemoncub && (
                            <video src={videoPopup} muted height={400} autoPlay={true} loop={true} style={{borderRadius:'8px'}}/> 
                        )
                    }
            </Grid>
            <Grid xs={videoPopup && videoPopup === resume ? 6 : ( !videoPopup ? 2 : 0)} style={{height:"15vh",  marginTop: videoPopup && videoPopup === resume ? '60%' :"70%", background: videoPopup && videoPopup !== resume ? 'none' : (lightMode ? '#FBFBFB' : ''),
            borderRadius:'8px', display:"flex", flexDirection:'column', alignItems:"center",justifyContent:"center",
                }}
                onMouseEnter={(e) => {
                    setAnchorEl(e.currentTarget)
                    setVideoPopup(resume)
                }}
                onMouseLeave={()=> {
                    setAnchorEl(null)
                    setVideoPopup(null)
                }}
            >
                {
                    !videoPopup ? (
                        <Typography style={{color: lightMode ? '#151616' : '#FBFBFB', fontSize:16,  fontFamily: '"Nunito Sans", sans-serif'
                        ,fontWeight:'bold', textDecoration:"underline"}}>Old Resume</Typography>
                    ) : videoPopup === resume && (
                        <video src={videoPopup} muted height={400} autoPlay={true} loop={true} style={{borderRadius:'8px'}}/> 
                    )
                }
            </Grid> 
            <Grid xs={videoPopup && videoPopup === pythonApp ? 6 : ( !videoPopup ? 2 : 0)} style={{height:"15vh",  marginTop: videoPopup && videoPopup === pythonApp ? '50%' :"50%", background: videoPopup && videoPopup !== pythonApp ? 'none' : (lightMode ? '#FBFBFB' : ''),
            borderRadius:'8px', display:"flex", flexDirection:'column', alignItems:"center",justifyContent:"center", 
                }}
                onMouseEnter={(e) => {
                    setAnchorEl(e.currentTarget)
                    setVideoPopup(pythonApp)
                }}
                onMouseLeave={()=> {
                    setAnchorEl(null)
                    setVideoPopup(null)
                }}
            >
                {
                    !videoPopup ? (
                        <Typography style={{color: lightMode ? '#151616' : '#FBFBFB', fontSize:16,  fontFamily: '"Nunito Sans", sans-serif'
                        ,fontWeight:'bold', textDecoration:"underline"}}>Gene Computation</Typography>
                    ) : videoPopup === pythonApp && (
                        <video src={videoPopup} muted height={300} autoPlay={true} loop={true} style={{borderRadius:'8px'}}/> 
                    )
                }
            </Grid> 
            <Grid xs={videoPopup && videoPopup === movieApp ? 6 : ( !videoPopup ? 2 : 0)} style={{height:"15vh", marginTop:"30%", background: videoPopup && videoPopup !== movieApp ? 'none' : (lightMode ? '#FBFBFB' : ''),
            borderRadius:'8px', display:"flex", flexDirection:'column', alignItems:"center",justifyContent:"center", 
            marignRight: videoPopup && videoPopup === movieApp ? '5rem' : ''
                }}
                onMouseEnter={(e) => {
                    setAnchorEl(e.currentTarget)
                    setVideoPopup(movieApp)
                }}
                onMouseLeave={()=> {
                    setAnchorEl(null)
                    setVideoPopup(null)
                }}
            >
                {
                    !videoPopup ? (
                        <Typography style={{color: lightMode ? '#151616' : '#FBFBFB', fontSize:16,  fontFamily: '"Nunito Sans", sans-serif'
                        ,fontWeight:'bold', textDecoration:"underline"}}>Movie App</Typography>
                    ) : videoPopup === movieApp && (
                        <video src={videoPopup} muted height={400} autoPlay={true} loop={true} style={{borderRadius:'8px'}}/> 
                    )
                }
            </Grid> 

            </Grid>

            </div>
    )
}

export default Projects; 