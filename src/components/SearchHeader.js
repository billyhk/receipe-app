import React, { Component } from 'react';

function SearchHeader(props) {
	return (
		<>
			<p className='search-header'>
				currently showing recipes for <span className='last-search'>{props.lastSearch}</span>
			</p>
		</>
	);
}

export default SearchHeader;
