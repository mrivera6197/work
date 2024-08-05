
import { useState, useEffect, forwardRef } from 'react';
import { Box,Popper, Button, Typography, Switch,  TextField,
    MenuItem, } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import axios from 'axios'
import ReplayIcon from '@mui/icons-material/Replay';
import 'chartjs-adapter-moment';
import { Line, Scatter } from 'react-chartjs-2'
import { useDarkModeContext } from '../hooks/DarkModeProvider';
import DatePicker  from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment'
import { makeStyles } from '@mui/styles'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
  } from 'chart.js';
import { DarkMode } from '@mui/icons-material';

  ChartJS.register(
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
    TimeScale,
    Title,
    Tooltip,
    Legend
  );

  const useStyles = makeStyles((theme) => ({
    datePicker: {
      padding: 0, 
      borderRadius: '10px',
      height: "22px",
      overflow: 'hidden',
      background: 'rgba(196, 196, 187, 0.3)'
    },
    chart: {
        width: '60%'
    },
    image: {
        borderRadius: '50%',
    }
  
  }));
  

const Movie = forwardRef(({ }, ref) => {
    const [movies, setMovies] = useState(null); 
    const [randomMovies, setRandomMovies] = useState(null); 
    const [anchorEl, setAnchorEl] = useState(null);
    const [moviePopup, setMoviePopup] = useState(null); 
    const [selectedMovie, setSelectedMovie] = useState(null); 
    const [loading, setLoading] = useState(false); 
    const [moviesByYear, setMoviesByYear] = useState(null); 
    const { isDarkMode, toggleDarkMode } = useDarkModeContext(); 
    const [togglePointStyle, setTogglePointStyle] = useState(false); 
    const [startYear, setStartYear] = useState(null); 
    const [endYear, setEndYear] = useState(null);
    const [animate, setAnimate] = useState(false); 
    const [filteredMovies, setFilteredMovies] = useState(null); 
    const classes = useStyles(); 

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

    // const updateYears = () => {
    //     if ( !startYear && !endYear ) {
    //         setStartYear(2000); 
    //         setEndYear(2024); 
    //     } else if (startYear === 2000 && endYear  === 2024) {
    //         setStartYear(1960); 
    //         setEndYear(2003); 
    //     } else {
    //         setStartYear(1990); 
    //         setEndYear(2024); 
    //     }
    // };

    // useEffect(() => {
    //     const intervalId = setInterval(updateYears, 1000); 

    //     return () => clearInterval(intervalId);
    // }, [animate]);

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
        if (moviesByYear) {
            let images = []; 
            moviesByYear.map((movie) => {
                images.push(movie.image)
               })
        }
    }, [moviesByYear])

    useEffect(() => {
        shuffleMovies(); 
        if (movies && movies.length > 0) {
            setMoviesByYear(movies); 
        }
    }, [movies])

    useEffect(() => {
        if (startYear && endYear) {
            let startDate = moment(startYear).format('YYYY'); 
            let endDate = moment(endYear).format('YYYY');
            const filteredMovies = movies.filter(movie => moment(movie.year, 'YYYY').isBetween(startDate, endDate,undefined, '[]')); 
            setMoviesByYear(filteredMovies); 
        }
    }, [startYear, endYear])



    useEffect(()=> {
        fetchMovies();
    }, [])

    useEffect(() => {
    }, [anchorEl])

    const getImg = (point) => {
        const image = moviesByYear ? moviesByYear[point.index]: ''; 
        const img = new Image(40,50); 
        img.src = (`${image.image}`)
        img.style.borderRadius = '50%'
        img.style.border = '1px solid blue'
        return img; 
    }

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

      const chartData = {
        datasets: [
            {
                label: 'Movie Rating',
                data: moviesByYear ? moviesByYear.map(movie => ({ x: moment(movie.year), y: movie.rating })) : null,
                backgroundColor: isDarkMode ? 'rgba(224, 235, 242,0.4)' : 'rgba(26, 26, 26, 0.3)',
                borderColor: isDarkMode ? 'rgba(224, 235, 242,1)' : 'rgba(26, 26, 26, 0.8)',
                pointRadius: togglePointStyle ? 15 : 5, 
                borderWidth: 1, 
                pointStyle: togglePointStyle ? getImg : 'circle', 
            }
        ]
      }

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Movie Ratings by Year',
            color: isDarkMode ? 'rgba(196, 196, 187, 0.93)' : 'rgba(26, 26, 26, 0.8)',
            font: {
                family: '"Nunito Sans", sans-serif',
                size: 18, 
            }
          },
          tooltip: {
            callbacks: {
                label: function(context) {
                    const dataIndex = context.dataIndex;
                    const movie = moviesByYear[dataIndex];
                    console.log("movie?", movie)
                    return `${movie.title} (${movie.year})`
                     
                },
                afterLabel: function(context) {
                    const dataIndex = context.dataIndex;
                    const movie = moviesByYear[dataIndex];
                    const toReturn = [
                        `Rating: ${movie.rating}`,
                        `Rank: ${movie.rank}`
                    ].join('\n')
                    return `${toReturn}`
                }
            }
          }
        },
        scales: {
            x: {
                callback: function(value, index, values) {
                    return value.toString();
                },
                ticks: {
                    color: isDarkMode ? 'rgba(196, 196, 187, 0.93)' : 'rgba(26, 26, 26, 0.6)',
                    font: {
                        family: '"Nunito Sans", sans-serif',
                        size: 14, 
                    }
                },
                padding: 10, 
                grid: {
                    color: isDarkMode ? 'rgba(196, 196, 187, 0.3)' : 'rgba(26, 26, 26, 0.3)'
                },
                display: true,
                title: {
                display: true,
                text: 'Year',
                color: isDarkMode ? 'rgba(196, 196, 187, 0.93)' : 'rgba(26, 26, 26, 0.6)',
                font: {
                    family: '"Nunito Sans", sans-serif',
                    size: 16, 
                    }
                },
            },
            y: {
                ticks: {
                    color: isDarkMode ? 'rgba(196, 196, 187, 0.93)' : 'rgba(26, 26, 26, 0.6)',
                    font: {
                        family: '"Nunito Sans", sans-serif',
                        size: 14, 
                    }
                },
                grid: {
                    color: isDarkMode ? 'rgba(196, 196, 187, 0.3)' : 'rgba(26, 26, 26, 0.3)'
                },
                display: true,
                min: 8,
                title: {
                display: true,
                text: 'Rating (1-10)',
                color: isDarkMode ? 'rgba(196, 196, 187, 0.93)' : 'rgba(26, 26, 26, 0.6)',
                font: {
                    family: '"Nunito Sans", sans-serif',
                    size: 16, 
                }
                }
            }   
        }
      }

    return (
        <>
        <Box style={{ display:'flex', flexDirection: 'column', alignItems:'center', width: '95%',borderRadius:'8px'}}
        className={!isDarkMode ? 'musicContainer reveal' : 'musicContainerDark'} ref={ref}
        >
            <Grid container spacing={2} style={{width: '95%', height: '100%', display:'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center'}}>
            <Grid xs={12}  style={{boxShadow: ''}} id='float'>
               <Grid xs={12} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Button style={{ color:'#151616'}} onClick={shuffleMovies}>
                        <ReplayIcon style={{ color: !isDarkMode ?'#414343d7': 'rgba(196, 196, 187, 0.93)'}} fontSize='small'/>
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
                                 opacity: moviePopup && (arr.id != moviePopup.id) ? '0.3' : ( !isDarkMode ? '0.8' : '0.4'),
                                 transition:'1s ease',
                                 filter: !!isDarkMode && moviePopup && (arr.id != moviePopup.id) ? 'brightness(5%)' : '',
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
        <Box style={{ display:'flex', flexDirection: 'column', alignItems:'center', width: '100%', height: '100vh', borderRadius:'8px'}}
        className={''} 
        >
        <Grid container spacing={2} style={{width: '85%', height: '100%', display:'flex', flexDirection: 'column', alignItems:'center', marginTop:50}}>
        <Grid className='reveal' xs={12} style={{display: 'flex', justifyContent: 'center', border: '1px solid rgba(196, 196, 187, 0.3)', alignItems: 'center', paddingBottom: 150}}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start',marginBottom: 100, marginRight: 50, }}>
        <Typography style={{fontFamily: '"Nunito Sans", sans-serif', fontWeight: 'bold', fontSize: 16, color: isDarkMode ? "rgba(196, 196, 187, 1)" : 'rgba(26, 26, 26, 0.8)'}}>Chart JS</Typography>
             <div style={{display: 'flex',marginTop: 100}}>
            <Switch 
                checked={togglePointStyle}
                onChange={() => setTogglePointStyle(!togglePointStyle)}
            />  
            </div> 
            <div style={{display: 'flex', flexDirection: 'column',}}>
            <div style={{display: 'flex', flexDirection: "column"}}>
            <Typography style={{fontFamily: '"Nunito Sans", sans-serif', fontSize: 14, marginTop:5, color: isDarkMode ? '#fff' : null}}>
                Start Year
              </Typography>
              <DatePicker
                selected={startYear}
                onChange={(date) => setStartYear(date)}
                dateFormat="yyyy"
                placeholderText="1930"
                isClearable
                className={classes.datePicker}
                InputProps={{ style: { padding: 0 } }}
                />
            </div>
            <div style={{display: 'flex', flexDirection: "column"}}>
              <Typography style={{fontFamily: '"Nunito Sans", sans-serif', fontSize: 14, marginTop:5, color: isDarkMode ? '#fff' : null}}>
                End Year
              </Typography>
              <DatePicker
                selected={endYear}
                onChange={(date) => setEndYear(date)}
                dateFormat="yyyy"
                placeholderText="2030"
                isClearable
                className={classes.datePicker}
                /> 
            </div> 
            </div>  
        </div>
        <div className={classes.chart} style={{ marginTop: 100}}>
        <Scatter data={chartData} options={options}/>;
        </div>
        </Grid>
        </Grid>
        </Box>
        </>
    )

})

export default Movie; 