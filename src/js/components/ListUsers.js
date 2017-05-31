import React from "react";

import User from "./User"

class ListUsers extends React.Component {
	render() {
		return (
			<ul className="list-group">
				{
					this.props.users.map((user) => {
						return <User key={user.id} user={user} />
					})
				}			
			</ul>
		)
	}
}

export default ListUsers
