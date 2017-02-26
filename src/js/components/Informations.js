import React from "react";

import MenuSearch from "./MenuSearch";
import ResultSearch from "./ResultSearch"

export default class Informations extends React.Component {

	render() {
		return (
			<div class = "container-fluid" >
				<div class="row">
					<MenuSearch />
					<ResultSearch />
				</div>
			</div>);
	}
}