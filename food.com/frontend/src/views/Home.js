import React from "react";

import { withStyles } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import NavigationHome from '../components/NavigationHome'
import {Container, Grid, Box, Typography, TextField, Button} from '@mui/material';
import { borderRadius } from "@mui/system";

 
function Home() {
  	return (
		  
		  <div class="home">				
		 	<NavigationHome />
			<Container maxWidth="lg" style={{ display: 'flex', flexDirection:'column' , height: '75vh', justifyContent:'center', alignItems: 'center'}}>				
				<Box  style={{ display: 'flex', justifyContent:'center', alignItems: 'center'}}>
					<Typography variant="h1" sx={{color: '#FFFFFF'}}>food</Typography>
					<Typography variant="h1" className="dot">.</Typography>
					<Typography variant="h1" sx={{color: '#FFFFFF'}}>com</Typography>
				</Box>
				<Typography variant="h6" sx={{color: '#FFFFFF', fontStyle:'italic'}}>All of your favorite recipes in one place.</Typography>
					<Box component="form" sx={{mt: 3}}>
						<TextField style={{minWidth:'400px', maxWidth:'400px', borderRadius:'15px 0px 0px 15px' }} className="search_bar" placeholder="What's for starters?" variant="outlined" />
						<Button
							type="submit"
							variant="contained"
							style={{maxHeight: '4em',  minHeight: '4em', borderRadius:'0px 15px 15px 0px'}}
						>
							<SearchIcon></SearchIcon>
						</Button>
					</Box>
			</Container>
		</div>
	  );
}

export default Home;