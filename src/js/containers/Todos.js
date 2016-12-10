import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList"
import * as actions from "../actions";

class Todos extends React.Component {
  componentWillMount() {
    //check for completed tasks
    this.props.todos.filter((todo) => {
      if(todo.completed == false) {
        console.log("not completed");
      }
    })
    
  }

  componentDidUpdate() {
    //when component updated
    //check for completed items
    //remove complete item from list
    this.props.todos.map((todo) => {
      if(todo.completed == true) {
        console.log("item complete");
      }
    })
  }

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
