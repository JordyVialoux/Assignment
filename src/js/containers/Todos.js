import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList"
import * as actions from "../actions";

class Todos extends React.Component {
  render() {
    return (
      <div className="todolist-wrapper">
        <h1>To do list</h1>
        <TodoList todos={this.props.todos} actions={this.props.actions} />
        <TodoInput addTodo={this.props.actions.addTodo} />
      </div>
    );
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


export default connect(mapStateToProps, mapDispatchToProps)(Todos)
