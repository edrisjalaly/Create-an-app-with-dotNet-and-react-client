import { Menu } from '@mui/icons-material'
import { AppBar, Box, Button, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function NavBar() {
  return (
    <>
    <CssBaseline />
    <Box sx={{flowGrow:1}}>
     <AppBar position='static'>
      <Toolbar>        
       <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr:2}}>
        <Menu />
       </IconButton>
       
       <Typography variant='h6' component='div' sx={{ flexGrow: 2}}>

       </Typography>
       <Button color='inherit'> Login </Button>
      </Toolbar>
     </AppBar>
    </Box>
    </>
  )
}
