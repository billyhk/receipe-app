import React, { Component } from 'react';

function SearchHeader(props) {
	return (
		<>
			<p>
				currently showing recipes for <strong>{props.lastSearch}</strong>
			</p>
		</>
	);
}

export default SearchHeader;
