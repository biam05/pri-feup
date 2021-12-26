import * as React from 'react';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import * as Colors from '@mui/material/colors';

import { NavLink } from "react-router-dom"

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
	  backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
	  marginLeft: theme.spacing(1),
	  width: 'auto',
	},
	}));
	
const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
	padding: theme.spacing(1, 1, 1, 0),
	// vertical padding + font size from searchIcon
	paddingLeft: `calc(1em + ${theme.spacing(4)})`,
	transition: theme.transitions.create('width'),
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		width: '12ch',
		'&:focus': {
		width: '20ch',
		},
	},
	},
}));


function Navigation() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
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

					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
						placeholder="Search…"
						inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>

				</Toolbar>
			</Container>
		</AppBar>
	  );
}

export default Navigation;