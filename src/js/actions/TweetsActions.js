
import axios from "axios";


export function fetchTweets(name) {
	return function(dispatch) {
		dispatch({type:"FETCH_TWEETS"});
		axios.get("http://localhost:3000/tweets?name="+name).then((response) => {
			
			if(response){	
				dispatch({type:"FETCH_TWEETS_FULFILLED",payload:response.data});
			}
		}).catch((err) => {
			dispatch({type:"FETCH_TWEETS_ERROR",payload:err})
		})	
	}


}
