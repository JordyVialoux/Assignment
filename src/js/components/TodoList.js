import React from "react"
import TodoItem from "./TodoItem"

export default class TodoList extends React.Component {
	render() {
		const completed = this.props.todos;
		
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