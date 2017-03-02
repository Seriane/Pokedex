import React from "react";
import { connect } from "react-redux";
import { lookForPokemonsById, PokemonStats } from "../actions/PokemonsActions";
import { fetchTweets } from "../actions/TweetsActions";

import Logo from "./Logo";
import io from "socket.io-client";

@connect((store) => {
        return {
                pokemons: store.pokemons.pokemons,
                tweets: store.tweets.tweets
                }
})
export default class Details extends React.Component {


	componentWillMount() {

		this.props.dispatch(lookForPokemonsById(this.props.params.id));
		//this.props.dispatch(fetchTweets(this.props.params.name));
		//this.forceUpdate();  
	
	}

	render() {
			             

			if(this.props.pokemons.length) {
				var pokemons = this.props.pokemons
				var result = [];
                 var curr_id = -1;
                 for(var i=0;i<pokemons.length;i++) {
                        if(curr_id == pokemons[i].id){
                        		if(result[result.length -1].types.includes(pokemons[i].types)==false)
                               		result[result.length -1].types.push(pokemons[i].types);
                                if(result[result.length-1].states[pokemons[i].stat_name]==null)
                                	result[result.length - 1].states[pokemons[i].stat_name] = pokemons[i].base_stat;

                                continue;
                        }
                        curr_id = pokemons[i].id;

                        result.push({...pokemons[i], types:[pokemons[i].types],states:[]})
                        result[result.length - 1].states[pokemons[i].stat_name] = pokemons[i].base_stat;

                 }
             this.props.dispatch(PokemonStats(result[0].id,result[0].types));    
                

               
					var socket = io.connect("http://localhost:3000");
					socket.emit("tweets",result[0].identifier);
					socket.on("stream", (message) => {

        				document.getElementsByClassName("tweets")[0].innerHTML="<blockquote class='twitter-tweet'><p>"+message.text+"</p></blockquote>";

    				});
    			
		return (
			<div class = "container" >
				<Logo/>
				<div class="row pokeinfo" >
		
	        			<div class="col-md-3">
	        			<img src={"./Images/pokemon/"+result[0].id+".png"} />
	        			</div>
	        			<div class="col-md-3">
	        			<label>Pokémon Informations:</label>
	        				{	result[0].types.map((v)=> {
	        						return(
	        							 <span class = {'label type-icon type-'+v}  >{v}</span>)
	        					})

	        				}
	        			</div>
	        			<div class="col-md-3">
	        			<label>Pokémon Stats:</label>
	        			<div>
	        				<label>hp:</label>
	        				<span>{
	        					
	        					result[0].states["hp"]
	        				}</span>
	        			</div>
	        			<div>
	        				<label>attack:</label>
	        				<span>{
	        					
	        					result[0].states["attack"]
	        				}</span>
	        			</div>
	        			<div>
	        				<label>defense:</label>
	        				<span>{
	        					
	        					result[0].states["defense"]
	        				}</span>
	        			</div>
	        			<div>
	        				<label>special-attack:</label>
	        				<span>{
	        					
	        					result[0].states["special-attack"]
	        				}</span>
	        			</div>
	        			<div>
	        				<label>special-defense:</label>
	        				<span>{
	        					
	        					result[0].states["special-defense"]
	        				}</span>
	        			</div>
	        			<div>
	        				<label>speed:</label>
	        				<span>{
	        					
	        					result[0].states["speed"]
	        				}</span>
	        			</div>
	        			</div>
	        			<div class="col-md-2">
	        				<label>Stats Ranking:</label>
	        			</div>
	        		
				</div>
		
				
				<div  class="row pokeinfo tweets">
				twitter
				</div>
			</div>)
		}
		return null;
	}
}