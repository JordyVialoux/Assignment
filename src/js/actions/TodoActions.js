import dispatcher from "../dispatcher";

export function createTodo(text) {
	dispatcher.dispatch({
		type: "CREATE_TODO",
		text,
	});
}

export function deleteTodo(id) {
	dispatcher.dispatch({
		type: "DELETE_TODO",
		id,
	});
}

export function reloadTodos() {
	// axios("http://somedata.com/endpoint").then((data) => {
	// 	console.log("got the data");
	// })
	dispatcher.dispatch({type: "FETCH_TODOS"});
	setTimeout(() => {
		dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
		{
			id: 1237197,
			text: 'Wash bike',
			complete: true
		},
		{
			id: 1238082,
			text: 'Hug your wife',
			complete: true
		},
		]});
	}, 1000);
}