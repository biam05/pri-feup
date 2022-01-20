import React from 'react';
import { Helmet } from 'react-helmet';
import Recipes from './views/Recipes'
import {Container, Box, Typography, Pagination} from '@mui/material';
import { TextField, Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './app.css';

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            items: [],
            query: "",
            page: 0,
            count: 0
        }
    }

    search(query, page = 1) {
        query = query.replaceAll("~", "");
        query = query.replaceAll(" ", "~ ");
        query = query.replaceAll("&", "~&");
        var url = `http://localhost:8983/solr/recipes/select?defType=edismax&fl=name%20description%20ingredients%20serving_size%20servings%20steps%20tags&indent=true&q.op=OR&q=${query}~&qf=name%5E5%20search_terms%5E3%20tags%5E3%20ingredients%5E3%20description%20steps&start=${10*(page - 1)}&wt=json`;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState !== 4 || request.status !== 200) return;
            this.setState({items: request.response.response.docs, query: query, page: page, count: request.response.response.numFound})
        }.bind(this)
        request.responseType = 'json';
        request.open("GET", url, true);
        request.send();
    }

    pressEnter(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            this.search(event.target.value);
        }
    }
    
    clickButton(event) {
        event.preventDefault();
        let searchBar = document.getElementById("searchBar");
        this.search(searchBar.value);
    }
    
    changePagination(event, page) {
        event.preventDefault();
        this.search(this.state.query, page);
    }

    render () {
        return (<>
            <Helmet>
                <title>food.com</title>
            </Helmet>
            <div id="header-background" style={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
                <Container id="header" maxWidth="lg" style={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
                    <Box style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                        <Typography variant="h2"sx={{color: '#FFFFFF'}}>food</Typography>
                        <Typography variant="h2" className="dot">.</Typography>
                        <Typography variant="h2"sx={{color: '#FFFFFF'}}>com</Typography>
                    </Box>
                    <Typography sx={{fontStyle:'italic', color: '#FFFFFF'}}>All of your favorite recipes in one place.</Typography>
                    <Box component="form" sx={{mt: 3}}>
                        <TextField style={{minWidth:'700px', maxWidth:'700px', borderRadius:'15px 0px 0px 15px' }} id="searchBar" className="search_bar" placeholder="What's for starters?" variant="outlined" onKeyDown={this.pressEnter.bind(this)}/>
                        <Button
                            type="submit"
                            variant="contained"
                            style={{maxHeight: '4em',  minHeight: '4em', borderRadius:'0px 15px 15px 0px'}}
                            onClick={this.clickButton.bind(this)}
                        >
                            <SearchIcon />
                        </Button>
                    </Box>
                </Container>
            </div>            
            <Container id="results">
                <Recipes documents={this.state.items}/>
            </Container>
            <Container id="pagination" maxWidth="lg" style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                <Pagination count={Math.ceil(this.state.count / 10)} color="primary" onChange={this.changePagination.bind(this)} hidden={this.state.page === 0}/>
            </Container>
        </>)
    }
}
export default App;