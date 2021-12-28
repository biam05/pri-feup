import React from "react";

import {Container, Toolbar, Typography} from '@mui/material';

function Footer() {
  return (
	<footer className="footer">
		<Container maxWidth="xl">
			<Toolbar>
				<Typography color="inherit">
					Made with ♥ by G75
				</Typography>
			</Toolbar>
		</Container>
	</footer>
  );
}

export default Footer;