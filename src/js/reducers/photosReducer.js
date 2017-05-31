export default function reducer(state={
	photos: [],
	fetching: false,
	fetched: false,
	error: null,
}, action) {
	switch (action.type) {
		case "FETCH_PHOTOS": {
			return {...state, fetching: true}
		}
		case "FETCH_PHOTOS_COMPLETE": {
			return {
				...state, 
				fetching: false, 
				fetched: true, 
				photos: action.payload
			}
		}
		case "FETCH_PHOTOS_FAILED": {
			return {...state, fetching: false, error: action.payload}
		}
	}

	return state
}