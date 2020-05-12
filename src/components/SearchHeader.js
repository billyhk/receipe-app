import React from 'react';

function SearchHeader(props) {
	let offset = props.offset
	return (
		<>
			<p className='search-header'>
				currently showing recipes for{' '}
				<span className='last-search'>{props.lastSearch}</span>
				<br />
				{props.images.length === 0 ? null : (<small>
					displaying results:{' '}
					<span className='last-search'>
						{offset + 1} - {offset + (props.images.length)}
					</span>
				</small>)}
			</p>
		</>
	);
}

export default SearchHeader;