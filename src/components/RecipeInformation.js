import React from 'react';


	/*
like a componentDidMount(){}...

  	// useEffect(() => {
	//   getRecipeInformation(recipeId)
	// }, [])


   grab info...

   cuisine
   prep duration
   description
   ingredients
   instructions 

  */


function RecipeInformation(props) {
    
    const url = `${props.searchOptions.api}${props.recipeId}/information?apiKey=${props.searchOptions.key}`;

	fetch(url)
		.then((response) => response.json())
		.then((response) => {
    		// getRecipeInformation(response);
            console.log('response.title:', response.title, '\nresponse.summary\n', response.summary)
		})
		.catch(console.error);

	return (
		<>
			<h1>Recipe Information</h1>
			<h2></h2>
		</>
	);
}

export default RecipeInformation;
