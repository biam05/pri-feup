import {TextField} from '@mui/material';

function search(query) {
	var request = `http://localhost:3001/solr/recipes/select?defType=edismax&fl=name%20description%20ingredients%20serving_size%20servings%20steps%20tags&indent=true&q.op=OR&q=${query}&qf=name%5E5%20search_terms%5E3%20tags%5E3%20ingredients%5E3%20description%20steps&wt=json`;
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState !== 1 || xmlHttp.status !== 0) {
			alert("Error querying the recipe list");
			return;
		}
		alert(xmlHttp.response);
	}
	xmlHttp.responseType = 'json';
	xmlHttp.open("GET", request, true);
	xmlHttp.send();
};

const pressEnter = (event) => {
    if (event.key === "Enter") {
        search(event.target.value);
    }
};

function SearchBar() {
    return (<TextField style={{minWidth:'400px', maxWidth:'400px'}} id="searchBarInput" className="search_bar" placeholder="Search..." variant="outlined" onKeyDown={pressEnter}/>);
}

export default SearchBar;