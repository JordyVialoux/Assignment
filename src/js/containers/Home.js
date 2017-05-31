import React from "react";
import { connect } from 'react-redux'

import { fetchPhotos } from "../actions/photosActions"

import ListPhotos from "../components/ListPhotos"

@connect((store) => {
  return {
    photos: store.photos.photos
  }
})

class Home extends React.Component {

  fetchPhotos() {
    this.props.dispatch(fetchPhotos())
  }
  
  render() {
    const { photos } = this.props;
    return (
      <div className="todolist-wrapper">
      <h2>Photos</h2>
      <ListPhotos photos={photos} />
      <button onClick={this.fetchPhotos.bind(this)}>load photos</button>
      </div>
    );
  }
}

export default Home
  