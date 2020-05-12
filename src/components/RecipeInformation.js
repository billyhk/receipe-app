import React, { useState, useEffect } from 'react';

function RecipeInformation(props) {
	const [thisRecipe, setThisRecipe] = useState('');

	function getThisRecipe() {
		const url = `${props.searchOptions.api}${props.match.params.recipeId}/information?apiKey=${props.searchOptions.key}`;
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
		return (
			<p>
				<span className='loading'>loading...</span>
			</p>
		);
	}
	return (
		<div className='jumbo-like'>
			<img
				alt={thisRecipe.title}
				src={thisRecipe.image}
				className='card'
				id='information-image'
			/>

			<h2 className='recipe-title'>{thisRecipe.title}</h2>

			<h5 className='duration'>Ready in {thisRecipe.readyInMinutes} minutes</h5>

			<div className='ingredients'>
				<h3>Ingredients</h3>
				<ul>
					{thisRecipe.extendedIngredients.map((item, i) => (
						<li key={i}>{item.original}</li>
					))}
				</ul>
			</div>

			{thisRecipe.analyzedInstructions.length === 0 ? (
				<p className='no-instructions'>
					Sorry, this recipe does not include instructions.
				</p>
			) : (
				<div className='instructions'>
					<h3>Instructions</h3>
					<ol>
						{thisRecipe.analyzedInstructions.map((itemA) =>
							itemA.steps.map((itemB, i) => <li key={i}>{itemB.step}</li>)
						)}{' '}
					</ol>
				</div>
			)}
		</div>
	);
}

export default RecipeInformation;
