import React, { useState, useEffect } from 'react';

function RecipeInformation(props) {
	const [thisRecipe, setThisRecipe] = useState('');

	function getThisRecipe() {
		const url = `${props.searchOptions.api}${props.recipeId}/information?apiKey=${props.searchOptions.key}`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setThisRecipe(response);
			})
			.catch(console.error);
	}

	useEffect(() => {
		getThisRecipe();
		// eslint-disable-next-line
	}, []);

	if (
		!thisRecipe.extendedIngredients ||
		!thisRecipe.cuisines ||
		!thisRecipe.analyzedInstructions
	) {
		return 'loading...';
	}
	return (
		<>
			<img alt={thisRecipe.title} src={thisRecipe.image} />

			<h2 className='recipe-title'>{thisRecipe.title}</h2>

			<ul className='cuisines'>
				{thisRecipe.cuisines.map((item, i) => (
					<li key={i}>{`\u00b7${item}\u00b7`}</li>
				))}
			</ul>

			<p>Ready in {thisRecipe.readyInMinutes} minutes</p>

			<h3>Ingredients</h3>
			<ul>
				{thisRecipe.extendedIngredients.map((item, i) => (
					<li key={i}>{item.original}</li>
				))}
			</ul>

			<h3>Instructions</h3>
			<ol>
				{thisRecipe.analyzedInstructions[0].steps.map((item, i) => (
					<li key={i}>{item.step}</li>
				))}
			</ol>
		</>
	);
}

export default RecipeInformation;
