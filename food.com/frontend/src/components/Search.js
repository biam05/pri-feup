import {TextField} from '@mui/material';

function search(query) {
	var request = `http://backend:3001/solr/recipes/select?defType=edismax&fl=name%20description%20ingredients%20serving_size%20servings%20steps%20tags&\
	indent=true&q.op=OR&q=${query}&qf=name%5E5%20search_terms%5E3%20tags%5E3%20ingredients%5E3%20description%20steps&wt=json`
	var xmlHttp = new XMLHttpRequest()
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState != 4 || xmlHttp.status != 200) return

		console.log(request)
		console.log(xmlHttp.response)

		updatePagination(xmlHttp.response)
		updateFacetingResults(xmlHttp.response)
		updateBoardData(xmlHttp.response, page)
	}
	xmlHttp.responseType = 'json'
	xmlHttp.open("GET", request, true)
	xmlHttp.send(null)
};

const pressEnter = (event) => {
    if (event.key === 'Enter') {
        var query = document.getElementById("searchbarinput").innerHTML;
        search(query);
    }
};

function SearchBar() {
    return (<TextField style={{minWidth:'400px', maxWidth:'400px'}} id="searchBarInput" className="search_bar" placeholder="Search..." variant="outlined" onKeyUp={pressEnter}/>);
}

export default SearchBar;