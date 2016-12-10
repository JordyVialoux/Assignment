function getId(state) {
	return state.todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId)
	}, -1) + 1
}

export default function reducer(state, action) {
	switch (action.type) {
		case "ADD_TODO": {
			return {
				todos: [
				...state.todos, {
					text: action.text,
					completed: false,
					id: getId(state)
				}]
			}
		}
		case "DELETE_TODO": {
			return {...state,
				todos: state.todos.filter((todo) => {
					return todo.id !== action.id
				})
			}
		}
		case "COMPLETE_TODO":
			return {
			    ...state,
			    todos: state.todos.map(todo => todo.id === action.id ?
			        // transform the one with a matching id
			        { ...todo, completed: action.completed } : 
			        // otherwise return original todo
			        todo
			    )
			    //remove completed todo from todo's window
		}
    	case "COMPLETE_TODO_OTHER": {
			return {
			    ...state,
			    //iterate through each item
			    todos: state.todos.map((todo) => {
			      //transform the one with matching id	
			      if (todo.id === action.id) {
			        return Object.assign({}, todo, {
			          completed: action.completed
			        })
			      }
			    })
		    }
		}
		case "EDIT_TODO": {
			return {
				...state,

			}
		}
       
			
	}

	return state
    
}
