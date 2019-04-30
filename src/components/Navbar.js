import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="nav-wrapper red darken-3">
			<div className="container">
				<a className="brand-logo">
				My Quotes App
				</a>
				<ul className="right">
					<li><Link to="/">Home</Link></li>
					<li><NavLink to="/new_quote">New Quote</NavLink></li>
					<li><NavLink to="/all_quotes">All Quotes</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
				</ul>
			</div>
		</nav>
		)
}

export default Navbar;