import React from 'react';

function SearchForm(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<input
				placeholder='food words...'
				type='text'
				name='searchString'
				onChange={props.handleChange}
				value={props.searchString}
			/>
			<button type='submit'>Broccoli</button>
		</form>
	);
}

export default SearchForm;
