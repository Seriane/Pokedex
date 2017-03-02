export default function reducer(state={
	tweets: {},
	fetching:false,
	fetched:false,
	error:null,
},action) {
	switch (action.type)  {
		case "FETCH_TWEETS" : {
			return {...state, fetching:true}
		}
		case "FETCH_TWEETS_FULFILLED" : {
	
			return {...state,
				fetching:false,
				fetched:true,
				tweets:action.payload}
				break;
		}
		case "FETCH_TWEETS_ERROR" : {
			return {...state,
				fetching:false,
				fetched:false,
				error:action.payload}
				break;
		}
	}
	return state;
}