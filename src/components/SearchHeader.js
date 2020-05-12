import React, { Component } from 'react';

function SearchHeader(props) {
	return (
		<>
			<p className='search-header'>
				currently showing recipes for{' '}
				<span className='last-search'>{props.lastSearch}</span>
				<br />
				<small>
					displaying results{' '}
					<span className='last-search'>
						{props.offset} - {props.limit + props.offset}
					</span>
				</small>
			</p>
		</>
	);
}

export default SearchHeader;
