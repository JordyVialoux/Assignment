import { EventEmitter } from 'events';

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        id: 1237197,
        text: 'Go shopping',
        complete: true
      },
      {
        id: 1238082,
        text: 'Do washing',
        complete: false
      }
    ];
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false
    });

    this.emit("change");
  }

  deleteTodo(id) {
    //logic to remove item
    console.log("Give me the id", this.todos);
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
        break;
      }
      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        this.emit("change");
        break;
      }
      case "DELETE_TODO": {
        this.deleteTodo(action.id);
        break;
      }
    }
  }

} 

const todoStore = new TodoStore;

//dispatcher - register to the store for actions
dispatcher.register(todoStore.handleActions.bind(todoStore));

//expose the store to create new items
window.todoStore = todoStore;

window.dispatcher = dispatcher;

export default todoStore;