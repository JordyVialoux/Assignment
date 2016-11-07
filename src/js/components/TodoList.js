import React from "react"
import Todo from "./Todo"
import * as actions from "../actions";

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class TodoList extends React.Component {
	render() {
		return (
			<ul>
				{
					this.props.todos.map((todo) => {
						return <Todo key={todo.id} todo={todo} actions={this.props.actions} />
					})
				}
			</ul>
		)
	}
}


function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
 

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)