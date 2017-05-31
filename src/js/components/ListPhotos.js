import React from "react";

import Photo from "./Photo"

class Photos extends React.Component {
	render() {
		return (
			<ul>
				{
					this.props.photos.map((photo) => {
						return <Photo key={photo.id} photo={photo} />
					})
				}
			</ul>
		)
	}

}

export default Photos
