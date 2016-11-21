export function addTodo(text) {
	return {
		type: "ADD_TODO",
		text
	}
}

export function deleteTodo(id) {
	return {
		type: "DELETE_TODO",
	    id
	}
}

export function completeTodo(id) {
	return {
		type: "COMPLETE_TASK",
		completed: true,
		id
	}
}

export function editTodo(text, id) {
	return {
		type: "EDIT_TODO",
		text,
		id
	}
}