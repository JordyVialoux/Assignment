import React from "react";

export default class User extends React.Component {
	render() {
		const userStyle = {
			display: "block"
		}
		return (
			<li className="list-group-item">
				<span style={userStyle} className="list-group-heading">Name: {this.props.user.name}</span>
				<span style={userStyle} className="list-group-item-text">Company Name: {this.props.user.company.name}</span>
				<span style={userStyle}>Website: {this.props.user.website}</span>
			</li>
		)
	}
}