import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({ images, offset, loadNext, loadPrevious }) => {
	if (!images.length) {
		return <h2 className='no-recipes'>No Recipes Found!</h2>;
	}
	return (
		<div>
			<div className='food-pics'>
				{images.map((image) => (
					<Link to={'/recipe-information/' + image.id} key={image.id}>
						<div key={image.id} className='image'>
							<img
								alt={image.title}
								src={image.image}
							/>
							<p>{image.title}</p>
						</div>
					</Link>
				))}
			</div>
			{images.length === 50 ? (<button onClick={loadNext} className='btn-dark' id='next'>
				Next Recipes
			</button>) : null}
			{offset === 0 ? null : (
				<button onClick={loadPrevious} className='btn-dark' id='previous'>
					Previous Recipes
				</button>
			)}
		</div>
	);
};

export default SearchResults;
