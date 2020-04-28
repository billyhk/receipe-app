import React, { Component } from 'react';
import { Link } from 'react-router-dom';


function Header() {
	return (
		<>
			<h1>{"\u00b7 i'm hungry \u00b7"}</h1>
			<Link to='/'>
				<h1>·home·</h1>
			</Link>
		</>
	);
}

export default Header;
