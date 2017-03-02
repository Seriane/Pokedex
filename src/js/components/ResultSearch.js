import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { fetchPokemons } from "../actions/PokemonsActions";

@connect((store) => {
        return {
                pokemons: store.pokemons.pokemons,
                
                }
})
export default class ResultSearch extends React.Component {



        componentWillMount() {
        this.props.dispatch(fetchPokemons());   
        
               
        }

	render() {
                if(this.props.pokemons) {
                
                 var pokemons = this.props.pokemons;
                 var result = [];
                 var curr_id = -1;
                 for(var i=0;i<pokemons.length;i++) {
                        if(curr_id == pokemons[i].id){
                                result[result.length -1].types.push(pokemons[i].types);
                                continue;
                        }
                        curr_id = pokemons[i].id;
                        result.push({...pokemons[i], types:[pokemons[i].types]})

                 }

                

               
                result = result.map((obj) => {
                                return (<tr>
                                                <td>{obj.id}</td>
                                                <td>
                                                        <Link to = {"details/"+obj.id+"/"+obj.identifier}><img src={"../../Images/pokemon/"+obj.id+".png"} /></Link>
                                                </td>
                                                <td>
                                                        {obj.identifier}
                                                </td>
                                                <td>
                                                        {obj.types.map((type)=>{
                                                                return (
                                                                        <span class = {'label type-icon type-'+type}  >{type}</span>);
                                                        })}
                                                </td>
                                                <td>
                                                        height :{obj.height}
                                                        {"\n"}
                                                        weight: {obj.weight}
                                                </td>
                                                <td>
                                                        <button type="button" class="btn btn-default" aria-label="Left Align">
                                                                <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
                                                                {obj.like}
                                                        </button>
                                                        <button type="button" class="btn btn-default" aria-label="Left Align">
                                                                <span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>
                                                                {obj.dislike}
                                                        </button>
                                                    

                                                </td>
                                        </tr>
                                
                                )
             
                        });
                }
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
                                                <th>likes/dislikes</th>
        				</tr>
                                        
        			</thead>
                                <tbody>
                                        {result}
                                </tbody>
        		</table>
                        
        		</div>);
	}
}