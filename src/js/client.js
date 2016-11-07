import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Provider } from "react-redux";

import Favorites from "./pages/Favorites";
import Todos from "./pages/Todos";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

import store from "./store";

const app = document.getElementById('app');

ReactDOM.render(
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
