import React from "react";


export default class Soundtrack extends React.Component {
	
	render(){
		return (
			<div class = "sound">
	 			<audio loop autoPlay>
  					<source src = "./sounds/Pokemon_GO_Main_Menu_Theme.mp3" type="audio/mpeg"/>
  						Your browser does not support the audio element.
				</audio> 
			</div>
		)
	}
}