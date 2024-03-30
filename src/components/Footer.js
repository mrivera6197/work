import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { useRef } from 'react'; 
import { useNavigate } from 'react-router-dom';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';


export default function Footer() {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();
  const scrollRef = useRef(null);

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