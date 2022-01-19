import React from "react";

import { Box, Grid, Typography, Chip } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  overflow:'scroll',
  maxHeight:'80%',
  display:'block',
  p: 4,
};


function parseSteps(steps){
	let r
	r = steps.replaceAll("[", '')
	r = r.replaceAll("]", '')
	r = r.replaceAll("\"", '')
	r = r.split('\',')
	let rcopy = []
	r.map(step => {
		rcopy.push(step.replaceAll('\'', ''))
	})
	return rcopy
}

function parseIngredients(ingredients){
	let r
	r = ingredients.replaceAll("[", '')
	r = r.replaceAll("]", '')
	r = r.split('\",')
	let rcopy = []
	r.map(step => {
		rcopy.push(step.replaceAll('\"', ''))
	})
	return rcopy
}

function parseTags(tags){
	let r
	r = tags.replaceAll("[", '')
	r = r.replaceAll("]", '')
	r = r.replaceAll("'", '')
	r = r.split(',')
	return r
}

function Recipe(recipe) {
	let r = recipe.recipe
	let steps = parseSteps(r.steps)
	let ingredients = parseIngredients(r.ingredients)
	let tags = parseTags(r.tags)

	return (
			<Box className="singleRecipe" sx={style}>
				<Typography color="inherit" variant="h4">{r.name}</Typography>
				<Box mt={2}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={8} className="box">
							<Grid container spacing = {2}>								
								<Grid item>
									<Typography variant="h5" gutterBottom>Description</Typography>
									<Typography>{r.description}</Typography>
								</Grid>
								<Grid item>
									<Typography variant="h5" gutterBottom>Ingredients</Typography>	
									<ul>
										{ingredients.map((ingredient) => (<li><Typography>{ingredient}</Typography></li>))}
									</ul>			
									
								</Grid>
								<Grid item>
									<Typography variant="h5" gutterBottom>Steps</Typography>
									 <ol>
										{steps.map((step) => (<li><Typography>{step}</Typography></li>))}
									</ol>
								</Grid>
							</Grid>
							
						</Grid>
						<Grid item xs={12} md={4} className="box">
							<Grid container spacing={2}>
								<Grid item md={12}>
									<Grid container spacing={1}>
										<Grid item xs={12} md={6} >
											<Typography variant="h6" gutterBottom>Servings</Typography>
											<Typography >{r.servings} servings</Typography>
										</Grid>
										<Grid item xs={12} md={6}>
											<Typography variant="h6" gutterBottom>Serving Size</Typography>
											<Typography >{r.serving_size} g</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid item>
									<Typography variant="h5" gutterBottom>Tags</Typography>
									<div className="tags">
										{tags.map((tag) => (<Chip className="tag" label={tag} />))}
									</div>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</Box>
	);
}

export default Recipe;