import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({ images }) => {
	if (!images.length) {
		return <h2 className='no-recipes'>No Recipes Found!</h2>;
	}
	return (
		<div className='food-pics'>
			{images.map((image) => (
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
