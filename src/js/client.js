import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Provider } from "react-redux";

import Favorites from "./pages/Favorites";
import Todos from "./pages/Todos";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

import configureStore from './store'

let initialState = {
	todos: [
		{
			id: 0,
			text: 'Initial todo',
			completed: false
		},
		{
			id: 1,
			text: 'Wash car',
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
			<Route path="favorites" component={Favorites}></Route>
			<Route path="settings" component={Settings}></Route>
			</Route>
		</Router>
	</Provider>,
app);
