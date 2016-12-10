import React from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import CompletedList from "../components/CompletedList"

class Completed extends React.Component {
  render() {
    return (
      <div>
        <h1>Completed</h1>
        <p>Here are your completed tasks:</p>
        <CompletedList todos={this.props.todos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
	return state
}


export default connect(mapStateToProps)(Completed)
