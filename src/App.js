import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeInformation from './components/RecipeInformation';

import 'bootswatch/dist/sandstone/bootstrap.min.css';
import './App.css';

function App() {
	const searchOptions = {
		key: process.env.REACT_APP_SPOONACULAR_KEY,
		limit: 50,
		api: 'https://api.spoonacular.com/recipes/',
		endpointBySearch: 'complexSearch',
	};

	const [images, setImages] = useState([]);
	const [searchString, setSearchString] = useState('peanut butter');
	const [lastSearch, setLastSearch] = useState('');
	let [offset, setOffset] = useState(0);

	useEffect(() => {
		getImages(searchString);
		// eslint-disable-next-line
	}, []);

	function getImages(searchString) {
		const url = `${searchOptions.api}${searchOptions.endpointBySearch}?apiKey=${searchOptions.key}&query=${searchString}&number=${searchOptions.limit}&offset=${offset}`;

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setImages(response.results);
				setLastSearch(searchString);
				setSearchString('');
			})
			.catch(console.error);
	}

	function loadNext() {
		let limit = searchOptions.limit;
		let newOffset = (offset += limit);
		setOffset(newOffset);
		getImages(lastSearch);
	}
	function loadPrevious() {
		let limit = searchOptions.limit;
		if (offset > 0) {
			let newOffset = (offset -= limit);
			setOffset(newOffset);
		}
		getImages(lastSearch);
	}

	function handleChange(event) {
		setSearchString(event.target.value);
	}
	function handleSubmit(event) {
		event.preventDefault();
		getImages(searchString);
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
								images={images}
								lastSearch={lastSearch}
								searchString={searchString}
								offset={offset}
								limit={searchOptions.limit}
								handleSubmit={handleSubmit}
								handleChange={handleChange}
								loadNext={loadNext}
								loadPrevious={loadPrevious}
							/>
						);
					}}
				/>
				<Route
					path='/recipe-information/:recipeId'
					render={(routerProps) => {
						return (
							<RecipeInformation
								searchOptions={searchOptions}
								{...routerProps}
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
