import { Box, Button, CardMedia, Container, Divider, Grid, Typography, MenuItem, Menu, OutlinedInput, FormControl, Card, CardContent, CardActions } from '@mui/material';
import React, { Fragment } from 'react';
import Images from '../../assets/Images/Images';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AddIcon from '@mui/icons-material/Add';
import { height, textAlign } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Header from '../../layout/Header';
import Layout from '../../layout/Layout';
import { FavoriteBorderOutlined, Search } from '@mui/icons-material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import IronIcon from '@mui/icons-material/Iron';
import ChairIcon from '@mui/icons-material/Chair';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PetsIcon from '@mui/icons-material/Pets';
function Categories({ data }) {
  return (

    <Grid container spacing={3} >
      {data.map((item, index) => (
        <Grid key={index} item xs={1.82} sx={{ marginLeft: 1.8 }}>
          <Box sx={{ px: '18px', py: '24px', bgcolor: "#FFFFFF", boxShadow: '0px 2px 8px #CFCFCF1C', borderRadius: 2 }}>
            <Box sx={{ display: 'flex', borderRadius: '70% 40% 30% 80% / 55% 45% 60% 50%', width: "80px", height: "80px", bgcolor: "#F6F6F6", mx: 'auto', mb: 1 }}>
              <CardMedia
                component="img"
                height="25px"
                sx={{ width: "31px !important", m: 'auto' }}
                image={item.image}
                alt="camera"
              />
            </Box>
            <Typography sx={{ color: '#484848', fontSize: "18px", textAlign: "center" }}>
              {item.name}
            </Typography>
          </Box>
        </Grid>

      ))}
    </Grid>

  )
}
export default Categories