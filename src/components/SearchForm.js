import React from 'react';

function SearchForm(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<input
				placeholder='search food by name...'
				type='text'
				name='searchString'
				onChange={props.handleChange}
				value={props.searchString}
			/>
			<button type='submit'>Submit</button>
		</form>
	);
}

export default SearchForm;
