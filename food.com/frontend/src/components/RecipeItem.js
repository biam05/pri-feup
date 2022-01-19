import React from "react";

import {Grid, Typography, Link, Box, Chip} from '@mui/material';

function RecipeItem(recipe) {
    return (
        <>
            <Grid item xs={12}>
                <Box sx={{pb:2, borderBottom: 1, borderColor: 'grey.500'}}>
                    <Link href={`/recipes/${recipe.description}`}>
                        <Typography variant="h6">{recipe.name}</Typography>
                    </Link>
                    <Typography 
                        sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3,
                        }}>
                            {recipe.description}
                    </Typography>
                    <div className="search_terms">
                        {recipe.search_terms.map((search_term) => (
                            <Chip className="search_term" label={search_term} />))}
                    </div>
                </Box>
            </Grid>
        </>
        
    );
}

export default RecipeItem;