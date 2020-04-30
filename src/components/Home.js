import React from 'react';
import SearchForm from './SearchForm';
import SearchHeader from './SearchHeader';
import SearchResults from './SearchResults';

function Home(props) {
	return (
		<>
			<SearchHeader lastSearch={props.lastSearch} />
			<SearchForm
				searchString={props.searchString}
				handleSubmit={props.handleSubmit}
				handleChange={props.handleChange}
			/>
			<section>
				<SearchResults
					images={props.images}
				/>
			</section>
		</>
	);
}

export default Home;
