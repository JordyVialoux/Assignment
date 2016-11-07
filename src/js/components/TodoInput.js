import React from 'react'

export default class TodoInput extends React.Component {
	constructor() {
		super()
		this.state = {
			inputText: ''
		}
	}

	handleChange(event) {
		const text = event.target.value
		this.setState({
			inputText: text
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.addTodo(this.state.inputText)
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input 
					type="text" 
					placeholder="Add new item"
					onChange={this.handleChange.bind(this)}
					/>
				<input type="submit" value="Submit" />
			</form>	
		)
	}
}