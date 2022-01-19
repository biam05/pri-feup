
import React from "react";
import RecipeItem from '../components/RecipeItem'
import {Grid} from '@mui/material';


function Recipes(recipes = []) {
	console.log(recipes.documents)
  	return (
	  <>
		<Grid container spacing={1} sx={{mt:2}}>
			{
				Array.from(recipes.documents).map((recipe) => 
				<>
					<RecipeItem recipe={recipe}/></>					
				)
			}
			
		</Grid>
	</>);
}

export default Recipes;