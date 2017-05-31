export default function reducer(state={
	users: [],
	fetching: false,
    fetched: false,
    error: null,
}, action) {

	switch (action.type) {
		case "FETCH_USER": {
			return {...state, fetching: true}
		}
		case "FETCH_USERS_COMPLETE": {
			return {
				...state,
				users: action.payload,
				fetching: false,
				fetched: true
			}
		}
		case "FETCH_USERS_FAILED": {
			return {...state, fetching: false, error: action.payload}
		}
	}

	return state
}



