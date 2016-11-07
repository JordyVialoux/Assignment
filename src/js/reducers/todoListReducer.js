export default function reducer(state={ 
}, action) {

	switch (action.type) {
		case "ADD_TODO": {
			return Object.assign({}, state, {
				todos: [{
					id: getId(state),
					completed: false,
					text: action.text
				}, ...state.todos]
			});
		}
		case "DELETE_TODO": {
			return Object.assign({}, state, {
				todos: state.todos.filter(function (todo) {
					return todo.id !== action.id
				})
			});
		}
			
	}

	return state
}