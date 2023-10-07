import React, { useRef, useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import axios from "axios"

import { Box, Toolbar, Container, Grid, Paper, Typography, Button} from "@mui/material";

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
        <div className="homeDiv data reveal">
        <Toolbar />
              <Container maxWidth="lg" sx={{display: "flex", justifyContent: "center",
               height: "60vh", alignItems:"center", flexDirection: "column"}} >
                <Typography sx={{marginBottom:2}}>
                    Movie IMDB Data
                </Typography>
                <Grid item xs={12} lg={9} display="flex" justifyContent="center" width="100%"
                height="100%">

                <MovieDataTable data={data}/>

                </Grid>
              </Container>
              <div className="reveal dataPlay">
                lets play with the data!!
                <Button
                onClick={handleClick}
                sx={{m:5}}
                > click to calculate avg rating!</Button>
                {avgScore && (
                    <p>{avgScore}</p>
                )}

                <MovieChart data={data}/>

               <p>Pretty cool!</p>
               <p>this page uses React.js, Material UI, Chart.js, and REST API</p>
               <div className="link">
               <p>Check out the API </p>
               <a href="https://rapidapi.com/rapihub-rapihub-default/api/imdb-top-100-movies/">
                 here
               </a>

               </div>

               <div>
                <Button 
                onClick={navToProjects}
                >Projects</Button>
               </div>
              
           
              </div>
            
        </div>
        
        </>
    )
}

export default Data; 