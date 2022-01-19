import React from "react";
import { Helmet } from 'react-helmet';

import NavigationHome from '../components/NavigationHome'
import SearchBar from '../components/Search'
import {Container, Box, Typography} from '@mui/material';
 
function Home() {
	return (
		<>
			<Helmet>
			<title>food.com</title>
			</Helmet>
			<div className="home">				
			<NavigationHome />
			<Container maxWidth="lg" style={{ display: 'flex', flexDirection:'column' , height: '75vh', justifyContent:'center', alignItems: 'center'}}>				
				<Box style={{ display: 'flex', justifyContent:'center', alignItems: 'center'}}>
					<Typography variant="h1" sx={{color: '#FFFFFF'}}>food</Typography>
					<Typography variant="h1" className="dot">.</Typography>
					<Typography variant="h1" sx={{color: '#FFFFFF'}}>com</Typography>
				</Box>
				<Typography variant="h6" sx={{color: '#FFFFFF', fontStyle:'italic'}}>All of your favorite recipes in one place.</Typography>
				<SearchBar />
			</Container>
			</div>
		</>
	);
}

export default Home;