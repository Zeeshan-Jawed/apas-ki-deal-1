import react from 'react'
import { Button, Typography, TextField, FormControl, IconButton, InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import Layout from '../../layout/Layout';


const MyAds = () => {

    return (
        <Layout>
            <Box sx={{ bgcolor: 'white', p: 3 }}>
                <Typography sx={{ fontWeight: 'bold', pl: 2 }}>MY ADS</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                    <FormControl sx={{ width: '30%' }}>
                        <TextField
                            placeholder="Search By Ad Title"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment >
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </FormControl>
                    <Box >
                        <Button variant='outlined' sx={{ ml: 2, color: '#898B8F', p: 1 }}>View All</Button>
                        <Button variant='outlined' sx={{ ml: 2, color: '#898B8F', p: 1 }}>Active</Button>
                        <Button variant='outlined' sx={{ ml: 2, color: '#898B8F', p: 1 }}>InActive</Button>
                        <Button variant='outlined' sx={{ ml: 2, color: '#898B8F', p: 1 }}>Pending</Button>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ bgcolor: '#EBEBEB', display: 'flex',justifyContent:'space-between', p: 1, m: 2 }}>
                        <Box sx={{display:'flex'}}>
                        <CalendarMonthOutlinedIcon sx={{ color: '#484848' }} />
                        <Typography sx={{ color: '#484848', pl: 1, fontWeight: 600, fontSize: '18px' }}>26 MARCH</Typography>
                        </Box>
                        <FormatListBulletedOutlinedIcon />
                    </Box>
                    <Box sx={{ display: 'flex', p: 1, m: 2 }}>
                        <img style={{ borderRadius: '5%' }}
                            src="https://www.cultureindoor.eu/30079/tuindeco-house-of-games-marii-235-x-235-x-211-cm.jpg"
                            width='235' />
                        <Box sx={{ px: 2, width: '100%' }}>
                            <Typography width={'48%'} sx={{ fontSize: '26px' }}>Brand new 30×80 commercial plaza for sale in G-8
                            </Typography>
                            <Typography sx={{ fontSize: '28px', fontWeight: 600 }}>RS 250,000,000</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 9 }} >
                                <Box sx={{ display: 'flex' }}>
                                    <VisibilityOutlinedIcon sx={{ color: '#898B8F', fontSize: '18px', pt: '4%' }} />
                                    <Typography sx={{ color: '#898B8F', fontSize: '18px', p: 1 }}>Views : 0</Typography>
                                    <LocalPhoneOutlinedIcon sx={{ color: '#898B8F', fontSize: '18px', pt: '4%' }} />
                                    <Typography sx={{ color: '#898B8F', fontSize: '18px', p: 1 }}>Tel : 123</Typography>
                                    <FavoriteBorderOutlinedIcon sx={{ color: '#898B8F', fontSize: '18px', pt: '4%' }} />
                                    <Typography sx={{ color: '#898B8F', fontSize: '18px', p: 1 }}>Likes : 0</Typography>
                                </Box>
                                <Button variant="contained" sx={{ color: 'white', bgcolor: '#3B5998', px: 4, py: 1, borderRadius: 2 }} >Active</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ bgcolor: '#EBEBEB', display: 'flex',justifyContent:'space-between', p: 1, m: 2 }}>
                        <Box sx={{display:'flex'}}>
                        <CalendarMonthOutlinedIcon sx={{ color: '#484848' }} />
                        <Typography sx={{ color: '#484848', pl: 1, fontWeight: 600, fontSize: '18px' }}>26 MARCH</Typography>
                        </Box>
                        <FormatListBulletedOutlinedIcon />
                    </Box>
                    <Box sx={{ display: 'flex', p: 1, m: 2 }}>
                        <img style={{ borderRadius: '5%' }}
                            src="https://www.cultureindoor.eu/30079/tuindeco-house-of-games-marii-235-x-235-x-211-cm.jpg"
                            width='235' />
                        <Box sx={{ px: 2, width: '100%' }}>
                            <Typography width={'48%'} sx={{ fontSize: '26px' }}>Brand new 30×80 commercial plaza for sale in G-8
                            </Typography>
                            <Typography sx={{ fontSize: '28px', fontWeight: 600 }}>RS 250,000,000</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 9 }} >
                                <Box sx={{ display: 'flex' }}>
                                    <VisibilityOutlinedIcon sx={{ color: '#898B8F', fontSize: '18px', pt: '4%' }} />
                                    <Typography sx={{ color: '#898B8F', fontSize: '18px', p: 1 }}>Views : 0</Typography>
                                    <LocalPhoneOutlinedIcon sx={{ color: '#898B8F', fontSize: '18px', pt: '4%' }} />
                                    <Typography sx={{ color: '#898B8F', fontSize: '18px', p: 1 }}>Tel : 123</Typography>
                                    <FavoriteBorderOutlinedIcon sx={{ color: '#898B8F', fontSize: '18px', pt: '4%' }} />
                                    <Typography sx={{ color: '#898B8F', fontSize: '18px', p: 1 }}>Likes : 0</Typography>
                                </Box>
                                <Button variant="contained" sx={{ color: 'white', bgcolor: '#3B5998', px: 4, py: 1, borderRadius: 2 }} >Active</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}

export default MyAds