import React from 'react'

export default class TodoInput extends React.Component {
	constructor() {
		super()
		this.state = {
			inputText: ''
		}
	}

	addNewTodo(event) {
		this.setState({
			inputText: event.target.value
		})
	}

	submitNewTodo(event) {
		event.preventDefault()
		this.props.addTodo(this.state.inputText)
	}

	render() {
		return (
			<form onSubmit={this.submitNewTodo.bind(this)}>
				<input 
					type="text" 
					placeholder="Add new item"
					onChange={this.addNewTodo.bind(this)}
					/>
				<input type="submit" value="Submit" />
			</form>	
		)
	}
}