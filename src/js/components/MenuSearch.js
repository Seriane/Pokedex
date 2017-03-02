import React from "react";

import { connect } from "react-redux";
import { fetchPokemonTypes } from "../actions/PokemonTypesActions";
import { fetchPokemons, lookForPokemons } from "../actions/PokemonsActions";

@connect((store) => {
        return {
                types: store.types.types,
                pokefilter: store.pokemons.pokemons,
                }
})
export default class MenuSearch extends React.Component {

    constructor() {
        super();
        this.state = {}
    }
     componentWillMount() {

        this.props.dispatch(fetchPokemonTypes());   
        
               
        }
    lookForPokemon(e) {

        var text = e.target.value;
        if(text.length>0)
            this.props.dispatch(lookForPokemons(text));
        else
            this.props.dispatch(fetchPokemons());

        this.setState(this.props.pokefilter);
    }
	render() {
        if(this.props.types.hits){

        
        var types = this.props.types.hits.hits;
        var content_type = "";

        for(var i = 0 ;i<types.length;i=i+3) {
                content_type += '<div key = "types'+i+'">'    
                content_type += '<span class = "label type-icon type-'+types[i]._source.identifier+'"  key= '+types[i]._source.id+'>'+types[i]._source.identifier+'</span>';
                if(i+1<types.length)
                    content_type += '<span key='+types[i+1]._source.id+' class = "label  type-icon type-'+types[i+1]._source.identifier+'">'+types[i+1]._source.identifier+'</span>';
                if(i+2<types.length)
                    content_type+='<span key ='+types[i+2]._source.id+' class = "label type-icon type-'+types[i+2]._source.identifier+'">'+types[i+2]._source.identifier+'</span>';
                                
                content_type+='</div>';
        }
       console.log(this.state)
        }
		return (
			<div class=" menu col-sm-3">
            		<form class = "form-group search-pokemon" >
            			
            			
            			<label>Search ByName:</label>
            			
            			<div class="input-group">
        				
        					<input type="text" class="form-control" aria-describedby="search-text" onChange = {this.lookForPokemon.bind(this)}/>
        				
        					<span class="input-group-addon" id="search-text"><span class="glyphicon glyphicon-search"></span></span>
    					
    					</div>

            		</form>
            		
        		</div>
        		
            );
	}
}

/*<button class = "toggle col-sm-1 form-control btn btn-default" >

                    </button>*/