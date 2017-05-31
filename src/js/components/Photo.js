import React from "react";

export default class Photo extends React.Component {
	render() {
		return(
			<li className="col-sm-6 col-md-4">
			 <div className="thumbnail">
			    <img src={this.props.photo.url} />
			    <div className="caption">
			      <span>{this.props.photo.title}</span>
			    </div>
			  </div>
			</li>
		)
	}
}
