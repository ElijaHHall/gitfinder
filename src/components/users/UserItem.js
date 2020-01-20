import React, { Component } from "react";

class UserItem extends Component {
	// add user schema to state with github api

	render() {
		//pull state variable from above and include as variables using this.state

		const { login, avatar_url, html_url } = this.props.user;

		return (
			<div className='card text-center'>
				<img
					src={avatar_url}
					alt=''
					className='round-img'
					style={{ width: "60px" }}
				/>
				<h3>{login}</h3>

				<div>
					<a href={html_url} className='btn btn-dark btn-sm my-1'>
						More
					</a>
				</div>
			</div>
		);
	}
}

export default UserItem;
