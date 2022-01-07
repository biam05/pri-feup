import React, { useEffect } from "react";
import { useParams } from "react-router";

import { Link } from '@mui/material';
import { Box, Chip, Grid, Breadcrumbs, Typography } from '@mui/material';

const title = "Grilled Garlic Cheese Grits"

const description = "A great alternative to a baked potato when served with grilled steak or chicken. I belive this recipe could be made with instant grits.The 2 1/2 hours for refrigeration is not include in time. The recipe comes from Tast of Home's Light and Tasty."
const steps = ['I a sauce pan, bring water to a boil; slowly add grits and salt, stirring constantly; Reduce heat:simmer, uncovered, for 40-45 minutes or untill thickened, stirrin occasionally.', 'Add cheese and garlic; stir until cheese is melted, Spray 9-inch baking dish with nonstick cooking spray; Cover and refrigerate for 2 to 2 1/2 hours or until frim.', 'Before starting the grill, coat the grill rack with nonstick cooking spray; Cut the grits into 3-inch squares; Brush both sides with olive oil.', 'Grill, covered, over medium heat for 4 to 6 minutes on each side or until lightly browned.']

const ingredients = ["4 cups water","1 cup uncooked old fashion grits","1 teaspoon salt","4 ounces shredded cheddar cheese","1-2 clove garlic, minced ","1 tablespoon olive oil"]
const tags = ['time-to-make', 'course', 'main-ingredient', 'preparation', 'occasion', 'side-dishes', 'eggs-dairy', 'refrigerator', 'diabetic', 'vegetarian', 'grains', 'cheese', 'stove-top', 'dietary', 'low-cholesterol', 'low-calorie', 'comfort-food', 'low-carb', 'low-in-something', 'pasta-rice-and-grains', 'brunch', 'taste-mood', 'equipment', 'presentation', 'served-hot', '4-hours-or-less']
const search_terms = ['diabetic', 'low-calorie', 'vegetarian', 'low-carb', 'side']

const serving_size = 155
const servings = 8

function Recipe() {
	let { recipeSlug } = useParams();

	useEffect(() => {
	// Fetch post using the recipeSlug
	}, [recipeSlug]);

	return (
		<>
			<Breadcrumbs aria-label="breadcrumb">
				<Link underline="hover" color="inherit" href="/recipes">
					All Recipes
				</Link>
				<Typography color="#1f8af5">{title}</Typography>
			</Breadcrumbs>
			<div className="singleRecipe">
				<Typography color="inherit" variant="h4">{title}</Typography>
				<Box mt={2}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={8} className="box">
							<Grid container spacing = {2}>								
								<Grid item>
									<Typography variant="h5" gutterBottom>Description</Typography>
									<Typography>{description}</Typography>
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
											<Typography >{servings} servings</Typography>
										</Grid>
										<Grid item xs={12} md={6}>
											<Typography variant="h6" gutterBottom>Serving Size</Typography>
											<Typography >{serving_size} g</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid item>
									<Typography variant="h5" gutterBottom>Tags</Typography>
									<div className="tags">
										{tags.map((tag) => (<Chip className="tag" label={tag} />))}
									</div>
								</Grid>
								<Grid item>
									<Typography variant="h5" gutterBottom>Search Terms</Typography>
									<div className="search_terms">
										{search_terms.map((search_term) => (
											<Chip className="search_term" label={search_term} />))}
									</div>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</div>
		</>
	);
}

export default Recipe;