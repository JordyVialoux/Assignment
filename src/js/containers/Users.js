import React from "react";
import { connect } from "react-redux"

import { fetchUsers } from "../actions/usersActions"

import ListUsers from "../components/ListUsers"

@connect((store) => {
  return {
    users: store.users.users
  }
})

class Users extends React.Component {

  fetchUsers() {
    this.props.dispatch(fetchUsers())
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        <h1>Users</h1>
        <ListUsers users={users} />
        <button onClick={this.fetchUsers.bind(this)}>Load Users</button>
      </div>
    );
  }
}

export default Users
