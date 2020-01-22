import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
	// export with class is unnecessary
	// static variables above the render function
	return (
		<nav className='bg-primary'>
			{/* use this.props.icon and this.props.title in i tag */}
			<h1>
				<i className={icon} /> {title}
			</h1>
		</nav>
	);
};

Navbar.defaultProps = {
	title: "Github Finder",
	icon: "fab fa-github"
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default Navbar;
