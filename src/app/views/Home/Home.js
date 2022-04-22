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
					<Box sx={{ backgroundColor: "#474747", width: '950px', height: '137px', marginY: 10, marginX: 10, borderRadius: "2%" }}>

						<Box p={2} sx={{ display: 'flex', justifyContent: 'space-between', marginLeft: 1.5 }}>
							<Typography sx={{
								color: "#FFFFFF",
								fontSize: "15px",
							}} >
								Searching in
							</Typography>
							<Typography sx={{
								color: "#FFFFFF",
								fontSize: "15px",
							}} >
								All
							</Typography>
							<Typography sx={{
								color: "#FFFFFF",
								fontSize: "15px",
							}} >
								Mobile
							</Typography>
							<Typography sx={{
								color: "#FFFFFF",
								fontSize: "15px",
							}} >
								Vehicles
							</Typography>
							<Typography sx={{
								color: "#FFFFFF",
								fontSize: "15px",
							}} >
								Property
							</Typography>
							<Typography sx={{
								color: "#FFFFFF",
								fontSize: "15px",
							}} >
								Services
							</Typography>
							<Typography sx={{
								color: "#FFFFFF",
								fontSize: "15px",
							}} >
								Jobs
							</Typography>
							<Typography sx={{
								color: "#FFFFFF",
								fontSize: "15px",
							}} >
								All Categories
							</Typography>

						</Box>
						<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

							<FormControl sx={{ width: '80%', backgroundColor: "#FFFFFF", marginLeft: 4, opacity: "100%" }}>
								<OutlinedInput placeholder="What are you looking for?" sx={{ color: "#BCBCBC" }} />

							</FormControl>



							<MenuItem>
								<Button variant="contained" sx={{
									fontSize: "13px", backgroundColor: "#3B5998", maxWidth: "200px",
									maxHeight: "50px",
									minWidth: "30px",
									minHeight: "30px"
								}}>
									<SearchOutlinedIcon />	LOCATE
								</Button>
							</MenuItem>

						</Box>

					</Box>
				</CardMedia>

			</Box>
			<Box>
				<Typography variant='h5' sx={{ color: "#484848", fontSize: "23px", letterSpacing: "0.57px", p: 1.5 }}>
					<strong>Popular Categories</strong>
				</Typography>
			</Box>
			<Box>
				<Grid container spacing={3} >
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
						<Box  sx={{ border: '1px solid rgba(0,47,52,.36)', padding: 6, width: '47px', height: '47px' ,color:"#FFFFFF"}}>
							<Box sx={{ borderRadius: "40%", color: "black", width: '40px', height: '40px' }}>
								<DirectionsCarIcon sx={{paddingLeft:1.5}} />
							</Box>
							<Typography sx={{ color:'#484848', fontSize:"18px", textAlign:"center"}}>
					Vehicles
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
						<Box sx={{ border: '1px solid rgba(0,47,52,.36)', padding: 6, width: '47px', height: '47px' }}>
							<Box sx={{ borderRadius: "100%", color: "black", width: '17px', height: '17px', paddingBottom:5.5}}>
								<CorporateFareIcon sx={{paddingLeft:1.5}} />
							</Box>
							<Typography sx={{ color:'#484848', fontSize:"18px",textAlign:"center"}}>
							Property
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
						<Box sx={{ border: '1px solid rgba(0,47,52,.36)', padding: 6, width: '47px', height: '47px' }}>
							<Box sx={{ borderRadius: "100%", color: "black", width: '17px', height: '17px' , paddingBottom:5.5}}>
								<TwoWheelerIcon sx={{paddingLeft:1.5}}/>
							</Box>
							<Typography sx={{ color:'#484848', fontSize:"18px", textAlign:"center"}}>
							Bikes
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
						<Box sx={{ border: '1px solid rgba(0,47,52,.36)', padding: 6, width: '47px', height: '47px' }}>
							<Box sx={{ borderRadius: "100%", color: "black", width: '17px', height: '17px', paddingBottom:5.5 }}>
								<CheckroomIcon sx={{paddingLeft:1.5}} />
							</Box>
							<Typography sx={{ color:'#484848', fontSize:"18px", textAlign:"center"}}>
					Fashion
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
						<Box sx={{ border: '1px solid rgba(0,47,52,.36)', padding: 6, width: '47px', height: '47px' }}>
							<Box sx={{ borderRadius: "100%", color: "black", width: '17px', height: '17px', paddingBottom:5.5 }}>
								<WorkIcon sx={{paddingLeft:1.5}}/>
							</Box>
							<Typography sx={{ color:'#484848', fontSize:"18px", textAlign:"center"}}>
						Jobs
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
						<Box sx={{ border: '1px solid rgba(0,47,52,.36)', padding: 6, width: '47px', height: '47px' }}>
							<Box sx={{ borderRadius: "100%", color: "black", width: '17px', height: '17px', paddingBottom:5.5 }}>
								<PhoneIphoneIcon sx={{paddingLeft:1.5}}/>
							</Box>
							<Typography sx={{ color:'#484848', fontSize:"18px", textAlign:"center"}}>
					Mobiles
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
						<Box sx={{ border: '1px solid rgba(0,47,52,.36)', padding: 6, width: '47px', height: '47px' }}>
							<Box sx={{ borderRadius: "100%", color: "black", width: '17px', height: '17px', paddingBottom:5.5 }}>
								<IronIcon sx={{paddingLeft:1.5}}/>
							</Box>
							<Typography sx={{ color:'#484848', fontSize:"18px", textAlign:"center"}}>
						Electronics
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
						<Box sx={{ border: '1px solid rgba(0,47,52,.36)', padding: 6, width: '47px', height: '47px' }}>
							<Box sx={{ borderRadius: "100%", color: "black", width: '17px', height: '17px', paddingBottom:5.5 }}>
								<ChairIcon sx={{paddingLeft:1.5}}/>
							</Box>
							<Typography sx={{ color:'#484848', fontSize:"18px", textAlign:"center"}}>
						Furniture
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
						<Box sx={{ border: '1px solid rgba(0,47,52,.36)', padding: 6, width: '47px', height: '47px' }}>
							<Box sx={{ borderRadius: "100%", color: "black", width: '17px', height: '17px' , paddingBottom:5.5}}>
								<MiscellaneousServicesIcon sx={{paddingLeft:1.5}} />
							</Box>
							<Typography sx={{ color:'#484848', fontSize:"18px", textAlign:"center"}}>
							Services
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
						<Box sx={{ border: '1px solid rgba(0,47,52,.36)', padding: 6, width: '47px', height: '47px' }}>
							<Box sx={{ borderRadius: "100%", color: "black", width: '17px', height: '17px' , paddingBottom:5.5}}>
								<MenuBookIcon sx={{paddingLeft:1.5}}/>
							</Box>
							<Typography sx={{ color:'#484848', fontSize:"18px", textAlign:"center"}}>
					Books
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
						<Box sx={{ border: '1px solid rgba(0,47,52,.36)', padding: 6, width: '47px', height: '47px' }}>
							<Box sx={{ borderRadius: "100%", color: "black", width: '17px', height: '17px' , paddingBottom:5.5}}>
								<SmartToyIcon sx={{paddingLeft:1.5}}/>
							</Box>
							<Typography sx={{ color:'#484848', fontSize:"18px", textAlign:"center"}}>
						Kids
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={1.82} sx={{ marginLeft: 1.8 }}>
						<Box sx={{ border: '1px solid rgba(0,47,52,.36)', padding: 6, width: '47px', height: '47px', boxShadow:"80%" }}>
							<Box sx={{ borderRadius: "100%", color: "black", width: '17px', height: '17px' , paddingBottom:5.5}}>
								<PetsIcon sx={{paddingLeft:1.5}}/>
							</Box>
							<Typography sx={{ color:'#484848', fontSize:"18px", textAlign:"center"}}>
							Animals
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box p={4}>
				<Typography variant='h5' p={2} sx={{ color: "#484848", letterSpacing: "0.57px", fontWeight: "90%", fontSize: "23px", fontFamily: "sans-serif" }}>
					Latest Ads
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
									<Box sx={{ display: 'flex' }}>
										<Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
											Samsung Galaxy A32
										</Typography>
									</Box>
									<FavoriteBorderOutlined />
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
									<Box sx={{ display: 'flex' }}>
										<Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
											Samsung Galaxy A32
										</Typography>
									</Box>
									<FavoriteBorderOutlined />
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
									<Box sx={{ display: 'flex' }}>
										<Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
											Samsung Galaxy A32
										</Typography>
									</Box>
									<FavoriteBorderOutlined />
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
									<Box sx={{ display: 'flex' }}>
										<Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
											Samsung Galaxy A32
										</Typography>
									</Box>
									<FavoriteBorderOutlined />
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
									<Box sx={{ display: 'flex' }}>
										<Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
											Samsung Galaxy A32
										</Typography>
									</Box>
									<FavoriteBorderOutlined />
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
									<Box sx={{ display: 'flex' }}>
										<Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
											Samsung Galaxy A32
										</Typography>
									</Box>
									<FavoriteBorderOutlined />
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
									<Box sx={{ display: 'flex' }}>
										<Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
											Samsung Galaxy A32
										</Typography>
									</Box>
									<FavoriteBorderOutlined />
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
									<Box sx={{ display: 'flex' }}>
										<Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
											Samsung Galaxy A32
										</Typography>
									</Box>
									<FavoriteBorderOutlined />
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
									<Box sx={{ display: 'flex' }}>
										<Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
											Samsung Galaxy A32
										</Typography>
									</Box>
									<FavoriteBorderOutlined />
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
									<Box sx={{ display: 'flex' }}>
										<Typography variant="body2" component="div" sx={{ color: "#484848", fontSize: "14px" }}>
											Samsung Galaxy A32
										</Typography>
									</Box>
									<FavoriteBorderOutlined />
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
