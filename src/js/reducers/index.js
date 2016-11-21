function getId(state) {
	return state.todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId)
	}, -1) + 1
}

export default function reducer(state, action) {
	switch (action.type) {
		case "ADD_TODO": {
			return {
				todos: [{
					text: action.text,
					completed: false,
					id: getId(state)
				}, ...state.todos]
			}
		}
		case "COMPLETE_TASK": {
             return {...state,
             	todos: [{
             		completed: action.completed,
             		id: getId(state),
             		text: action.text
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
			
	}

	return state
}
