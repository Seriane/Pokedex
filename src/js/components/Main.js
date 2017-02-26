import React from "react";

import Pokedex from "./Pokedex"
import Soundtrack from "./Soundtrack"
import Logo from "./Logo"

export default class Main extends React.Component {
	render() {
		return (
			<div id = "container" >
				<Logo />
				<Pokedex />
				<Soundtrack />
			</div>
			);
	}
}
