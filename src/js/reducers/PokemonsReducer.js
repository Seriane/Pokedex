export default function reducer(state={
	pokemons: {},
	fetching:false,
	fetched:false,
	error:null,
},action) {
	switch (action.type)  {
		case "FETCH_POKEMONS" : {
			return {...state, fetching:true}
		}
		case "FETCH_POKEMONS_FULFILLED" : {
			
			return {...state,
				fetching:false,
				fetched:true,
				pokemons:action.payload}
				break;
		}
		case "FETCH_POKEMONS_ERROR" : {
			return {...state,
				fetching:false,
				fetched:false,
				error:action.payload}
				break;
		}
		case "LOOKFOR_POKEMONS" : {
			return {...state, fetching:true}
		}
		case "LOOKFOR_POKEMONS_FULFILLED" : {
			
			return {...state,
				fetching:false,
				fetched:true,
				pokemons:action.payload}
				break;
		}
		case "LOOKFOR_POKEMONS_ERROR" : {
			return {...state,
				fetching:false,
				fetched:false,
				error:action.payload}
				break;
		}

		case "COMPARE_POKEMONS" : {
			return {...state, fetching:true}
		}
		case "COMPARE_POKEMONS_FULFILLED" : {
			
			return {...state,
				fetching:false,
				fetched:true,
				pokemons:action.payload}
				break;
		}
		case "COMPARE_POKEMONS_ERROR" : {
			return {...state,
				fetching:false,
				fetched:false,
				error:action.payload}
				break;
		}
		
	}
	return state;
}