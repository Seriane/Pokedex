import React from "react";


export default class ResultSearch extends React.Component {

	render() {
		return (
			<div class = "col-md-4 result">
        		<table class = "table ">
        			<thead>
        				<tr>
        					<th>#</th>
        					<th>image</th>
        					<th>name</th>
        					<th>types</th>
        					<th>height/weight</th>
        				</tr>
        			</thead>
        		</table>
        		</div>);
	}
}