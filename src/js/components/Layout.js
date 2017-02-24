import React from "react";

import Pokedex from "./Pokedex"
import Soundtrack from "./Soundtrack"
import Logo from "./Logo"

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Logo />
				<Pokedex />
				<Soundtrack />
			</div>
			);
	}
}
