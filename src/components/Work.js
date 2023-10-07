import { Typography } from "@mui/material";
import Box from "@mui/material/Box"
import vid from "../images/css.mp4"
import chartVid from "../images/chart.mp4"

const Work = () => {

    return (
        <>
        <Box sx={{ width: "100vw", height: "330vh", display: "flex", 
        justifyContent: "flex-start", alignItems: "center", flexDirection: "column", 
        marginTop: 5, pl: "20" }}>
          <Box sx={{ width: "80vw", height: "80vh", display: "flex", 
        justifyContent: "center", alignItems: "center", flexDirection: "column", 
        marginTop: 5}}>
            <Typography variant="h6" noWrap component="div" sx={{ margin: 1}}>
            React.js site built from scratch (React, Design,CSS)
          </Typography>


            <video src={vid} height={650} autoPlay={true} loop={true} 
            sx={{ border: 1}}/>
         
          </Box>
          <Box sx={{ width: "80vw", height: "100vh", display: "flex", 
        justifyContent: "space-around", alignItems: "flex-start", marginTop: 5}}>
            <Box sx={{width: "30vw", border:1, height: "40vh", marginTop: 10}}>
                hi
            </Box>
            <Box sx={{width: "30vw", border:1, height: "60vh", marginTop: 20}}>
                hi
            </Box>
            
         
          </Box>
          <Box sx={{ width: "80vw", height: "80vh", display: "flex", 
        justifyContent: "center", alignItems: "center", flexDirection: "column", 
        marginTop: 5, border:1}}>

        <video src={chartVid} height={350}/>
         
          </Box>

        </Box>
        
        </>
    )
}

export default Work; 