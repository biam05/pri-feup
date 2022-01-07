
import React from "react";
import { Outlet } from "react-router-dom";

import {Container, Typography} from '@mui/material';

function Results() {
  return (
	<Container maxWidth="lg" className="results">
		<Outlet />
	</Container>
    
  );
}

export default Results;