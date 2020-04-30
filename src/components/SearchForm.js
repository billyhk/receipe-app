import React from 'react';

function SearchForm(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<input
				className='form-control'
				placeholder='food words...'
				type='text'
				name='searchString'
				onChange={props.handleChange}
				value={props.searchString}
			/>
			<button type='submit' className='btn btn-secondary'>
				show me the food.
			</button>
		</form>
	);
}

export default SearchForm;
