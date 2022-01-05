import React from "react";

// import { Link } from "react-router-dom";
import {Grid, Typography, Link, Box, Chip} from '@mui/material';

const title = "Grilled Garlic Cheese Grits"

const description = "A great alternative to a baked potato when served with grilled steak or chicken. I belive this recipe could be made with instant grits.The 2 1/2 hours for refrigeration is not include in time. The recipe comes from Tast of Home's Light and Tasty."

const search_terms = ['diabetic', 'low-calorie', 'vegetarian', 'low-carb', 'side']


function Recipes() {
  return (
	<>
		<Typography color="inherit" variant="h4">Results for: garlic</Typography>
		<Grid container spacing={1} sx={{mt:2}}>
			<Grid item xs={12}>
				<Box sx={{pb:2, borderBottom: 1, borderColor: 'grey.500'}}>
					<Link href="/recipes/recipe">
						<Typography variant="h6">{title}</Typography>
					</Link>	
					<Typography 
						sx={{
							display: '-webkit-box',
							overflow: 'hidden',
							WebkitBoxOrient: 'vertical',
							WebkitLineClamp: 3,
						}}>
							{description}
					</Typography>
					<div className="search_terms">
						{search_terms.map((search_term) => (
							<Chip className="search_term" label={search_term} />))}
					</div>
				</Box>
			</Grid>
			<Grid item xs={12}>
				<Box sx={{pb:2, borderBottom: 1, borderColor: 'grey.500'}}>
					<Link href="/recipes/recipe">
						<Typography variant="h6">{title}</Typography>
					</Link>	
					<Typography 
						sx={{
							display: '-webkit-box',
							overflow: 'hidden',
							WebkitBoxOrient: 'vertical',
							WebkitLineClamp: 3,
						}}>
							{description}
					</Typography>
					<div className="search_terms">
						{search_terms.map((search_term) => (
							<Chip className="search_term" label={search_term} />))}
					</div>
				</Box>
			</Grid>
		</Grid>
	</>
	
  );
}

export default Recipes;