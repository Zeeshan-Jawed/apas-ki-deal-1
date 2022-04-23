import { Add, ChatOutlined, FavoriteBorderOutlined, KeyboardArrowDown, NotificationsActiveOutlined, SearchOutlined } from '@mui/icons-material';
import { Box, Button, CardMedia, Grid, MenuItem, Typography } from '@mui/material';
import React from 'react';
import Images from '../assets/Images/Images';

function Header() {
  return (
    <Box sx={{ paddingY: 1 }}>
      <Grid container spacing={0.2} >


        <Grid item xs={5.6}>
          <Box sx={{ display: 'flex' }} >

            <CardMedia
              component="img"
              height="44px"
              sx={{ width: "41px !important" }}
              image={Images.pic1}
              alt="camera"

            />
            <Typography sx={{ m: 2, fontSize: "12px" }} >
              Pakistan
            </Typography>

            <Typography sx={{ paddingY: 1.5, fontSize: "10px" }}>
              <KeyboardArrowDown />
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={2}>

          <Box sx={{ display: 'flex' }}>

            <MenuItem disableRipple sx={{ display: 'block','&:hover':{bgcolor:'transparent !important'} }}>
              <NotificationsActiveOutlined sx={{ paddingLeft: 3, color: '#707070', fontSize: "15px" }} />
              <Typography textAlign="center" sx={{ color: '#707070', fontSize: "8px", textAlign: "left" }}>NOTIFICATIONS</Typography>
            </MenuItem>

            <MenuItem disableRipple sx={{ display: 'block','&:hover':{bgcolor:'transparent !important' }}}>
              <SearchOutlined sx={{ color: '#707070', fontSize: "15px" }} />


              <Typography textAlign="center" sx={{ color: '#707070', fontSize: "8px" }}>SEARCHES</Typography>
            </MenuItem>

            <MenuItem disableRipple sx={{ display: 'block', alignItems: "center" ,'&:hover':{bgcolor:'transparent !important' } }}>
              < FavoriteBorderOutlined sx={{ paddingLeft: 1.8, color: '#707070', fontSize: "15px" }} />


              <Typography textAlign="center" sx={{ color: '#707070', fontSize: "8px", textAlign: "center" ,}}>FAVOURITE</Typography>
            </MenuItem>

            <MenuItem disableRipple sx={{ display: 'block', alignItems: "center",'&:hover':{bgcolor:'transparent !important' } }}>
              <ChatOutlined sx={{ color: '#707070', fontSize: "15px" }} />
              <Typography textAlign="center" sx={{ color: '#707070', fontSize: "8px" }}>CHAT</Typography>
            </MenuItem>

            <MenuItem disableRipple sx={{ display: 'block', alignItems: "center",'&:hover':{bgcolor:'transparent !important' } }}>
              <Typography sx={{ color: '#707070', fontWeight: 700, fontSize: "14px", paddingTop: 1.3 }}>
                Sign in
              </Typography>
            </MenuItem>

            <MenuItem disableRipple sx={{ display: 'block', alignItems: "center",'&:hover':{bgcolor:'transparent !important' } }}>
              <Typography sx={{ color: '#707070', fontSize: "14px", fontWeight: 700, paddingTop: 1.3 }}>
                Sign up
              </Typography>
            </MenuItem>

            <MenuItem disableRipple sx={{ display: 'block', alignItems: "center", paddingTop: 1.5,'&:hover':{bgcolor:'transparent !important' } }}>
              <Button variant="contained" startIcon={<Add />} sx={{ fontSize: "12px", backgroundColor: "#3B5998", borderRadius: "12%" }}>
                Sell
              </Button>
            </MenuItem>

          </Box>

        </Grid>

      </Grid>
    </Box>
  );
}

export default Header;