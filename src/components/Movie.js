
import { useState, useEffect, forwardRef } from 'react';
import { Box,Popper, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import axios from 'axios'
import ReplayIcon from '@mui/icons-material/Replay';

const Movie = forwardRef(({ lightMode }, ref) => {
    const [movies, setMovies] = useState(null); 
    const [randomMovies, setRandomMovies] = useState(null); 
    const [anchorEl, setAnchorEl] = useState(null);
    const [moviePopup, setMoviePopup] = useState(null); 
    const [selectedMovie, setSelectedMovie] = useState(null); 
    const [loading, setLoading] = useState(false); 

    let lastScrollTop = 0;
    const float = () => {
      try {
      let currentScroll = window.scrollY;
      const floatElement = document.getElementById("float");
      if (currentScroll > lastScrollTop){
        setTimeout(() => {
        //   floatElement.style.transitionDelay = "0.25s"; 
        //   floatElement.style.transform = "translate(0, 1%)"; 
        }, 500); 
      } else {
        setTimeout(() => {
        //   floatElement.style.transitionDelay = "0.25s"; 
        //   floatElement.style.transform = "translate(0, -1%)"; 
        }, 500); 
      }
      lastScrollTop = currentScroll;
      } catch (e) {
        console.log("Error", e)
      }
    }
  
    window.addEventListener("scroll", float);

    const fetchMovies = async () => {
        try {
            const res = await axios.get(`https://imdb-top-100-movies.p.rapidapi.com/`, {
                headers:{
                    'X-RapidAPI-Key': '512e1c561bmsh61623a702d07254p129010jsna80a555677b5',
                    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
                }
            })
            setMovies(res.data)
        } catch (e) {
            console.log("Error fetching movie data", e)
        }
    }

    const fetchMovieById = async (movieId) => {
        try {
            const res = await axios.get(`https://imdb-top-100-movies.p.rapidapi.com/${movieId}`, {
                headers:{
                    'X-RapidAPI-Key': '512e1c561bmsh61623a702d07254p129010jsna80a555677b5',
                    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
                }
            })
            return res.data; 
        } catch (e) {
            console.log("Error fetching movie data", e)
        }
    }

    const handleMovieClick = (arr) => {
        if (selectedMovie && selectedMovie === arr) {
            setSelectedMovie(null); 
        } else {
            setSelectedMovie(arr);
        }
        setLoading(true); 
        setTimeout(() => {
            setLoading(false); 
          }, 1000); 

    }

    const shuffleMovies = async () => {
        if (movies && movies.length > 0) {
            const shuffledItems = movies.sort(() => Math.random() - 0.5);
            let start = 0; 
            let end = 5; 
            const subArr = []; 
            for (let i =0; i < 4 ;i++) {
                const subsetArr = shuffledItems.slice(start,end);
                let increase = Math.floor(Math.random() * 3) + 4
                start += 6; 
                end += increase; 
                subArr.push(subsetArr)
            }
            setRandomMovies(subArr); 
        }
    }

    useEffect(() => {
        shuffleMovies(); 
    }, [movies])



    useEffect(()=> {
        fetchMovies();
    }, [])

    useEffect(() => {
    }, [anchorEl])

    useEffect(() => {
        console.log("pop up", moviePopup)
    }, [moviePopup])

    const reveal = () => {
        var reveals = document.querySelectorAll(".reveal");
        
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
      window.addEventListener("scroll", reveal)

    return (
        <Box style={{ display:'flex', flexDirection: 'column', alignItems:'center', width: '95%', height: '100vh', borderRadius:'8px'}}
        className={lightMode ? 'musicContainer reveal' : 'musicContainerDark'} ref={ref}
        >
            <Grid container spacing={2} style={{width: '95%', height: '100%', display:'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center'}}>
            <Grid xs={12}  style={{boxShadow: 'rgba(0, 0, 0, 0.08) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'}} id='float'>
               <Grid xs={12} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Button style={{ color:'#151616'}} onClick={shuffleMovies}>
                        <ReplayIcon style={{ color: lightMode ?'#414343d7': 'rgba(196, 196, 187, 0.93)'}} fontSize='small'/>
                        </Button>
               </Grid>
                {randomMovies && (
                    randomMovies.map(subArr => (
                        <Grid xs={12} style={{ 
                            margin: 25, 
                            }}
                            className="movieRow"
                            >
                            {subArr.map(arr => (
                                <Box style={{width: '15%', height: '100%', margin: 15, 
                                border:moviePopup && (arr.id != moviePopup.id) ? '' : '0.8px solid grey', borderRadius:'8px', display:'flex', justifyContent:'center'}}
                                className='movieImg'
                                aria-haspopup="true"
                                onMouseEnter={(e) => {
                                    setAnchorEl(e.currentTarget)
                                    setMoviePopup(arr)
                                }}
                                onMouseLeave={()=> {
                                    setAnchorEl(null)
                                    setSelectedMovie(null)
                                    setMoviePopup(null)
                                 }}
                                >
                                <Box 
                                style={{backgroundImage:`url(${arr.image})`, backgroundPosition:'cover', backgroundSize:'100%', 
                                 width:'100%', height:'100%', borderRadius:'8px', 
                                 opacity: moviePopup && (arr.id != moviePopup.id) ? '0.3' : (lightMode ? '0.8' : '0.4'),
                                 transition:'1s ease',
                                 filter: !lightMode && moviePopup && (arr.id != moviePopup.id) ? 'brightness(5%)' : '',
                                }}
                                onClick={() => handleMovieClick(arr)}
                                 >
                                 </Box>
                                 <Popper
                                open={Boolean(anchorEl)}
                                anchorEl={anchorEl}
                                onClose={() => setAnchorEl(null)}
                                placement="right-start"
                            >
                                <Box style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',
                                background:'#FBFBFB', padding: selectedMovie ? 5 : 10, width: selectedMovie ? '30%': '90%', borderRadius:'8px', textAlign:'center',
                                border:'1px solid pink'
                            }} >
                                    <Typography style={{ fontWeight:'bold', marginBottom:2, 
                                        color:'#151616', fontSize:12,  fontFamily: '"Nunito Sans", sans-serif'}} className='opacity'>{moviePopup ? moviePopup.title : ''}</Typography>
                                        {selectedMovie && (
                                            <Box style={{width:"60%", marginBottom:2 }} className='opacity'>
                                            <Typography style={{color:'#151616', fontSize:12,  fontFamily: '"Nunito Sans", sans-serif'}}>{selectedMovie ? selectedMovie.description : ''}</Typography>
                                            </Box>
                                        )}
                                    <Typography style={{color:'#151616', fontSize:12,  fontFamily: '"Nunito Sans", sans-serif', marginBottom:2}} className='opacity'>{moviePopup ? `Rating: ${moviePopup.rating}` : ''}</Typography>
                                </Box>

                            </Popper>
                                </Box>
                            ))}
                        </Grid>
                    ))
                )} 
            </Grid>
            </Grid>
        </Box>
    )

})

export default Movie; 