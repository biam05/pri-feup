import {TextField} from '@mui/material';

function search(query) {
	alert(query)
	var request = `http://backend:3001/solr/recipes/select?defType=edismax&fl=name%20description%20ingredients%20serving_size%20servings%20steps%20tags&\
	indent=true&q.op=OR&q=${query}&qf=name%5E5%20search_terms%5E3%20tags%5E3%20ingredients%5E3%20description%20steps&wt=json`;
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		console.log(xmlHttp);
		if (xmlHttp.readyState !== 4 || xmlHttp.status !== 200) {
			alert(xmlHttp.status)
			console.log("ERROR");
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
        var query = document.getElementById("searchBarInput").innerHTML;
        search(query);
    }
};

function SearchBar() {
    return (<TextField style={{minWidth:'400px', maxWidth:'400px'}} id="searchBarInput" className="search_bar" placeholder="Search..." variant="outlined" onKeyDown={pressEnter}/>);
}

export default SearchBar;