import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeInformation from './components/RecipeInformation';

import './App.css';

function App() {
	//construct api url
	const searchOptions = {
		key: process.env.REACT_APP_SPOONACULAR_KEY,
		limit: 25,
		api: 'https://api.spoonacular.com/recipes/',
		endpointBySearch: 'search',
	};

	//set state
	const [images, setImages] = useState([]);
	const [searchString, setSearchString] = useState('tiramisu');
	const [lastSearch, setLastSearch] = useState('');
	const [recipeId, setRecipeId] = useState(0, '');

	useEffect(() => {
		getImages(searchString);
	}, []);

	function getImages(searchString) {
		const url = `${searchOptions.api}${searchOptions.endpointBySearch}?apiKey=${searchOptions.key}&query=${searchString}&number=${searchOptions.limit}`;

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setImages(response.results);
				setLastSearch(searchString);
				setSearchString('');
			})
			.catch(console.error);
	}

	function handleChange(event) {
		setSearchString(event.target.value);
	}
	function handleSubmit(event) {
		event.preventDefault();
		getImages(searchString);
	}

  // update state of recipeId with new value from child SearchResults
	function handleImageClick(recipeId) {
		setRecipeId(recipeId);
  }
  
	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<Route
					path='/'
					exact
					render={(routerProps) => {
						return (
							<Home
								match={routerProps.match}
								images={images}
								lastSearch={lastSearch}
								searchString={searchString}
								handleSubmit={handleSubmit}
								handleChange={handleChange}
								handleImageClick={handleImageClick}
								recipeId={recipeId}
							/>
						);
					}}
				/>
				<Route
					path='/:recipe-information'
					render={(routerProps) => {
						return (
							<RecipeInformation
								match={routerProps.match}
                recipeId={recipeId}
                searchOptions={searchOptions}
							/>
						);
					}}
				/>
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
