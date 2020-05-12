import React from 'react';
import SearchForm from './SearchForm';
import SearchHeader from './SearchHeader';
import SearchResults from './SearchResults';

function Home(props) {



	return (
		<>
			<SearchHeader lastSearch={props.lastSearch} offset={props.offset}
			limit={props.limit} />
			<SearchForm
				searchString={props.searchString}
				handleSubmit={props.handleSubmit}
				handleChange={props.handleChange}
			/>
			<section>
				<SearchResults
					images={props.images}
					loadNext={props.loadNext}
					loadPrevious={props.loadPrevious}
					offset={props.offset}
				/>
			</section>
		</>
	);
}

export default Home;
