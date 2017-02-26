import { Link } from "react-router";
import React from "react";


export default class Pokedex extends React.Component {
	
	render(){

		return (
			<div class = "home" >
				<Link to = "informations"> <img  src = "./Images/pokedex.png" class = "img-responsive center-block pokedex" /> </Link>
			</div>
			)
	}
}

	