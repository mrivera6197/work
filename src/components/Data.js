import React, { useRef, useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import axios from "axios"

import { Box, Toolbar, Container, Grid, Typography,} from "@mui/material";

import MovieDataTable from "./MovieDataTable"; 
import MovieChart from "./MovieChart";

const Data = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    const [data, setData] = useState([])
    const [avgScore, setAvgScore] = useState(null)

    const navToProjects = () => {
        navigate('/work');
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
    

    let congif = {
        headers: {
            'X-RapidAPI-Key': '512e1c561bmsh61623a702d07254p129010jsna80a555677b5',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    }

    useEffect(() => {
        loadData()
    }, [])




    const loadData = async() => {
        try {
            const response = await axios.get("https://imdb-top-100-movies.p.rapidapi.com/", congif)
            setData(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const calculateAvgRating = () => {
        let totalScore = 0 

        data.map((data) => {
            totalScore += parseFloat(data.rating)
        })

        let averageScore = (totalScore / data.length).toFixed(2)

        return averageScore;
        
    }

    const handleClick = (e) => {
        e.preventDefault()
        setAvgScore(calculateAvgRating())
    }




    return (
        <>
        <Box className="homeDiv data reveal">
        <Toolbar />
              <Container maxWidth="lg" 
              sx={{display: "flex", 
              justifyContent: "center", 
              alignItems:"center", 
              flexDirection: "column",
              margin: 5, 
              padding: 2, 
              }} >
                <Typography sx={{marginBottom:2, color: "#A2B575", fontWeight: "bold"}}>
                    Movie IMDB Data
                </Typography>
                <Grid item xs={12} lg={9} display="flex" justifyContent="center" width="100%"
                height="100%">

                <MovieDataTable data={data}/>

                </Grid>
              </Container>
              <div className="reveal dataPlay">
              <Typography sx={{
                margin: 5 ,
                fontFamily: '"Baloo Chettan 2", sans-serif;',
                color: 'rgba(7, 8, 8, 0.8)', 
                fontWeight: 'bold',
              }}>   lets play with the data!! </Typography>
                <button
                onClick={handleClick}
                sx={{m:5}}
                style={{ 
                    padding: 10, 
                    border: '1px solid rgba(92, 167, 228, 0.8)',
                    borderRadius: '7px',
                    background: 'rgba(39, 124, 199, 0.8)', 
                    color: 'white', 
                    fontWeight: '600', 
                    fontSize: 12, 
                    margin:20, 
                    fontFamily: '"Baloo Chettan 2", sans-serif;',
                    '&:hover': {
                      border: '1px solid rgba(40, 152, 251, 0.8)',
                      background: 'rgba(155, 190, 222, 0.8)', 
                    }
                  }}
                > click to calculate avg rating!
                </button>
                {avgScore && (
                    <p>{avgScore}</p>
                )}

                <MovieChart data={data}/>

                <Typography sx={{
                margin: 5 ,
                fontFamily: '"Baloo Chettan 2", sans-serif;',
                color: 'rgba(7, 8, 8, 0.8)', 
                fontWeight: 'bold',
              }}>   Pretty cool!
               </Typography>

               <Typography sx={{
                margin: 5 ,
                fontFamily: '"Baloo Chettan 2", sans-serif;',
                color: 'rgba(7, 8, 8, 0.8)', 

              }}>  this page uses React.js, Material UI, Chart.js, and REST API
               </Typography>

               <div className="link">
               <Typography sx={{
                fontFamily: '"Baloo Chettan 2", sans-serif;',
                color: 'rgba(7, 8, 8, 0.8)', 
               }}>Check out the API </Typography>
               <a href="https://rapidapi.com/rapihub-rapihub-default/api/imdb-top-100-movies/">
                 here
               </a>

               </div>

               <div>
                <button
                 style={{ 
                    padding: 10, 
                    border: '1px solid rgba(92, 167, 228, 0.8)',
                    borderRadius: '7px',
                    background: 'rgba(39, 124, 199, 0.8)', 
                    color: 'white', 
                    fontWeight: '600', 
                    fontSize: 12, 
                    margin:20, 
                    fontFamily: '"Baloo Chettan 2", sans-serif;',
                    '&:hover': {
                      border: '1px solid rgba(40, 152, 251, 0.8)',
                      background: 'rgba(155, 190, 222, 0.8)', 
                    }
                  }}
                onClick={navToProjects}
                >Projects
                </button>
               </div>
              
           
              </div>
            
        </Box>
        
        </>
    )
}

export default Data; 