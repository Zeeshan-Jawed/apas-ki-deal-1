import { KeyboardArrowDown } from '@mui/icons-material'
import { Box, Button, CardMedia, Divider, Grid, InputLabel, MenuItem, Radio, Select, TextField, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function Form() {
  return (
    <Fragment>
      <Box p={4} sx={{ bgcolor: "#F7F8F8" }}>


        <Grid container spacing={4} >


          <Grid item xs={3.6}>
            <Box sx={{ display: 'flex' }} >

              <CardMedia
                component="img"
                height="44px"
                sx={{ width: "41px !important" }}
                image="Images.pic1"
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



        </Grid>
        <Box p={4}>
          <Typography sx={{ color: "#484848", fontWeight: "80%", fontSize: "25px" }}>
            <ArrowBackIcon sx={{ paddingTop: 2 }} /> <strong>POST YOUR AD</strong>
          </Typography>
        </Box>

        <Box p={7}>
          <Typography sx={{ color: "#484848", fontWeight: "80%", fontSize: "20px", mb: 2 }}>
            <strong>
              Ad Title
            </strong>
          </Typography>
          <TextField variant="outlined" sx={{ width: '100%', mb: '6px' }} />
          <Typography sx={{ fontSize: "13px", color: '#707070', paddingBottom: 4 }}>
            Mention the key features of your item (e.g. brand, model, age, type)
          </Typography>
          <Typography sx={{ color: "#484848", fontWeight: "80%", fontSize: "20px", mb: 2 }}>
            <strong>
              Description
            </strong>
          </Typography>
          <TextField variant="outlined" multiline rows={5} fullWidth sx={{ width: '100%', borderRadius: 4, mb: '6px' }} />
          <Typography sx={{ fontSize: "13px", color: '#707070', paddingBottom: 4 }}>
            Include condition, features and reason for selling
          </Typography>
          <Typography sx={{ color: "#484848", fontWeight: "80%", fontSize: "20px" }}>
            <strong>
              Furnished
            </strong>
          </Typography>
          <MenuItem sx={{ display: "flex", mt: 2 }}>

            <Typography sx={{ fontSize: "14px", color: "#484848", paddingRight: 19 }}>
              <Radio />  FURNISHED
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "#484848" }}>
              <Radio />  UNFURNISHED
            </Typography>

          </MenuItem>
          <Divider />
          <Grid container spacing={6}>
          <Box sx={{  display:'flex'}}>
          <Grid item xs={2}>
          
          <Select
            label=" Bedrooms"
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
         


          >
            <MenuItem value={10}>hello</MenuItem>
            <MenuItem value={21}>hey</MenuItem>
            <MenuItem value={22}>hi</MenuItem>


          </Select>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            sx={{ width: "275px" }}

          >
            <MenuItem value={10}>hello</MenuItem>
            <MenuItem value={21}>hey</MenuItem>
            <MenuItem value={22}>hi</MenuItem>


          </Select>
          </Grid>
          </Box>
          <Box>
          <Grid item xs={2}>
           
          <Typography sx={{ color: "#484848", fontWeight: "80%", fontSize: "20px" }}>
            <strong>
              Area Unit*
            </strong>
          </Typography>
          <Typography sx={{ color: "#484848", fontWeight: "80%", fontSize: "20px" }}>
            <strong>
              Area*
            </strong>
          </Typography>
          
       <Box>

          <Select
            label=" Bedrooms"
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            sx={{ width: "275px", mr: 1 }}


          >
            <MenuItem value={10}>hello</MenuItem>
            <MenuItem value={21}>hey</MenuItem>
            <MenuItem value={22}>hi</MenuItem>


          </Select>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            sx={{ width: "275px" }}

          >
            <MenuItem value={10}>hello</MenuItem>
            <MenuItem value={21}>hey</MenuItem>
            <MenuItem value={22}>hi</MenuItem>


          </Select>
       </Box>
       </Grid>
       </Box>
          </Grid>
         
          <Divider/>
          <Typography sx={{ color: "#484848", fontWeight: "80%", fontSize: "20px", paddingY:2 }}>
              <strong>
                Set A Price
              </strong>
            </Typography>
            <TextField label="Your Price Here" variant="outlined" sx={{ width: '100%', mb: '6px' }} />
            <Typography sx={{ color: "#484848", fontWeight: "80%", fontSize: "20px", paddingY:2 }}>
              <strong>
              YOUR AD'S LOCATION
              </strong>
            </Typography>
            <Box sx={{ display:"flex", marginY:2}}>
            
            <Select
              label=" Bedrooms"
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              sx={{ width: "275px", mr: 1 }}


            >
              
              <MenuItem value={10}>hello</MenuItem>
              <MenuItem value={21}>hey</MenuItem>
              <MenuItem value={22}>hi</MenuItem>


            </Select>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              sx={{ width: "275px" }}

            >
              <MenuItem value={10}>hello</MenuItem>
              <MenuItem value={21}>hey</MenuItem>
              <MenuItem value={22}>hi</MenuItem>


            </Select>
            </Box>

  <Button variant="contained" sx={{ width:"275px", p:1.5, backgroundColor:"#3B5998", marginTop:2}}>Post Now</Button>

        </Box>
      </Box>

    </Fragment>
  )
}
export default Form