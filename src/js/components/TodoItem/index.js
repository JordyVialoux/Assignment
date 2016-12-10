import React from "react";
import './TodoItem.scss'

export default class TodoItem extends React.Component {
  handleEdit() {
    //show input with current text inside
    
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
        <div>
          <button className="btn" onClick={this.handleEdit.bind(this)}>Edit</button>
          <button className="btn" onClick={this.handleComplete.bind(this)}>Completed</button>
          <button className="btn" onClick={this.handleDelete.bind(this)}>Remove</button>
        </div>
      </li>
    );
  }
}
