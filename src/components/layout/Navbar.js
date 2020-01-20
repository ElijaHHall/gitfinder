import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
	// export with class is unnecessary
	// static variables above the render function

	static defaultProps = {
		title: "Github Finder",
		icon: "fab fa-github"
	};

	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired
	};

	render() {
		return (
			<nav className='bg-primary'>
				{/* use this.props.icon and this.props.title in i tag */}
				<h1>
					<i className={this.props.icon} /> {this.props.title}
				</h1>
			</nav>
		);
	}
}

export default Navbar;
