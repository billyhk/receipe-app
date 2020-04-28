import React, { useState, useEffect } from 'react';

/*
like a componentDidMount(){}...

  	// useEffect(() => {
	//   getRecipeInformation(recipeId)
	// }, [])


   grab info...

   cuisine
   prep duration
   summary
   ingredients
   instructions 

  */

function RecipeInformation(props) {
	const [thisRecipe, setThisRecipe] = useState('');

	function getThisRecipe() {
		const url = `${props.searchOptions.api}${props.recipeId}/information?apiKey=${props.searchOptions.key}`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setThisRecipe(response);
				console.log(response);
			})
			.catch(console.error);
	}

	useEffect(() => {
		getThisRecipe();
		// eslint-disable-next-line;
	}, []);

	if (!thisRecipe) {
		return 'loading...';
	}
	return (
		<>
			<img src={thisRecipe.image} />
			<h2>{thisRecipe.title}</h2>

			{Array.of(thisRecipe.cuisines).map((item, i) => (
				<p>{item}</p>
			))}

			<p>
				<strong>Prep Duration:</strong> {thisRecipe.readyInMinutes} minutes
			</p>
            
			<h4>Ingedients</h4>

			{/* {Array.of(thisRecipe.extendedIngredients).map((item, i) => (
                <p>{item}</p>
                ))} */}

			<h4>Instructions</h4>
			<div dangerouslySetInnerHTML={{ __html: thisRecipe.instructions }} />
		</>
	);
}

/* <h4>Recipe Summary</h4> */

/* <div dangerouslySetInnerHTML={{ __html: thisRecipe.summary }} /> */
export default RecipeInformation;
