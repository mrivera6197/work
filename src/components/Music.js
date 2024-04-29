
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import axios from 'axios'

const Music = () => {
    const [accessToken, setAccessToken] = useState('BQD-V3NGGQx7g4SnlK5n6rqHF7rAF2HKWmgWrX85F-arqF1r8rJdeqohA5ATEE1wpvswvct258tHy5x8pPV34vODRZWU032sFSXijy5ZeoIRTsTyptk'); 
    const [savedTracks, setSavedTracks] = useState(null); 

    const fetchParams = {
        grant_type: 'client_credentials', 
        client_id: '9d3e8d3bf4134889b8743b77a9fe3c1d', 
        client_secret: '35dd4b338e4e4645a92c366201b1056d',   
    }

    const postDataString = Object.keys(fetchParams)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(fetchParams[key])}`)
    .join('&');


    const fetchToken = async () => {
        try {

        const res = await axios.post(`https://accounts.spotify.com/api/token`,postDataString, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        if (res) {
            setAccessToken(res.data.access_token)
        }
        } catch (e) {
            console.log("Error", e)
        }
    }

    const fetchSavedTracks = async () => {
        try {
            const res = axios.get(`https://api.spotify.com/v1/me`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                  }
            })

            console.log("tracks?", res)
        } catch (e) {

        }
    }

    useEffect(() => {
        // const delay = 60 * 60 * 1000; 
        // setTimeout(() => {
        //     fetchToken(); 
        // }, delay); 
      }, []);


    return (
        <Box style={{ display:'flex', flexDirection: 'column', alignItems:'center', width: '95%', height: '100vh'}}
        className='musicContainer'
        >
            <Grid container spacing={2} style={{width: '95%', marginTop: '2rem'}}>
            <Grid xs={12}  style={{boxShadow: 'rgba(0, 0, 0, 0.08) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'}}>

            </Grid>
            <button onClick={fetchSavedTracks}>test tracks</button>
            </Grid>
        </Box>
    )

}

export default Music; 