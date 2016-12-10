import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Provider } from "react-redux";

import Completed from "./containers/Completed";
import Todos from "./containers/Todos";
import Layout from "./containers/Layout";
import Settings from "./containers/Settings";

import configureStore from './store'

let initialState = {
	todos: [
		{
			id: 0,
			text: 'Initial todo',
			completed: false
		}
	]
}

let store = configureStore(initialState)

const app = document.getElementById('app');

render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Layout}>
			<IndexRoute component={Todos}></IndexRoute>
			<Route path="completed" component={Completed}></Route>
			<Route path="settings" component={Settings}></Route>
			</Route>
		</Router>
	</Provider>,
app);
