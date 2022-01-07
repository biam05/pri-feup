
import React from "react";

import Navigation from '../components/Navigation'
import { Outlet } from "react-router-dom";

import {Container, Typography} from '@mui/material';

function Results() {
  return (
	  <>
		<Navigation />
		<Container maxWidth="lg" className="results">
			<Outlet />
		</Container>
	  </>
	
    
  );
}

export default Results;