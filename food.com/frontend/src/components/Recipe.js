import React, { useEffect } from "react";
import { useParams } from "react-router";

import { Link } from '@mui/material';
import { Container, Breadcrumbs, Typography } from '@mui/material';

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
				<Typography color="text.primary">Crepes</Typography>
			</Breadcrumbs>
			<div className="singleRecipe">
				<Typography color="inherit" variant="h4">Crepes</Typography>
			</div>
		</>
	);
}

export default Recipe;