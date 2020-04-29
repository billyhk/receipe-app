import React, { Component } from 'react';

function SearchHeader(props) {
	return (
		<>
			<p>
				currently showing recipes for <span className='last-search'>{props.lastSearch}</span>
			</p>
		</>
	);
}

export default SearchHeader;
