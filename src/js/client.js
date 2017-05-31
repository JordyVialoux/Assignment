import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Provider } from "react-redux";

import Home from "./containers/Home";
import Users from "./containers/Users";
import Layout from "./containers/Layout";

import store from './store'

const app = document.getElementById('app');

render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path="users" component={Users}></Route>
			</Route>
		</Router>
	</Provider>,
app);
