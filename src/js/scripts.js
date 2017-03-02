import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Details from "./components/Details";
import Informations from "./components/Informations";

import Layout from "./components/Layout";
import Main from "./components/Main";
import Store from "./store"
const app = document.getElementById("app");

ReactDOM.render(
	<Provider store={Store} >
		<Router history = {hashHistory} >
			<Route path = "/" component = {Layout} >
				<IndexRoute component = {Main} ></IndexRoute>
				<Route path = "informations" component = {Informations} >
				</Route>
				<Route path = "details/:id/:identifier" component={Details}></Route>

			</Route>
		</Router>
	</Provider>,app);