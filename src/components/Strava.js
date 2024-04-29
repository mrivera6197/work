import { LocalDrinkSharp, LocalFireDepartmentSharp } from '@mui/icons-material'
import { Box } from '@mui/material'
import axios from 'axios'
import { useEffect } from 'react'

const Strava = () => {
    let congif = {
        headers: {
            'X-RapidAPI-Key': '512e1c561bmsh61623a702d07254p129010jsna80a555677b5',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    }

    const loadData = async() => {
        try {
            const response = await axios.get("https://imdb-top-100-movies.p.rapidapi.com/", congif)
            console.log('data from strava!', response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <Box 
        sx={{ 
        marginTop: 10
        }}>
            <h2>hi</h2>
        </Box>
    )
}

export default Strava; 