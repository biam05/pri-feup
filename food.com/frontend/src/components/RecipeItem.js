import React from "react";
import Recipe from '../views/Recipe'

import {Grid, Typography, Link, Box, Modal} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

function RecipeItem(recipe) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
    let r = recipe.recipe
    return (
        <>
           <Grid item md={12}>
				<Grid container>
					<Grid item md={10}>
						<Box sx={{pb:2, borderBottom: 1, borderColor: 'grey.500'}}>						
							<Link onClick={handleOpen}>
								<Typography variant="h6">{r.name}</Typography>
							</Link>	
							<Typography 
								sx={{
									display: '-webkit-box',
									overflow: 'hidden',
									WebkitBoxOrient: 'vertical',
									WebkitLineClamp: 3,
								}}>
									{r.description}
							</Typography>
						</Box>
					</Grid>	
					<Grid item md={2}>
						<PersonIcon/><Typography>{r.servings}</Typography>
					</Grid>
				</Grid>
				
			</Grid>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="recipe"
				aria-describedby="recipe"
				>
				<Recipe recipe={r}/>
			</Modal>
        </>
        
    );
}

export default RecipeItem;