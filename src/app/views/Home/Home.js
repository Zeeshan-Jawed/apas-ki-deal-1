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
import SimpleCard from '../../components/Card/SImpleCard';
import Categories from '../../components/Categories/Categories';
import { Link } from 'react-router-dom';
function Home() {

	let cardData = [
		{ image: Images.pic5, name: "Samsung Galaxy A32", price: '123', address: 'ALI TOWN, LAHORE', date: "26 MARCH" },
		{ image: Images.pic6, name: "Samsung Galaxy A32", price: '123', address: 'ALI TOWN, LAHORE', date: "26 MARCH" },
		{ image: Images.pic7, name: "Samsung Galaxy A32", price: '123', address: 'ALI TOWN, LAHORE', date: "26 MARCH" },
		{ image: Images.pic8, name: "Samsung Galaxy A32", price: '123', address: 'ALI TOWN, LAHORE', date: "26 MARCH" },
		{ image: Images.pic9, name: "Samsung Galaxy A32", price: '123', address: 'ALI TOWN, LAHORE', date: "26 MARCH" },
		{ image: Images.pic10, name: "Samsung Galaxy A32", price: '123', address: 'ALI TOWN, LAHORE', date: "26 MARCH" },
		{ image: Images.pic11, name: "Samsung Galaxy A32", price: '123', address: 'ALI TOWN, LAHORE', date: "26 MARCH" },
		{ image: Images.pic12, name: "Samsung Galaxy A32", price: '123', address: 'ALI TOWN, LAHORE', date: "26 MARCH" },
		{ image: Images.pic13, name: "Samsung Galaxy A32", price: '123', address: 'ALI TOWN, LAHORE', date: "26 MARCH" },
		{ image: Images.pic14, name: "Samsung Galaxy A32", price: '123', address: 'ALI TOWN, LAHORE', date: "26 MARCH" },

	]
	let popularCategories=[
		{ image: Images.pic19, name: 'Vehicles'},
		{ image: Images.pic20, name: 'Property'},
		{ image: Images.pic21, name: 'Bikes'},
		{ image: Images.pic22, name: 'Fashion'},
		{ image: Images.pic24, name: 'Jobs'},
		{ image: Images.pic25, name: 'Mobiles'},
		{ image: Images.pic26, name: 'Electronics'},
		{ image: Images.pic27, name: 'Furniture'},
		{ image: Images.pic28, name: 'Services'},
		{ image: Images.pic29, name: 'Books, Sports'},
		{ image: Images.pic30, name: 'Kids'},
		{ image: Images.pic31, name: 'Animals'},
	]

	return (
		<Layout>

			<Divider />
			<Box p={2} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
				<Link to='/'>
				<Typography sx={{
					color: "#484848",
					fontSize: "17px",
					
				}} >
					Mobile
				</Typography>
				</Link>
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
				<Typography variant='h5' px={1} sx={{ color: "#484848", fontSize: "23px", letterSpacing: "0.57px", paddingY: 4 }}>
					<strong>Popular Categories</strong>
				</Typography>
				<Categories data={popularCategories}/>
			</Box>
		

			<Box p={1}>
				<Typography variant='h5' p={0.5} sx={{ color: "#484848", letterSpacing: "0.57px", fontWeight: "90%", fontSize: "23px", fontFamily: "sans-serif", paddingY: 4 }}>
					<strong>Latest Ads</strong>
				</Typography>
				<SimpleCard data={cardData} />
			</Box>

		



		</Layout >


	)
}
export default Home
