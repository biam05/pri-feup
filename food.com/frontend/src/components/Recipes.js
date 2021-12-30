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
					<CardHeader title="Grilled Garlic Cheese Grits" style={{ textAlign: 'center' }}></CardHeader>
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
						We love grits, this is another good way to serve them. A great alternative to a baked potato when served with grilled steak or chicken. I belive this recipe could be made with instant grits.The 2 1/2 hours for refrigeration is not include in time. The recipe comes from Tast of Home's Light and Tasty.
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