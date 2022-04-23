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
function Home() {
	return (
		<Layout>
			<Divider />
			<Box p={2} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
				<Typography sx={{
					color: "#484848",
					fontSize: "17px",
				}} >
					Mobile
				</Typography>
				<Typography sx={{
					color: "#484848",
					fontSize: "17px",
				}} >
					Vehicles
				</Typography>
				<Typography sx={{
					color: "#484848",
					fontSize: "17px",
				}} >
					Property For Rent
				</Typography>
				<Typography sx={{
					color: "#484848",
					fontSize: "17px",
				}} >
					Property For Sale
				</Typography>
				<Typography sx={{
					color: "#484848",
					fontSize: "17px",
				}} >
					Services
				</Typography>
				<Typography sx={{
					color: "#484848",
					fontSize: "17px",
				}} >
					Jobs
				</Typography>
				<Typography sx={{
					color: "#484848",
					fontSize: "17px",

				}} >
					Community
				</Typography>



			</Box>
			<Divider />

			<Box p={2}  >
				<CardMedia
					sx={{ paddingY: 2, height: 280 }}
					image={Images.pic2}
				>
					<Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", marginY: 10, marginX: 10, borderRadius: "2%", px: 2, py: 2 }}>

						<Box sx={{ display: "flex", mb: 2 }}>
							<MenuItem >
								<Typography sx={{
									color: "#FFFFFF",
									fontSize: "15px",
								}} >
									Searching in
								</Typography>
							</MenuItem>
							<MenuItem >
								<Typography sx={{
									color: "#FFFFFF",
									fontSize: "15px",
								}} >
									All
								</Typography>
							</MenuItem >
							<MenuItem >
								<Typography sx={{
									color: "#FFFFFF",
									fontSize: "15px",
								}} >
									Mobile
								</Typography>
							</MenuItem >
							<MenuItem >
								<Typography sx={{
									color: "#FFFFFF",
									fontSize: "15px",
								}} >
									Vehicles
								</Typography>
							</MenuItem >
							<MenuItem >
								<Typography sx={{
									color: "#FFFFFF",
									fontSize: "15px",
								}} >
									Property
								</Typography>
							</MenuItem >
							<MenuItem >
								<Typography sx={{
									color: "#FFFFFF",
									fontSize: "15px",
								}} >
									Services
								</Typography>
							</MenuItem >
							<MenuItem >
								<Typography sx={{
									color: "#FFFFFF",
									fontSize: "15px",
								}} >
									Jobs
								</Typography>
							</MenuItem >
							<MenuItem >

								<Typography sx={{
									color: "#FFFFFF",
									fontSize: "15px",
								}} >
									All Categories
								</Typography>
							</MenuItem >

						</Box>

						<Box >
							<Grid container spacing={0.5}  >
								<Grid item xs={10}>
									<FormControl sx={{ width: '100%', backgroundColor: "#FFFFFF", borderRadius: "2%" }}>
										<OutlinedInput placeholder="What are you looking for?" sx={{ color: "#BCBCBC" }} />
									</FormControl>

								</Grid>
								<Grid item xs={2} >
									<Button variant="contained" size='100px' startIcon={<SearchOutlinedIcon />} sx={{
										fontSize: "13px", backgroundColor: "#3B5998",
										width: 144,
										height: 55,




									}}>
										LOCATE
									</Button>
								</Grid>
							</Grid>
						</Box>

					</Box>
				</CardMedia>

			</Box>
			<Box>
				<Typography variant='h5' sx={{ color: "#484848", fontSize: "23px", letterSpacing: "0.57px", paddingY: 4 }}>
					<strong>Popular Categories</strong>
				</Typography>
			</Box>
			<Box>
				<Grid container spacing={3} >

					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
						<Box sx={{ px: '18px', py: '24px', bgcolor: "#FFFFFF",boxShadow: '0px 2px 8px #CFCFCF1C',borderRadius:2}}>
							<Box sx={{ display: 'flex', borderRadius: '70% 40% 30% 80% / 55% 45% 60% 50%', width: "80px", height: "80px", bgcolor: "#F6F6F6", mx: 'auto', mb: 1 }}>
								<CardMedia
									component="img"
									height="25px"
									sx={{ width: "31px !important", m: 'auto' }}
									image={Images.pic19}
									alt="camera"
								/>
							</Box>
							<Typography sx={{ color: '#484848', fontSize: "18px", textAlign: "center" }}>
								Vehicles
							</Typography>
						</Box>
					</Grid>


					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
					<Box sx={{ px: '18px', py: '24px', bgcolor: "#FFFFFF",boxShadow: '0px 2px 8px #CFCFCF1C',borderRadius:2}}>
							<Box sx={{ display: 'flex', borderRadius: '70% 40% 30% 80% / 55% 45% 60% 50%', width: "80px", height: "80px", bgcolor: "#F6F6F6", mx: 'auto', mb: 1 }}>
								<CardMedia
									component="img"
									height="25px"
									sx={{ width: "31px !important", m: 'auto' }}
									image={Images.pic20}
									alt="camera"
								/>
							</Box>
							<Typography sx={{ color: '#484848', fontSize: "18px", textAlign: "center" }}>
								Property
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
					<Box sx={{ px: '18px', py: '24px', bgcolor: "#FFFFFF",boxShadow: '0px 2px 8px #CFCFCF1C',borderRadius:2}}>
							<Box sx={{ display: 'flex', borderRadius: '70% 40% 30% 80% / 55% 45% 60% 50%', width: "80px", height: "80px", bgcolor: "#F6F6F6", mx: 'auto', mb: 1 }}>
								<CardMedia
									component="img"
									height="25px"
									sx={{ width: "31px !important", m: 'auto' }}
									image={Images.pic21}
									alt="camera"
								/>
							</Box>
							<Typography sx={{ color: '#484848', fontSize: "18px", textAlign: "center" }}>
								Bikes
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
					<Box sx={{ px: '18px', py: '24px', bgcolor: "#FFFFFF",boxShadow: '0px 2px 8px #CFCFCF1C',borderRadius:2}}>
							<Box sx={{ display: 'flex', borderRadius: '70% 40% 30% 80% / 55% 45% 60% 50%', width: "80px", height: "80px", bgcolor: "#F6F6F6", mx: 'auto', mb: 1 }}>
								<CardMedia
									component="img"
									height="25px"
									sx={{ width: "31px !important", m: 'auto' }}
									image={Images.pic22}
									alt="camera"
								/>
							</Box>
							<Typography sx={{ color: '#484848', fontSize: "18px", textAlign: "center" }}>
								Fashion&Beauty
							</Typography>
							</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
					<Box sx={{ px: '18px', py: '24px', bgcolor: "#FFFFFF",boxShadow: '0px 2px 8px #CFCFCF1C',borderRadius:2}}>
							<Box sx={{ display: 'flex', borderRadius: '70% 40% 30% 80% / 55% 45% 60% 50%', width: "80px", height: "80px", bgcolor: "#F6F6F6", mx: 'auto', mb: 1 }}>
								<CardMedia
									component="img"
									height="25px"
									sx={{ width: "31px !important", m: 'auto' }}
									image={Images.pic24}
									alt="camera"
								/>
							</Box>
							<Typography sx={{ color: '#484848', fontSize: "18px", textAlign: "center" }}>
								Jobs
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
					<Box sx={{ px: '18px', py: '24px', bgcolor: "#FFFFFF",boxShadow: '0px 2px 8px #CFCFCF1C',borderRadius:2}}>
							<Box sx={{ display: 'flex', borderRadius: '70% 40% 30% 80% / 55% 45% 60% 50%', width: "80px", height: "80px", bgcolor: "#F6F6F6", mx: 'auto', mb: 1 }}>
								<CardMedia
									component="img"
									height="25px"
									sx={{ width: "31px !important", m: 'auto' }}
									image={Images.pic25}
									alt="camera"
								/>
							</Box>
							<Typography sx={{ color: '#484848', fontSize: "18px", textAlign: "center" }}>
								Mobiles
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
					<Box sx={{ px: '18px', py: '24px', bgcolor: "#FFFFFF",boxShadow: '0px 2px 8px #CFCFCF1C',borderRadius:2}}>
							<Box sx={{ display: 'flex', borderRadius: '70% 40% 30% 80% / 55% 45% 60% 50%', width: "80px", height: "80px", bgcolor: "#F6F6F6", mx: 'auto', mb: 1 }}>
								<CardMedia
									component="img"
									height="25px"
									sx={{ width: "31px !important", m: 'auto' }}
									image={Images.pic26}
									alt="camera"
								/>
							</Box>
							<Typography sx={{ color: '#484848', fontSize: "18px", textAlign: "center" }}>
								Electronics
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
					<Box sx={{ px: '18px', py: '24px', bgcolor: "#FFFFFF",boxShadow: '0px 2px 8px #CFCFCF1C',borderRadius:2}}>
							<Box sx={{ display: 'flex', borderRadius: '70% 40% 30% 80% / 55% 45% 60% 50%', width: "80px", height: "80px", bgcolor: "#F6F6F6", mx: 'auto', mb: 1 }}>
								<CardMedia
									component="img"
									height="25px"
									sx={{ width: "31px !important", m: 'auto' }}
									image={Images.pic27}
									alt="camera"
								/>
							</Box>
							<Typography sx={{ color: '#484848', fontSize: "18px", textAlign: "center" }}>
								Furniture
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
					<Box sx={{ px: '18px', py: '24px', bgcolor: "#FFFFFF",boxShadow: '0px 2px 8px #CFCFCF1C',borderRadius:2}}>
							<Box sx={{ display: 'flex', borderRadius: '70% 40% 30% 80% / 55% 45% 60% 50%', width: "80px", height: "80px", bgcolor: "#F6F6F6", mx: 'auto', mb: 1 }}>
								<CardMedia
									component="img"
									height="25px"
									sx={{ width: "31px !important", m: 'auto' }}
									image={Images.pic28}
									alt="camera"
								/>
							</Box>
							<Typography sx={{ color: '#484848', fontSize: "18px", textAlign: "center" }}>
								Services
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
					<Box sx={{ px: '18px', py: '24px', bgcolor: "#FFFFFF",boxShadow: '0px 2px 8px #CFCFCF1C',borderRadius:2}}>
							<Box sx={{ display: 'flex', borderRadius: '70% 40% 30% 80% / 55% 45% 60% 50%', width: "80px", height: "80px", bgcolor: "#F6F6F6", mx: 'auto', mb: 1 }}>
								<CardMedia
									component="img"
									height="25px"
									sx={{ width: "31px !important", m: 'auto' }}
									image={Images.pic29}
									alt="camera"
								/>
							</Box>
							<Typography sx={{ color: '#484848', fontSize: "18px", textAlign: "center" }}>
								Books
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
					<Box sx={{ px: '18px', py: '24px', bgcolor: "#FFFFFF",boxShadow: '0px 2px 8px #CFCFCF1C',borderRadius:2}}>
							<Box sx={{ display: 'flex', borderRadius: '70% 40% 30% 80% / 55% 45% 60% 50%', width: "80px", height: "80px", bgcolor: "#F6F6F6", mx: 'auto', mb: 1 }}>
								<CardMedia
									component="img"
									height="25px"
									sx={{ width: "31px !important", m: 'auto' }}
									image={Images.pic30}
									alt="camera"
								/>
							</Box>
							<Typography sx={{ color: '#484848', fontSize: "18px", textAlign: "center" }}>
								Kids
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
					<Box sx={{ px: '18px', py: '24px', bgcolor: "#FFFFFF",boxShadow: '0px 2px 8px #CFCFCF1C',borderRadius:2}}>
							<Box sx={{ display: 'flex', borderRadius: '70% 40% 30% 80% / 55% 45% 60% 50%', width: "80px", height: "80px", bgcolor: "#F6F6F6", mx: 'auto', mb: 1 }}>
								<CardMedia
									component="img"
									height="25px"
									sx={{ width: "31px !important", m: 'auto' }}
									image={Images.pic31}
									alt="camera"
								/>
							</Box>
							<Typography sx={{ color: '#484848', fontSize: "18px", textAlign: "center" }}>
								Animals
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box p={1}>
				<Typography variant='h5' p={0.5} sx={{ color: "#484848", letterSpacing: "0.57px", fontWeight: "90%", fontSize: "23px", fontFamily: "sans-serif", paddingY: 4 }}>
					<strong>Latest Ads</strong>
				</Typography>
				<Box>
					<Grid container spacing={2}  >
						<Grid item xs={2.4}>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="40%"
									sx={{ width: "220px !important" }}
									image={Images.pic5}
									alt="load"
								/>
								<CardContent>
									<Box sx={{ display: 'flex',justifyContent:'space-between' }}>
										<Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
											Samsung Galaxy A32
										</Typography>
									<FavoriteBorderOutlined />
									</Box>
									<Typography variant="body2" sx={{ color: "#484848", fontWeight: 700, fontSize: "16px" }}>
										Rs. 42,000
									</Typography>
									<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
										<Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2 }}>
											ALI TOWN, LAHORE
										</Typography>
										<Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2, textAlign: "right" }}>
											26 MARCH
										</Typography>
									</Box>
								</CardContent>

							</Card>
						</Grid>
						<Grid item xs={2.4}>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="40%"
									sx={{ width: "220px !important" }}
									image={Images.pic6}
									alt="load"
								/>
								<CardContent>
									<Box sx={{ display: 'flex' ,justifyContent:'space-between'}}>
										<Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
											Samsung Galaxy A32
										</Typography>
										<FavoriteBorderOutlined />
									</Box>
									
									<Typography variant="body2" sx={{ color: "#484848", fontWeight: 700, fontSize: "16px" }}>
										Rs. 42,000
									</Typography>
									<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
										<Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2 }}>
											ALI TOWN, LAHORE
										</Typography>
										<Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2, textAlign: "right" }}>
											26 MARCH
										</Typography>
									</Box>
								</CardContent>

							</Card>
						</Grid>
						<Grid item xs={2.4}>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="40%"
									sx={{ width: "220px !important" }}
									image={Images.pic7}
									alt="load"
								/>
								<CardContent>
									<Box sx={{ display: 'flex' ,justifyContent:'space-between'}}>
										<Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
											Samsung Galaxy A32
										</Typography>
										<FavoriteBorderOutlined />
									</Box>
									
									<Typography variant="body2" sx={{ color: "#484848", fontWeight: 700, fontSize: "16px" }}>
										Rs. 42,000
									</Typography>
									<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
										<Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2 }}>
											ALI TOWN, LAHORE
										</Typography>
										<Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2, textAlign: "right" }}>
											26 MARCH
										</Typography>
									</Box>
								</CardContent>

							</Card>
						</Grid>
						<Grid item xs={2.4}>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="40%"
									sx={{ width: "220px !important" }}
									image={Images.pic8}
									alt="load"
								/>
								<CardContent>
									<Box sx={{ display: 'flex' ,justifyContent:'space-between'}}>
										<Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
											Samsung Galaxy A32
										</Typography>
										<FavoriteBorderOutlined />
									</Box>
									
									<Typography variant="body2" sx={{ color: "#484848", fontWeight: 700, fontSize: "16px" }}>
										Rs. 42,000
									</Typography>
									<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
										<Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2 }}>
											ALI TOWN, LAHORE
										</Typography>
										<Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2, textAlign: "right" }}>
											26 MARCH
										</Typography>
									</Box>
								</CardContent>

							</Card>
						</Grid>
						<Grid item xs={2.4}>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="40%"
									sx={{ width: "220px !important" }}
									image={Images.pic9}
									alt="load"
								/>
								<CardContent>
									<Box sx={{ display: 'flex',justifyContent:'space-between' }}>
										<Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
											Samsung Galaxy A32
										</Typography>
										<FavoriteBorderOutlined />
									</Box>
									
									<Typography variant="body2" sx={{ color: "#484848", fontWeight: 700, fontSize: "16px" }}>
										Rs. 42,000
									</Typography>
									<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
										<Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2 }}>
											ALI TOWN, LAHORE
										</Typography>
										<Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2, textAlign: "right" }}>
											26 MARCH
										</Typography>
									</Box>
								</CardContent>

							</Card>
						</Grid>
						<Grid item xs={2.4}>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="40%"
									sx={{ width: "220px !important" }}
									image={Images.pic10}
									alt="load"
								/>
								<CardContent>
									<Box sx={{ display: 'flex',justifyContent:'space-between' }}>
										<Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
											Samsung Galaxy A32
										</Typography>
										<FavoriteBorderOutlined />
									</Box>
							
									<Typography variant="body2" sx={{ color: "#484848", fontWeight: 700, fontSize: "16px" }}>
										Rs. 42,000
									</Typography>
									<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
										<Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2 }}>
											ALI TOWN, LAHORE
										</Typography>
										<Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2, textAlign: "right" }}>
											26 MARCH
										</Typography>
									</Box>
								</CardContent>

							</Card>
						</Grid>
						<Grid item xs={2.4}>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="40%"
									sx={{ width: "220px !important" }}
									image={Images.pic11}
									alt="load"
								/>
								<CardContent>
									<Box sx={{ display: 'flex',justifyContent:'space-between' }}>
										<Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
											Samsung Galaxy A32
										</Typography>
										<FavoriteBorderOutlined />
									</Box>
								
									<Typography variant="body2" sx={{ color: "#484848", fontWeight: 700, fontSize: "16px" }}>
										Rs. 42,000
									</Typography>
									<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
										<Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2 }}>
											ALI TOWN, LAHORE
										</Typography>
										<Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2, textAlign: "right" }}>
											26 MARCH
										</Typography>
									</Box>
								</CardContent>

							</Card>
						</Grid>
						<Grid item xs={2.4}>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="40%"
									sx={{ width: "220px !important" }}
									image={Images.pic12}
									alt="load"
								/>
								<CardContent>
									<Box sx={{ display: 'flex' ,justifyContent:'space-between'}}>
										<Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
											Samsung Galaxy A32
										</Typography>
										<FavoriteBorderOutlined />
									</Box>
									
									<Typography variant="body2" sx={{ color: "#484848", fontWeight: 700, fontSize: "16px" }}>
										Rs. 42,000
									</Typography>
									<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
										<Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2 }}>
											ALI TOWN, LAHORE
										</Typography>
										<Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2, textAlign: "right" }}>
											26 MARCH
										</Typography>
									</Box>
								</CardContent>

							</Card>
						</Grid>
						<Grid item xs={2.4}>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="40%"
									sx={{ width: "220px !important" }}
									image={Images.pic13}
									alt="load"
								/>
								<CardContent>
									<Box sx={{ display: 'flex',justifyContent:'space-between' }}>
										<Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
											Samsung Galaxy A32
										</Typography>
										<FavoriteBorderOutlined />
									</Box>
									
									<Typography variant="body2" sx={{ color: "#484848", fontWeight: 700, fontSize: "16px" }}>
										Rs. 42,000
									</Typography>
									<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
										<Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2 }}>
											ALI TOWN, LAHORE
										</Typography>
										<Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2, textAlign: "right" }}>
											26 MARCH
										</Typography>
									</Box>
								</CardContent>

							</Card>
						</Grid>
						<Grid item xs={2.4}>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="40%"
									sx={{ width: "220px !important" }}
									image={Images.pic14}
									alt="load"
								/>
								<CardContent>
									<Box sx={{ display: 'flex',justifyContent:'space-between' }}>
										<Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
											Samsung Galaxy A32
										</Typography>
										<FavoriteBorderOutlined />
									</Box>
								
									<Typography variant="body2" sx={{ color: "#484848", fontWeight: 700, fontSize: "16px" }}>
										Rs. 42,000
									</Typography>
									<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
										<Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2 }}>
											ALI TOWN, LAHORE
										</Typography>
										<Typography variant="body2" sx={{ color: "#898B8F", fontWeight: 700, fontSize: "8px", paddingTop: 2, textAlign: "right" }}>
											26 MARCH
										</Typography>
									</Box>
								</CardContent>

							</Card>
						</Grid>


					</Grid>
				</Box>

			</Box>




		</Layout >


	)
}
export default Home
