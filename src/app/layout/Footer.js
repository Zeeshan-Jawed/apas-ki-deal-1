import { Box, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import Images from '../assets/Images/Images';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (

    <Box sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: "#3B5998", height: "355px", borderColor: "#707070", paddingY: 2 }}>
      <Grid container spacing={4} sx={{ paddingLeft: 8, paddingTop: 6 }} >
        <Grid item xs={3} >
          <Typography sx={{ fontSize: "20px", color: "#FFFFFF", padding: 2 }}>
            <strong>Popular Categories</strong>
          </Typography>
          <Typography sx={{ fontSize: "20px", color: "#FFFFFF", padding: 2 }}>
            Flats For Rent<br /> House For Sale<br /> Used Car<br /> Mobile
          </Typography>

        </Grid>
        <Grid item xs={3}>
          <Typography sx={{ fontSize: "20px", color: "#FFFFFF", padding: 2 }}>
            <strong>Apas Ki Deal</strong>
          </Typography>
          <Typography sx={{ fontSize: "20px", color: "#FFFFFF", padding: 2 }}>
            About Us <br />Advertising <br /> Careers<br /> Terms of Use
          </Typography>

        </Grid>
        <Grid item xs={3}>
          <Typography sx={{ fontSize: "20px", color: "#FFFFFF", padding: 2 }}>
            <strong>Support</strong>
          </Typography>
          <Typography sx={{ fontSize: "20px", color: "#FFFFFF", padding: 2 }}>
            Help <br /> Contact Us <br /> Privacy Policy
          </Typography>

        </Grid>

        <Grid item xs={3}>
          <Typography sx={{ fontSize: "20px", color: "#FFFFFF", padding: 2 }}>
            <strong>Follow Us</strong>
          </Typography>
          <Typography sx={{ fontSize: "20px", color: "#FFFFFF", padding: 1 }}>
            <FacebookIcon /> <InstagramIcon /> <TwitterIcon /> <YouTubeIcon />
          </Typography>
          <Typography sx={{ fontSize: "18px", color: "#FFFFFF", padding: 1 }}>
            GET YOUR APP TODAY
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: 2, paddingRight: 4 }}>
            <CardMedia
              component="img"
              height="20%"
              sx={{ width: "110px !important" }}
              image={Images.pic16}
              alt="load"
            />
            <CardMedia
              component="img"
              height="20%"
              sx={{ width: "110px !important" }}
              image={Images.pic17}
              alt="load"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
export default Footer