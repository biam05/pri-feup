import React from "react";

import { Link } from "react-router-dom";
import {Container, Grid, Typography, Button} from '@mui/material';
import {Card, CardContent, CardHeader, CardActions} from '@mui/material';


function Recipes() {
  return (
	<>
		<Typography color="inherit" variant="h4">All Recipes</Typography>
		<Grid container spacing={3} alignItems="stretch" className="grid">
			<Grid item xs={12} sm={3}>
				<Card>
					<CardHeader title="Crepes" style={{ textAlign: 'center' }}></CardHeader>
					<CardContent>
						<Typography 
							sx={{
								display: '-webkit-box',
								overflow: 'hidden',
								WebkitBoxOrient: 'vertical',
								WebkitLineClamp: 4,
							}}
							variant ="body1" 
							gutterBottom> 
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis erat neque, sit amet tempus ipsum posuere et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id enim auctor, consectetur nunc a, scelerisque eros. Donec ut velit in magna faucibus interdum. Aliquam eget fringilla nunc. 
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<Link to="/recipes/recipe">
							<Button>
								View Full Recipe
							</Button>
						</Link>						
					</CardActions>
				</Card>
			</Grid>
		</Grid>
	</>
	
  );
}

export default Recipes;