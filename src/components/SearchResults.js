import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react'

const SearchResults = ( {handleClick, images} ) => {
	
// const [recipeId, setRecipeId] = useState(0, '');

console.log(images)
	// if (!images.image) {
	// 	return 'loading...';
	// }

	if (!images.length) {
		return <h2 className='no-recipes'>No Recipes Found!</h2>;
	}
	return (
		<div className='food-pics'>
			{images.map((image, i) => (
				<Link to={'/recipe-information/' + image.title} key={image.id}>
					<div
						key={image.id}
						className='image'
						onClick={() => handleClick(image.id)}>
						<img
							alt={image.title}
							src={`https://spoonacular.com/recipeImages/${image.id}-312x231`}
						/>
						<p>{image.title}</p>
					</div>
				</Link>
			))}
		</div>
	);
	
};

export default SearchResults;

/*

https://spoonacular.com/recipeImages/15407-556x370.jpg

{thisRecipe.analyzedInstructions.length == 0 ? (
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
*/