import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { NavLink } from "react-router-dom"

function NavigationHome() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static" color="primary" elevation={0}  className="navbarHome">
			<Container maxWidth="lg">
				<Toolbar disableGutters>
					<Typography
						variant="h5"
						noWrap
						component="div"
						sx={{ mr: 2, display: {xs: 'none', md: 'flex'} }}
					>
						food.com
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleOpenNavMenu}
						color="inherit"
						>
						<MenuIcon />
						</IconButton>
						<Menu
						id="menu-appbar"
						anchorEl={anchorElNav}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
						sx={{
							display: { xs: 'block', md: 'none' },
						}}
						>	
							<MenuItem>
								<NavLink className="nav-link" to="/">
									<Typography textAlign="center">Home</Typography>
								</NavLink>
							</MenuItem>
							
							<MenuItem>
								<NavLink className="nav-link" to="/recipes">
									<Typography textAlign="center">All Recipes</Typography>
								</NavLink>
							</MenuItem>
						</Menu>
					</Box>
					<Typography
						variant="h5"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'none', md: 'none' } }}
					>
						food.com
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<NavLink className="nav-link" to="/">
							<Button
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								Home
							</Button>
						</NavLink>
						<NavLink className="nav-link" to="/recipes">
							<Button
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								All Recipes
							</Button>
						</NavLink>
					</Box>

				</Toolbar>
			</Container>
		</AppBar>
	  );
}

export default NavigationHome;