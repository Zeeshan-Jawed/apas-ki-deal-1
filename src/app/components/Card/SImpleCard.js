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

function SimpleCard({ data }) {
  return (
    <Grid container spacing={2}  >
      {data.map((item, index) => (
        <Grid key={index} item xs={2.4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="40%"
              sx={{ width: "220px !important" }}
              image={item.image}
              alt="load"
            />
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
                  {item.name}
                </Typography>
                <FavoriteBorderOutlined />
              </Box>
              <Typography variant="body2" sx={{ color: "#484848", fontWeight: 700, fontSize: "16px" }}>
                Rs. {item.price}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2 }}>
                  {item.address}
                </Typography>
                <Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2, textAlign: "right" }}>
                  {item.date}
                </Typography>
              </Box>
            </CardContent>

          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
export default SimpleCard
