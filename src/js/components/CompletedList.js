import React from 'react'

export default class CompletedList extends React.Component {
	render() {
		console.log(this.props)
		return (
			<ul>
				{
					this.props.todos.map((todo) => {
						return <li key={todo.id} todos={todo}></li>
					})
				}
        	</ul>
		)
	}
}