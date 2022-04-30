import { KeyboardArrowDown } from '@mui/icons-material'
import { Box, Button, CardMedia, Divider, FormControl, Grid, InputLabel, MenuItem, Radio, Select, TextField, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import AddCircleIcon from '@mui/icons-material/AddCircle';
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
                image= 'Images.pic1'
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
        <Box>
          <Typography sx={{ color: "#484848", fontSize: "29px", fontWeight: 600, textAlign: "center" }}>
            <CloseIcon sx={{ fontSize: "28px", paddingTop: 1 }} />  Include some details</Typography>
        </Box>

        <Box p={7} >
          <Box sx={{ bgcolor: "#3B5998", height: "40%", width: "100%", display:"flex", justifyContent:"center" ,mb:4}}>
          <Typography sx={{py:6, color:"#FFFFFF"}}>
            <PhotoSizeSelectActualIcon sx={{fontSize:'57px',mr:2}}/>
           <AddCircleIcon sx={{fontSize:'37px',mr:2, mb:1}} />
           </Typography> 
           <Typography sx={{py:6, color:"#FFFFFF", mt:2.5, fontWeight:300}}>Add Images</Typography>
          </Box>
          <Typography sx={{ color: "#484848", fontWeight: 600, fontSize: "20px", mb: 2 }}>
            
              Ad Title
           
          </Typography>
          <TextField variant="outlined" sx={{ width: '100%', mb: '6px' }} />
          <Typography sx={{ fontSize: "13px", color: '#707070', paddingBottom: 4 }}>
            Mention the key features of your item (e.g. brand, model, age, type)
          </Typography>
          <Typography sx={{ color: "#484848", fontWeight: 600, fontSize: "20px", mb: 2 }}>
           
              Description
            
          </Typography>
          <TextField variant="outlined" multiline rows={5} fullWidth sx={{ width: '100%', borderRadius: 4, mb: '6px' }} />
          <Typography sx={{ fontSize: "13px", color: '#707070', paddingBottom: 4 }}>
            Include condition, features and reason for selling
          </Typography>
          <Typography sx={{ color: "#484848", fontWeight: 600, fontSize: "20px" }}>
           
              Furnished
          
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
          <FormControl sx={{ width: '50%', marginY: 3 }}>
            <Select
              label=" Bedrooms"
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              sx={{ mr: 1 }}
            >
              <MenuItem value={10}>hello</MenuItem>
              <MenuItem value={21}>hey</MenuItem>
              <MenuItem value={22}>hi</MenuItem>


            </Select>
          </FormControl>
          <FormControl sx={{ width: '50%', marginY: 3 }}>
            <Select
              label=" Bedrooms"
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"

            >
              <MenuItem value={10}>hello</MenuItem>
              <MenuItem value={21}>hey</MenuItem>
              <MenuItem value={22}>hi</MenuItem>


            </Select>
          </FormControl>
          <FormControl sx={{ width: '50%', marginY: 3 }}>
            <Typography sx={{ color: "#484848", fontSize: "20px", fontWeight: 600 }}> Area Unit*</Typography>
            <Select
              label=" Bedrooms"
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              sx={{ mr: 1 }}
            >
              <MenuItem value={10}>hello</MenuItem>
              <MenuItem value={21}>hey</MenuItem>
              <MenuItem value={22}>hi</MenuItem>


            </Select>
          </FormControl>
          <FormControl sx={{ width: '50%', marginY: 3 }}>
            <Typography sx={{ color: "#484848", fontSize: "20px", fontWeight: 600 }}> Area*</Typography>
            <Select
              label=" Bedrooms"
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"

            >
              <MenuItem value={10}>hello</MenuItem>
              <MenuItem value={21}>hey</MenuItem>
              <MenuItem value={22}>hi</MenuItem>


            </Select>
          </FormControl>


          <Divider />
          <Typography sx={{ color: "#484848", fontWeight: 600, fontSize: "20px", paddingY: 2 }}>
            
              Set A Price
         
          </Typography>
          <TextField label="Your Price Here" variant="outlined" sx={{ width: '100%', mb: '6px' }} />
          <Typography sx={{ color: "#484848", fontWeight: 600, fontSize: "20px", paddingY: 2 }}>
         
              YOUR AD'S LOCATION
            
          </Typography>
          <Box sx={{ display: "flex", marginY: 2 }}>

            <Select
              label=" Bedrooms"
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              sx={{ width: "50%", mr: 1 }}


            >

              <MenuItem value={10}>hello</MenuItem>
              <MenuItem value={21}>hey</MenuItem>
              <MenuItem value={22}>hi</MenuItem>


            </Select>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              sx={{ width: "50%" }}

            >
              <MenuItem value={10}>hello</MenuItem>
              <MenuItem value={21}>hey</MenuItem>
              <MenuItem value={22}>hi</MenuItem>


            </Select>
          </Box>

          <Button variant="contained" sx={{ width: "50%", p: 2, backgroundColor: "#3B5998", marginY: 4, borderRadius: 2.4 }}>Post Now</Button>

        </Box>
      </Box>

    </Fragment>
  )
}
export default Form