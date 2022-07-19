import { AppBar, Box, Badge, Grid, IconButton, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'

export default function NavBar() {
  return (
    <Box sx={{flexGrow : 1}}>
        <AppBar position="static">
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Typography variant ="h3" component="div" sx={{ml:2}}>
                        Store Name
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <IconButton>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon color="action" />
                        </Badge>
                    </IconButton>
                </Grid>
            </Grid>
            
        </AppBar>
    </Box>
  )
}
