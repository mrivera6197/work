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
    <Box sx={{ width: "100%", mt: 4, mb: 5}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      > 
        <BottomNavigationAction 
        label="Home" 
        value={value} 
        onClick={() => navigate("/")}
        icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction
        label="Work"
        value={value}
        onClick={() => navigate("/work")}
        icon={<WorkOutlineIcon/>} />
        <BottomNavigationAction
        label="About"
        value={value}
        onClick={() => navigate("/about")}     
        icon={<SummarizeOutlinedIcon />} />
        <BottomNavigationAction
        label="Contact"
        value={value}
        onClick={() => navigate("/contact")}     
        icon={<ContactsOutlinedIcon />} />
      </BottomNavigation>
      
    </Box>
  );
}