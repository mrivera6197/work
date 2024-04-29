import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { useNavigate } from 'react-router-dom';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';


export default function Footer() {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%", mt: 20, mb: 5}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      > 
        <BottomNavigationAction 
        value={value} 
        onClick={() => navigate("/")}
        icon={<HomeOutlinedIcon fontSize='small'
        sx={{ 
          color: 'rgba(39, 124, 199, 0.8)',
          '&:hover': {
            color: 'rgba(92, 167, 228, 0.8)',
          }
          }}
          />} 
          />
        <BottomNavigationAction
        value={value}
        onClick={() => navigate("/work")}
        icon={<WorkOutlineIcon 
        fontSize='small'
        sx={{ 
          color: 'rgba(39, 124, 199, 0.8)',
          '&:hover': {
            color: 'rgba(92, 167, 228, 0.8)',
          }
          }}
        />} />
        <BottomNavigationAction
  
        value={value}
        onClick={() => navigate("/about")}     
        icon={<SummarizeOutlinedIcon 
        fontSize='small'
        sx={{ 
          color: 'rgba(39, 124, 199, 0.8)',
          '&:hover': {
            color: 'rgba(92, 167, 228, 0.8)',
          }
          }}
        />} />
      </BottomNavigation>
      
    </Box>
  );
}