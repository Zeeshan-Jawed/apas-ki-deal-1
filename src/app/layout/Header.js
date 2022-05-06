import { Add, ChatOutlined, FavoriteBorderOutlined, KeyboardArrowDown, NotificationsActiveOutlined, SearchOutlined, ArrowDropDownOutlined, LogoutOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, CardMedia, Divider, Grid, ListItemIcon, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import Images from '../assets/Images/Images';
import Signup from '../components/SignUp/SignUp';
import SignIn from '../components/SignIn/SignIn';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';


function Header() {
  const userdata = {
    id: 1,
    name: "Zeeshan",
    image: ''
  }
  const [user,setUser]=useState(userdata);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [openSignUpDialog, setOpenSignUpDialog] = useState(false);
  const [openSignInDialog, setOpenSignInDialog] = useState(false);

  return (
    <Box sx={{ paddingY: 1 }}>

      {/* ========== Sign Up Dialog Box ========== */}
      <Signup openDialog={openSignUpDialog} onClose={() => setOpenSignUpDialog(false)} />

      {/* ========== Sign In Dialog Box ========== */}
      <SignIn openDialog={openSignInDialog} onClose={() => setOpenSignInDialog(false)} />

      <Grid container spacing={0.2} >


        <Grid item xs={5.6}>
          <Box sx={{ display: 'flex' }} >

            <Link to='/'>
              <CardMedia
                component="img"
                height="44px"
                sx={{ width: "41px !important" }}
                image={Images.pic1}
                alt="camera"

              /></Link>
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

            <MenuItem disableRipple sx={{ textAlign: 'center', display: 'block', '&:hover': { bgcolor: 'transparent !important' } }}>
              <NotificationsActiveOutlined sx={{ color: '#707070', fontSize: "15px" }} />
              <Typography sx={{ color: '#707070', fontSize: "8px", textAlign: "left" }}>NOTIFICATIONS</Typography>
            </MenuItem>

            <MenuItem disableRipple sx={{ textAlign: 'center', display: 'block', '&:hover': { bgcolor: 'transparent !important' } }}>
              <SearchOutlined sx={{ color: '#707070', fontSize: "15px" }} />


              <Typography textAlign="center" sx={{ color: '#707070', fontSize: "8px" }}>SEARCHES</Typography>
            </MenuItem>

            <MenuItem disableRipple sx={{ textAlign: 'center', display: 'block', alignItems: "center", '&:hover': { bgcolor: 'transparent !important' } }}>
              < FavoriteBorderOutlined sx={{ color: '#707070', fontSize: "15px" }} />


              <Typography textAlign="center" sx={{ color: '#707070', fontSize: "8px", textAlign: "center", }}>FAVOURITE</Typography>
            </MenuItem>

            <MenuItem disableRipple sx={{ textAlign: 'center', display: 'block', alignItems: "center", '&:hover': { bgcolor: 'transparent !important' } }}>
              <ChatOutlined sx={{ color: '#707070', fontSize: "15px" }} />
              <Typography textAlign="center" sx={{ color: '#707070', fontSize: "8px" }}>CHAT</Typography>
            </MenuItem>
            {user.id
              ?
              <>
                <Box sx={{ ml: 2, mt: 1, display: 'flex' }}>
                  <Avatar alt="" src="/static/images/avatar/1.jpg"
                    sx={{ width: 30, height: 30, bgcolor: '#3B5998' }} />
                  <Typography sx={{ fontSize: '14px', mx: 1, my: 0.5 }}>{user.name} </Typography>
                  <ArrowDropDownOutlined sx={{ py: 0.2,ml: 1 }} onClick={handleClick}
                    size="small"
                    
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined} />
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        '&:before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <MenuItem>
                      Profile
                    </MenuItem>
                    <MenuItem component={Link} to='/myads'>
                      My Ads
                    </MenuItem>
                    <Divider />


                    <MenuItem onClick={()=>setUser({})}>
                      <ListItemIcon >
                        <LogoutOutlined fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </Box>
                <MenuItem disableRipple sx={{ textAlign: 'center', display: 'block', alignItems: "center", paddingTop: 1.5, '&:hover': { bgcolor: 'transparent !important' } }}>
                  <Button component={Link} to='/sell' variant="contained" startIcon={<Add />} sx={{ fontSize: "12px", backgroundColor: "#3B5998", borderRadius: "12%" }}>
                    Sell
                  </Button>
                </MenuItem>
              </>
              :
              <>
                <MenuItem disableRipple sx={{ textAlign: 'center', display: 'block', alignItems: "center", '&:hover': { bgcolor: 'transparent !important' } }}>
                  <Button onClick={() => setOpenSignInDialog(true)} sx={{ color: '#707070', fontSize: "14px", fontWeight: 700, paddingTop: 1.3 }}>
                    Sign in
                  </Button>
                </MenuItem>

                <MenuItem disableRipple sx={{ textAlign: 'center', display: 'block', alignItems: "center", '&:hover': { bgcolor: 'transparent !important' } }}>
                  <Button onClick={() => setOpenSignUpDialog(true)} sx={{ color: '#707070', fontSize: "14px", fontWeight: 700, paddingTop: 1.3 }}>
                    Sign up
                  </Button>

                </MenuItem>

                <MenuItem disableRipple sx={{ textAlign: 'center', display: 'block', alignItems: "center", paddingTop: 1.5, '&:hover': { bgcolor: 'transparent !important' } }}>
                  <Button onClick={() => setOpenSignInDialog(true)} variant="contained" startIcon={<Add />} sx={{ fontSize: "12px", backgroundColor: "#3B5998", borderRadius: "12%" }}>
                    Sell
                  </Button>
                </MenuItem>
              </>
            }


          </Box>

        </Grid>

      </Grid>
    </Box>
  );
}

export default Header;