import React from "react";

import cooking from "../images/cooking_s.jpg";
import SearchBar from "../components/Search.js"

import SearchIcon from '@mui/icons-material/Search';
import {Container, Grid, Box, Typography, Button} from '@mui/material';

function Home() {
  	return (
		<>
			<Container xl>
				<Grid container sx={{mt: 3}}>
					<Grid item md={4} style={{ display: "flex", alignItems: "center" }}>
						<Box>
							<Typography variant="h2">food.com</Typography>
							<Typography id="test2" variant="h6">Todas as suas receitas favoritas num só lugar.</Typography>
						</Box>
						
						
					</Grid>
					<Grid item md={8} container direction="row" alignItems="center" justify="flex-end">
						<Box
							display={{ xs: "none", md: "flex" }}
							sx={{ flexDirection: 'row-reverse' }}
						>
							<img className="cooking_ppl" src={cooking}/>
						</Box>
					</Grid>
				</Grid>
				
				<Grid container direction="column" align="center" justify="center"  sx={{mt: 3}}>
					<Grid item xl={12}>
						<Typography id="test" variant="h4">Por onde vamos começar?</Typography>
						<Box component="form" sx={{mt: 3}}>
							<SearchBar />
							<Button
								type="submit"
								variant="contained"
								style={{maxHeight: '4em',  minHeight: '4em'}}
							>
								<SearchIcon></SearchIcon>
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Container>
			
		</>
	  );
}

export default Home;