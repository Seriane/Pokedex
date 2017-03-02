export default function reducer(state={
	types: {},
	fetching:false,
	fetched:false,
	error:null,
},action) {
	switch (action.type)  {
		case "FETCH_POKEMON_TYPES" : {
			return {...state, fetching:true}
		}
		case "FETCH_POKEMONTYPES_FULFILLED" : {
	
			return {...state,
				fetching:false,
				fetched:true,
				types:action.payload}
				break;
		}
		case "FETCH_POKEMONTYPES_ERROR" : {
			return {...state,
				fetching:false,
				fetched:false,
				error:action.payload}
				break;
		}
	}
	return state;
}