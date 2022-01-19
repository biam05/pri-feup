import React from "react";
import {Box, TextField, Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function search(query) {
	var url = `http://localhost:8983/solr/recipes/select?defType=edismax&fl=name%20description%20ingredients%20serving_size%20servings%20steps%20tags&indent=true&q.op=OR&q=${query}&qf=name%5E5%20search_terms%5E3%20tags%5E3%20ingredients%5E3%20description%20steps&wt=json`;
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (request.readyState !== 4 || request.status !== 200) return;
		console.log(request.response.response.docs);
	}
	request.responseType = 'json';
	request.open("GET", url, true);
	request.send();
}

function pressEnter(event) {
	if (event.key === "Enter") {
		event.preventDefault();
		search(event.target.value);
	}
}

function clickButton(event) {
	event.preventDefault();
	let searchBar = document.getElementById("searchBar")
	search(searchBar.value);
}

function SearchBar() {
    return (
		<Box component="form" sx={{mt: 3}}>
			<TextField style={{minWidth:'400px', maxWidth:'400px', borderRadius:'15px 0px 0px 15px' }} id="searchBar" className="search_bar" placeholder="What's for starters?" variant="outlined" onKeyDown={pressEnter}/>
			<Button
				type="submit"
				variant="contained"
				style={{maxHeight: '4em',  minHeight: '4em', borderRadius:'0px 15px 15px 0px'}}
				onClick={clickButton}
			>
				<SearchIcon />
			</Button>
		</Box>
	);
}

export default SearchBar;