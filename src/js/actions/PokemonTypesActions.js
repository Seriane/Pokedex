



export function fetchPokemonTypes() {
	return function(dispatch) {
		dispatch({type:"FETCH_POKEMONTYPES"});
		/*var connection = mysql.createConnection({
  		host     : 'localhost',
  		user     : 'root',
  		password : '',
  		database : 'pokedata'
		});

		connection.connect();




		connection.query('select pokemon.*, types.identifier from types,pokemon, pokemon_types where pokemon.id = pokemon_types.pokemon_id and types.id = pokemon_types.type_id')
	.then((response) => {
			if(response.hits)
			dispatch({type:"FETCH_POKEMONTYPES_FULFILLED",payload:response});
		}).catch((err) => {
			dispatch({type:"FETCH_POKEMONTYPES_ERROR",payload:err})
		})	*/
	}


}