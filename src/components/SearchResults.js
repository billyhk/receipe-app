import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react'

const SearchResults = ( {handleClick, images} ) => {
	
const [recipeId, setRecipeId] = useState(0, '');


	if (!images.length) {
		return <h2>No Recipes Found!</h2>;
	}
	return (
		<div className='gallery'>
			{images.map((image, i) => (
                <Link to={"/recipe-information/" + image.title}>
				<div key={image.id} className='image' onClick={() => {
                    const newRecipeId = image.id;
                    setRecipeId(newRecipeId);
                    handleClick(newRecipeId);
                }}>
					<img alt={image.title} src={`https://spoonacular.com/recipeImages/${image.id}-312x231`} />
					<p>{image.title}</p>
				</div>
                </Link>
			))}
		</div>
	);
	
};

export default SearchResults;
