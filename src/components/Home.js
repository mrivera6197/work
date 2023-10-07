import { Typography, TextField, Button } from "@mui/material";
import Box from "@mui/material/Box"
import Slider from '@mui/material/Slider';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react"
import Feeling from "./Feeling"

const Home = () => {
  const [rating, setRating] = useState("")
  const [feeling, setFeeling] = useState("")
  const [message, setMessage] = useState("")

    const theme = createTheme({
        palette: {
          primary: {
            main: "#A2B575"
          }, 
          secondary: {
            main: "#A2B575"
          }
        }, 
        typography: {
          fontSize: 16,
        }
      })

      const handleChange = (e, value) => {
        setRating(value)
      }

      const handleSubmit =  (e) => {
        e.preventDefault()
        console.log(rating)
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


    return (
        <>
        <ThemeProvider theme={theme}>
          <Box sx={{ width: "100vw", height: "330vh", display: "flex", 
        justifyContent: "flex-start", alignItems: "center", flexDirection: "column", 
        marginTop: 5, pl: "20", id:"hello" }}>
            <Box sx={{ marginTop: 5}}>
            <Typography>
                Hi! Thanks For Checking Out My Page! Scroll to See More
            </Typography>
            <div className="homeDiv">
                <div className="homeContent reveal">
                <div className="background">
                  <p>How are you feeling today on a scale 0-100?</p>
                    <div className="ratingDiv">
                    <TextField id="standard-basic" label="Rating" variant="standard" 
                    value={rating} onChange={(e) => setRating(e.target.value)}
                    />
                    <Button onClick={handleSubmit}>
                      submit
                    </Button>
                  </div>

                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"
                onChangeCommitted={handleChange} onChange={handleChange} sx={{ width: "20%"}}/>

                {
                    feeling && (
                      <p className="feelingMessage"> {message}</p>
                    )
                }

                  <Feeling feeling={feeling}/>



              </div>

                </div>
               
            </div>
            <div className="homeDiv"> 
            <div className="reveal welcome">

            </div>

            </div>

            </Box>

        </Box>
        </ThemeProvider>
        </>
    )
}

export default Home;