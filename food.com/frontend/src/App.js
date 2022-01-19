import React from 'react';
import { Helmet } from 'react-helmet';
import Recipes from './views/Recipes'
import SearchBar from './components/Search'
import {Container, Box, Typography} from '@mui/material';
import './app.css';

function App() {
  return (
      <>
        <Helmet>
            <title>food.com</title>
        </Helmet>
        <Container id="header" maxWidth="lg" style={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
            <Box style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                <Typography variant="h2">food</Typography>
                <Typography variant="h2" className="dot">.</Typography>
                <Typography variant="h2">com</Typography>
            </Box>
            <Typography sx={{fontStyle:'italic'}}>All of your favorite recipes in one place.</Typography>
            <SearchBar />
        </Container>
        <Container id="results">
            <Recipes/>
        </Container>
      </>
  );
}
export default App;