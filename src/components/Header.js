import React, { Component } from 'react';
import { Link } from 'react-router-dom';


function Header() {
	return (
		<>
			<div className='header-left'><h1 className='main-title'>{"\u00b7 i'm hungry \u00b7"}</h1>
			<p className='subtitle'><em>(the only cookbook you'll ever need)</em></p></div>
			<Link to='/'>
				<h1>·home·</h1>
			</Link>
		</>
	);
}

export default Header;
