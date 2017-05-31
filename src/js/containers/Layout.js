import React from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../actions/usersActions"
import { fetchPhotos } from "../actions/photosActions"

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>
        <Nav location={location} />
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              {this.props.children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
