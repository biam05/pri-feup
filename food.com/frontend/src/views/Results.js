import React from "react";
import { Helmet } from 'react-helmet';

import Navigation from '../components/Navigation'
import { Outlet } from "react-router-dom";

import {Container} from '@mui/material';

function Results() {
  return (
	  <>
	  	<Helmet>
			<title>Results for:</title>
		</Helmet>
		<Navigation />
		<Container maxWidth="lg" className="results">
			<Outlet />
		</Container>
	  </>
	
    
  );
}

export default Results;