import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation'
import Recipes from './components/Recipes'
import Recipe from './components/Recipe'
import Footer from './components/Footer'
import Home from './views/Home'
import Blog from './views/Results'
ReactDOM.render(
	<Router>
		<Navigation />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/recipes" element={<Blog />}>
				<Route path="" element={<Recipes />} />
				<Route path=":recipeSlug" element={<Recipe />} />
			</Route>
		</Routes>
		<Footer />
	</Router>,

	document.getElementById("root")
);
