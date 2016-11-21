import React from "react"
import TodoItem from "./TodoItem"

export default class TodoList extends React.Component {
	render() {
		return (
			<ul>
				{
					this.props.todos.map((todo) => {
						return <TodoItem key={todo.id} todo={todo} actions={this.props.actions} />
					})
				}
			</ul>
		)
	}
}