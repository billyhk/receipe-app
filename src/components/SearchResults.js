import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({ images }) => {
	if (!images.length) {
		return <h2 className='no-recipes'>No Recipes Found!</h2>;
	}
	return (
		<div className='food-pics'>
			{images.map((image, i) => (
				<Link to={'/recipe-information/' + image.id} key={image.id}>
					<div key={image.id} className='image'>
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
