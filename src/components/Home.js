import { 
  Typography, 
  TextField, 
  Button,
  Dialog, 
  DialogActions, 
  DialogContent,
  DialogTitle,
  FormGroup, 
  MenuItem, 
 } from "@mui/material";
import Box from "@mui/material/Box"
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from "react"
import Feeling from "./Feeling"
import Data from "./Data"
import Footer from "./Footer"
import { data } from './dummyData'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import HeadphonesIcon from '@mui/icons-material/Headphones';

const Home = () => {
  const [rating, setRating] = useState("")
  const [feeling, setFeeling] = useState("")
  const [message, setMessage] = useState("")
  const [songs, setSongs] = useState(data)
  const [songModal, setSongModal] = useState(false); 
  const [songToEdit, setSongToEdit] = useState(null);
  const [songTitle, setSongTitle] = useState(null);  
  const [songArtist, setSongArtist] = useState(null); 
  const [songGenre, setSongGenre] = useState(null); 
  const [searchValue, setSearchValue] = useState(null); 

  const genreOptions = [
    'Rock', 'Indie Pop', 'Indie Rock', 'Alternative', 'Electronic', 'Folk', 'Pop', 'All'
  ]

    const theme = createTheme({
        palette: {
          primary: {
            main: "rgba(39, 124, 199, 0.8)"
          }, 
          secondary: {
            main: "rgba(39, 124, 199, 0.8)"
          }
        }, 
        typography: {
          fontSize: 16,
        },
        fontClass: {
          fontFamily: '"Baloo Chettan 2", sans-serif;',
          fontWeight: 'bold;'
        }
      })


    useEffect(() => {
      if (songToEdit) {
        setSongTitle(songToEdit.title)
        setSongArtist(songToEdit.artist)
        setSongGenre(songToEdit.genre)
      }
    }, [songToEdit])

    useEffect(() => {
      if (searchValue && searchValue.length > 2) {
        const songsCopy = [...data]; 
        const filteredSongs = songsCopy.filter(song => 
          song.title.toLowerCase().includes(searchValue.toLowerCase())); 
        setSongs(filteredSongs);   
      } else if ( searchValue && searchValue.length < 2) {
        const songsCopy = [...data];
        setSongs(songsCopy);   
      } else {
        const songsCopy = [...data];
        setSongs(songsCopy);   
      }
    }, [searchValue])

      const handleChange = (e, value) => {
        setRating(value)
      }

      const handleSubmit =  (e) => {
        e.preventDefault()
        determineRating(rating)
      }

      const determineRating = (rating) => {
        if (rating <= 30) {
          setFeeling("yikes")
          setMessage("that's okay, here's a cat. feel better")
        } else if ( rating >= 30 && rating <= 60) {
          setFeeling("okay")
          setMessage("nice, do something for you today")
        } else {
          setFeeling("happy")
          setMessage("happy to hear it, spread the love")
        }
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

      const handleSubmission = () => {
        if (songToEdit) {
          editSong(); 
        } else {
          addSong(); 
        }
      }

      const addSong = () => {
       const songsCopy = [...songs]; 
       const songToAdd = {
        title: songTitle, 
        artist: songArtist, 
        genre: songGenre, 
       }
       songsCopy.unshift(songToAdd); 
       setSongs(songsCopy); 
       handleClose(); 
      }

      const editSong = () => {
        const songsCopy = [...songs]; 
        const songIndex = songsCopy.findIndex((song) => song.title === songToEdit.title);
        const songUpdates = {
          title: songTitle, 
          artist: songArtist,
          genre: songGenre, 
         }
        if (songIndex !== -1) {
          songsCopy.splice(songIndex , 1);
          songsCopy.unshift(songUpdates); 
          setSongs(songsCopy); 
          handleClose(); 
        }
      }

      const handleDelete = (songToDelete) => {
        const songsCopy = [...songs]; 
        const songIndex = songsCopy.findIndex((song) => song.title === songToDelete.title);
        if (songIndex !== -1) {
          songsCopy.splice(songIndex , 1);
          setSongs(songsCopy); 
          handleClose(); 
        }
      }

      const filterGenre = (option) => {
        if (option === 'All') {
          const songsCopy = [...data]; 
          setSongs(songsCopy);
        } else {
          const songsCopy = [...data]; 
          const filteredSongs = songsCopy.filter(song => song.genre === option); 
          setSongs(filteredSongs);      
        }  
      }

      const handleClose = () => {
        setSongModal(false); 
        setSongToEdit(null);
        setSongArtist(null); 
        setSongTitle(null); 
        setSongGenre(null); 
      }
      


    return (
        <Box sx={{ 
          width: '100%', 
          display: 'flex',
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          }}>
        <ThemeProvider theme={theme}>
          <Box sx={{
            marginTop: 20,
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center',
            marginBottom: 3, 
            perspective: '1000px',
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
              Song Playlist
              </Typography>
            <button 
            style={{ 
              padding: 5, 
              paddingRight: 10,
              paddingLeft: 10, 
              height: '60%', 
              border: '1px solid rgba(92, 167, 228, 0.8)',
              borderRadius: '7px',
              background: 'rgba(39, 124, 199, 0.8)', 
              color: 'white', 
              fontWeight: '600', 
              fontSize: 12, 
              animation: 'fadeIn 2s ease-in-out forwards',
              fontFamily: '"Baloo Chettan 2", sans-serif;',
              '&:hover': {
                border: '1px solid rgba(40, 152, 251, 0.8)',
                background: 'rgba(155, 190, 222, 0.8)', 
              }
            }}
            onClick={() => setSongModal(true)}
            >
              Add</button>
          </Box>
          <Box sx={{
             marginBottom: 5, 
             display: 'flex',
             width: '70%',
             justifyContent: 'center', 
             alignItems: 'center',
             animation: 'fadeIn 2s ease-in-out forwards',
             }}>
            <TextField
            name='search'
            placeholder="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            sx={{ 
              boxShadow: 'none',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              borderRadius: '10px'
            }}
            InputProps={{ style: {
              height: 30, 
              width: '20rem', 
              borderRadius: '10px',
              fontSize: 14, 
              padding: 1, 
              border: 'rgba(0, 0, 0, 0.05)',
            }}}
            />
            <Box sx={{
              marginLeft: 2,
              animation: 'fadeIn 2s ease-in-out forwards',
            }}>
            {genreOptions.map((option) => (
              <Button style={{
                textTransform: 'none',
                padding: 'none', 
                height: 30, 
                fontSize: 12, 
                background: 'none', 
                border: '1px solid rgba(39, 124, 199, 0.8)',
                boxShadow: 'none',
                borderRadius: '3px',
                fontFamily: '"Baloo Chettan 2", sans-serif;',
                color: 'rgba(69, 75, 80, 0.7)',
                '&:hover': {
                  color: 'rgba(69, 75, 80, 0.9)',
                  border: '1px solid red'
                }
              }}
              onClick={()=> (filterGenre(option))}
              
              >{option}</Button>
            ))}
            </Box>

          </Box>

          <Box sx={{ 
            width: '80%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            animation: 'fadeIn 2s ease-in-out forwards',
            }}>

              {songs && songs.map((song) => (
                (
                  <Box 
                  sx={{
                    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;',
                    borderRadius: '10px',
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'center', 
                    alignItems: 'center',
                    padding: 1,
                    margin: 1,
                    '&:hover': {
                      boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(92, 167, 228, 0.8) 0px 0px 0px 1px;'
                    }
                    }}
                    >
                      
                    <Typography sx={{
                       fontSize: 14,
                       fontStyle: 'italic',
                       marginBottom: 1,
                       fontWeight: 'bold',
                       color: 'rgba(7, 8, 8, 0.8)', 
                       fontFamily: '"Baloo Chettan 2", sans-serif;'

                       }}>{song.title}</Typography>
                    <Typography sx={{ 
                      fontSize: 14,
                      color: 'rgba(7, 8, 8, 0.8)', 
                      fontFamily: '"Baloo Chettan 2", sans-serif;'
                    }}
                    >{song.artist}</Typography>
                    <Box sx={{
                      padding:0, 
                      marginTop: 1, 
                      textAlign: 'right', 
                      width: '100%'
                      }}>
                        {<DeleteIcon 
                      onClick={() => {
                        setSongModal(false); 
                        handleDelete(song); 
                      }}
                      sx={{ 
                        padding: 0, 
                        height: 15, 
                        margin: 0,
                        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;',
                        color: 'rgba(39, 124, 199, 0.8)',
                        '&:hover': {
                          color: 'rgba(92, 167, 228, 0.8)',
                        }
                        }} fontSize="small"
                        />
                        } {<ModeEditIcon
                          onClick={() => {
                            setSongToEdit(song); 
                            setSongModal(true); 
                          }}
                          sx={{ 
                            padding: 0, 
                            height: 15, 
                            margin: 0,
                            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;',
                            color: 'rgba(39, 124, 199, 0.8)',
                            '&:hover': {
                              color: 'rgba(92, 167, 228, 0.8)',
                            }
                            }} fontSize="small"
                        />}
                        {<HeadphonesIcon
                          onClick={() => window.open(song.link, '_blank')}
                          sx={{ 
                            padding: 0, 
                            height: 15, 
                            margin: 0,
                            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;',
                            color: 'rgba(39, 124, 199, 0.8)',
                            '&:hover': {
                              color: 'rgba(92, 167, 228, 0.8)',
                            }
                            }} fontSize="small"
                        />}
                        </Box>
                  </Box>
                )
              ))}

          </Box>
          <Box sx={{ width: "100vw", height: "330vh", display: "flex", 
        justifyContent: "flex-start", alignItems: "center", flexDirection: "column", 
        marginTop: 5, pl: "20", id:"hello", padding: 10 }}>
            <Box sx={{ marginTop: 5}}>
              <div className="homeTitle">
                <Typography sx={{
                    fontFamily: '"Baloo Chettan 2", sans-serif;',
                    fontWeight: 'bold',
                    color: 'rgba(7, 8, 8, 0.8)', 
                }}>  Hi! Thanks For Checking Out My Page!</Typography>
              </div>

            <div className="homeDiv">
                <div className="homeContent reveal">
                <div className="background">
                <Typography 
                    sx={{
                        fontFamily: '"Baloo Chettan 2", sans-serif;',
                        color: 'rgba(7, 8, 8, 0.8)', 
                        marginBottom: 5, 
                    }}> 
                    How are you feeling today on a scale 0-100?
                   </Typography>
                    <Box sx={{
                      padding: 1, 
                      display: 'flex', 
                      justifyContent: 'center', 
                      alignItems: 'center'

                    }}>
                    <TextField 
                    sx={{
                      fontSize: 12,
                      border: 'none',
                      boxShadow: 'none',
                    }}
                    InputProps={{ style: {
                      fontFamily: '"Baloo Chettan 2", sans-serif;',
                      color: 'rgba(7, 8, 8, 0.8)', 
                      fontSize: 12,
                      padding: 0,
                      height: 35,
                      borderRadius: '8px', 
                      border: 'none', 
                    }}}
                    value={rating} 
                    placeholder="rating"
                    onChange={(e) => setRating(e.target.value)} type="number"
                    />
                    <button  
                     style={{ 
                      padding: 5,
                      margin: 10,  
                      border: '1px solid rgba(92, 167, 228, 0.8)',
                      borderRadius: '7px',
                      background: 'rgba(39, 124, 199, 0.8)', 
                      color: 'white', 
                      fontWeight: '600', 
                      fontSize: 12, 
                      fontFamily: '"Baloo Chettan 2", sans-serif;',
                      '&:hover': {
                        border: '1px solid rgba(40, 152, 251, 0.8)',
                        background: 'rgba(155, 190, 222, 0.8)', 
                      }
                    }}
                    onClick={handleSubmit}>
                      submit
                    </button>
                  </Box>

                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"
                onChangeCommitted={handleChange} onChange={handleChange} sx={{ width: "20%"}}/>

                {feeling && (<Typography 
                    sx={{
                        fontFamily: '"Baloo Chettan 2", sans-serif;',
                        color: 'rgba(7, 8, 8, 0.8)', 
                        margin: 5, 
                        fontWeight: 'bold',
                    }}> {message}
                    </Typography>)}
                  <Feeling feeling={feeling}/>
              </div>
                </div>
            </div>
            <div className="homeDiv"> 
            <div className="reveal welcome">
              <Typography sx={{
                marginTop:10,
                fontFamily: '"Baloo Chettan 2", sans-serif;',
                color: 'rgba(7, 8, 8, 0.8)', 
                fontWeight: 'bold',
              }}>Let's get some data!!!</Typography>
              <Data />
            </div>
            </div>
            </Box>
        </Box>
        <Footer />
        <Box sx={{
          padding: 1, 
          }}>
          <Dialog
          fullWidth
          maxWidth={'sm'}
          open={songModal}
          onClose={handleClose}
          >
            <DialogTitle sx={{ fontSize: 16}}> {songToEdit ? 'Edit' : 'Add a Song to Playlist'} </DialogTitle>
            <DialogContent sx={{
             
            }}>
          <form>
            <FormGroup sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center', 
              alignItems: 'center', 
            }}>
              <TextField
              name='title'
              value={songTitle}
              onChange={(e) => setSongTitle(e.target.value)}
              required
              placeholder="Title"
              sx={{
                margin: 1,
                width: '50%',
              }}
              InputProps={{
                style: {
                  padding: 0,
                  height: 40,
                  borderRadius: '10px',
                  fontSize: 14,
                }
              }}
              >
              </TextField>
              <TextField
              name='artist'
              value={songArtist}
              onChange={(e) => setSongArtist(e.target.value)}
              required
              placeholder="Artist"
              sx={{
                margin: 1,
                width: '50%',
                padding: 0, 
              }}
              InputProps={{
                style: {
                  padding: 0,
                  height: 40,
                  borderRadius: '10px',
                  fontSize: 14,
                }
              }}
              >
              </TextField>
              <TextField
              select
              name='genre'
              value={songGenre}
              onChange={(e) => setSongGenre(e.target.value)}
              required
              sx={{
                margin: 1,
                width: '50%',
                padding: 0, 
                fontSize: 14,
              }}
              InputProps={{
                style: {
                  padding: 0,
                  height: 40,
                  borderRadius: '10px',
                  fontSize: 14,
                }
              }}
              >
                {genreOptions.map((option) => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </TextField>
            </FormGroup>
          </form>
            </DialogContent>
            <DialogActions>
            <Button
              disabled={!songTitle || !songArtist}
              variant={'contained'}
              onClick={handleSubmission}
              sx={{
                textTransform: 'none', 
                padding: 1, 
                marginBottom: 1, 
                marginRight: 1, 
                fontSize: 14, 
                color: 'white', 
                background: 'rgba(39, 124, 199, 0.8)',
                '&:hover': {
                  background: 'rgba(92, 167, 228, 0.8)',
                }
              }}
            >
              {songToEdit ? 'Update' : 'Save'}
            </Button>
          </DialogActions>
          </Dialog>
        </Box>
       
        </ThemeProvider>
        </Box>
    )
}

export default Home;