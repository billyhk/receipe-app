import React from 'react';
import SearchForm from './SearchForm';
import SearchHeader from './SearchHeader';
import SearchResults from './SearchResults'

function Home (props) {
	console.log(props)
	// console.log('home props.recipeId', props.recipeId)
	return (
		<>
			<SearchHeader lastSearch={props.lastSearch} />
			<SearchForm 
			searchString={props.searchString}
            handleSubmit={props.handleSubmit}
            handleChange={props.handleChange} />
			<section className='foodPics'>
			<SearchResults 
			images={props.images} 
			handleClick={props.handleImageClick}
			recipeId={props.recipeId}
			/>
			</section>
		</>
	);
};

export default Home;
