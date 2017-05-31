import React from "react";


export default class Footer extends React.Component {
  render() {
    const footerStyles = {
      marginTop: "30px",
    };

    return (
      <footer style={footerStyles}>
        <div class="row">
          <div class="col-lg-12">
            <p>Jordan Vialoux Copyright &copy; React Redux Assignment 2017</p>
          </div>
        </div>
      </footer>
    );
  }
}
