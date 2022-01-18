import {TextField} from '@mui/material';

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
};

const pressEnter = (event) => {
    if (event.key === "Enter") {
		event.preventDefault();
        search(event.target.value);
    }
};

function SearchBar() {
    return (<TextField style={{minWidth:'400px', maxWidth:'400px', borderRadius:'15px 0px 0px 15px' }} className="search_bar" placeholder="What's for starters?" variant="outlined" onKeyDown={pressEnter}/>);
}

export default SearchBar;