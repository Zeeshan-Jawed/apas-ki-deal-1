import { Avatar, Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Images from '../../assets/Images/Images';
import Layout from './../../layout/Layout';

function Sell() {
    const catgeorydata = [
        { id: 1, name: 'Mobile', image: 'https://i.imgur.com/azWFPSU.png' },
        { id: 2, name: 'Car', image: 'https://i.imgur.com/azWFPSU.png' },
        { id: 3, name: 'Job', image: 'https://i.imgur.com/azWFPSU.png' }
        , { id: 4, name: 'Property', image: 'https://i.imgur.com/azWFPSU.png' },
        { id: 5, name: 'Bike', image: 'https://i.imgur.com/azWFPSU.png' },
    ]
    const [category, setcategory] = useState({})

    return (
        <Layout>
            <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: '25px', fontWeight: 'Bold', mb: 4 }}>
                    What are you Listing?
                </Typography>
                <img src={Images.selllogo} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Grid container spacing={2} sx={{ width: '50%', m: 2 }}>

                    {catgeorydata.map((item) => {
                        return (
                            <Grid item xs={6} lg={3}  >
                                <Box sx={{my:2}}>
                                <Box style={{
                                    backgroundColor: '#3B5998', width: '59px', height: '59px',
                                    borderRadius: '90%'
                                }}>
                                    <img src={item.image} style={{
                                        width: '15px', height: '22px', position: 'relative',
                                        top: 17, left: 22
                                    }} />
                                    <Typography sx={{ px: 1, py:5, fontSize: '14px', color: '#484848', fontWeight: 'bold',textAlign:'center' }}>{item.name}</Typography>
                                </Box>
                                </Box>


                            </Grid>
                        )
                    })}



                </Grid>
            </Box>




        </Layout>
    )
}

export default Sell