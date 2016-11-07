export function addTodo(text) {
	return {
		type: "ADD_TODO",
		text: {
			text
		},
	}
}

export function deleteTodo(id) {
	return {
		type: "DELETE_TODO",
		payload: id
	}
}