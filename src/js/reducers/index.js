import {combineReducers } from "redux"

import pokemons from "./PokemonsReducer"
import types from "./PokemonTypesReducer"
import tweets from "./TweetsReducer"

export default combineReducers({
	pokemons,
	types,
	tweets
})