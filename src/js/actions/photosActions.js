import axios from "axios";

export function fetchPhotos() {
	return function(dispatch) {
		axios.get("https://jsonplaceholder.typicode.com/photos")
			.then((response) => {
				dispatch({type: "FETCH_PHOTOS_COMPLETE", payload: response.data})
			})
			.catch((err) => {
				dispatch({type: "FETCH_PHOTOS_FAILED", payload: err})
			})
	}
}
