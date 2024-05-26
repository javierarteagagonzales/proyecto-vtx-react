import React from 'react'
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function A1() {
  return (
    <>
    <Navbar />
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
      <Sidenav/>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <h1>Área de Almacén Central</h1> 
        <Typography paragraph>
          Bienvenido al área
        </Typography>
      </Box>

    </Box>
      
    
      
    </>
  )
}
