import { EventEmitter } from 'events';

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        id: 1237197,
        text: 'Go shopping'
      },
      {
        id: 1238082,
        text: 'Do washing'
      }
    ];
  }

  getAll() {
    return this.todos;
  }
} 

const todostore = new TodoStore;

export default todostore;