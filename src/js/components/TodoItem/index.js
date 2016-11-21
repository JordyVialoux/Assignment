import React from "react";
import './TodoItem.scss'

export default class TodoItem extends React.Component {
  handleEdit() {
    this.refs.edit.focus();
    //this.props.actions.editTodo(this.props.todo.text)
  }

  handleComplete() {
    this.props.actions.completeTodo(this.props.todo.id)
  }

  handleDelete() {
    this.props.actions.deleteTodo(this.props.todo.id)
  }

  render() {
    const { complete, text } = this.props;

    const icon = complete ? "\u2714" : "\u2716"
    
    return (
      <li className="todo-item">
        <span className="todo-item__text">{this.props.todo.text}<span>{icon}</span></span>
        <input type="text" ref="edit" />
        <button onClick={this.handleEdit.bind(this)}>Edit</button>
        <button onClick={this.handleComplete.bind(this)}>Completed</button>
        <button onClick={this.handleDelete.bind(this)}>Remove</button>
      </li>
    );
  }
}
