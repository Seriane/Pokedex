import React from "react";

import Main from "./Main";


export default class Layout extends React.Component {
	render() {
		return (
			<div>
			{this.props.children}
			</div>
			);
	}
}
