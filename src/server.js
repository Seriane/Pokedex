var express = require("express");
var app = express();

var mysql = require("mysql");
var Twitter = require('twitter');
 var http = require('http');
var server = http.createServer(app);

var io = require('socket.io').listen(server);


var client = new Twitter({
  consumer_key: 'Hkl5NdcsiFSodUcUwEIs4EZ5L',
  consumer_secret: 'eIBgycwfdlZuAXNr4uSrmTQpXWnaavZp29BBweaZ3WUhTYXT9g',
  access_token_key: '1080328856-QltxDKHQGOWogGUbqLvpJsMfI5q8GzVdsLDfZHv',
  access_token_secret: 'gf3OV4nUX9K77vKonRfi0xltcjj9F4H5lSyWT0IvLSzKF'
});

var connection = mysql.createConnection({
  		host     : 'localhost',
  		user     : 'root',
  		password : '',
  		database : 'pokedata'
		});

		connection.connect();



		

app.get('/pokemons', function(req, res){
  connection.query('select pokemon.*, types.identifier as types from types,pokemon, pokemon_types where pokemon.id = pokemon_types.pokemon_id and types.id = pokemon_types.type_id and pokemon.id <= 721 ',function (error, results, fields) {
  if (error) throw error;
  res.send(results);
});
});

app.get('/search', function(req, res){
console.log(req.query);
//by name
	if(req.query.name)
  		connection.query('select pokemon.*, types.identifier as types from types,pokemon, pokemon_types where pokemon.id = pokemon_types.pokemon_id and types.id = pokemon_types.type_id and pokemon.id <= 721 and pokemon.identifier like \'%'+req.query.name+'%\'',function (error, results, fields) {
  		if (error) throw error;
  			res.send(results);
});
  	if(req.query.id)
  		connection.query('SELECT distinct pokemon.*, types.identifier AS types, stats.identifier as stat_name, pokemon_stats.base_stat FROM types, pokemon, pokemon_types, stats, pokemon_stats WHERE pokemon.id = pokemon_types.pokemon_id AND types.id = pokemon_types.type_id AND pokemon.id <= 721 AND stats.id = pokemon_stats.stat_id AND pokemon.id = pokemon_stats.pokemon_id AND pokemon.id ='+req.query.id,function (error, results, fields) {
  			if (error) throw error;
  				res.send(results);
});

});

app.get('/compare',function(req, res){
	var stat_rank=[];
	connection.query("SELECT stats.identifier,pokemon_stats.base_stat FROM stats,pokemon_stats,pokemon WHERE pokemon.id=pokemon_stats.pokemon_id AND stats.id=pokemon_stats.stat_id AND pokemon.id="+req.query.id,function(error,results,fields){
		
		results.forEach((identifier) => {
				var types=req.query.types.split(",");
				
				types.forEach((type)=> {
	
					connection.query("SELECT COUNT(pokemon.id) as count FROM pokemon, pokemon_stats,stats,types,pokemon_types WHERE pokemon.id=pokemon_stats.pokemon_id AND pokemon.id=pokemon_types.pokemon_id AND pokemon_types.type_id=types.id AND pokemon_stats.stat_id=stats.id AND types.identifer like '"+type+"' AND pokemon.id="+req.query.id+" AND pokemon_stats.base_stat>"+identifier.base_stat,function(err,r,f){
						res.send({"type":type,"rank":r,"stat":identifier.identifier});
						//console.log(stat_rank);
					});
					

				});
			
		});

		//res.send(stat_rank);
	});
	
	//connection.query(("SELECT COUNT() FROM pokedata.pokemon, pokemon_stats, pokemon_types,types WHERE pokemon_types.type_id = types.id AND pokemon_types.pokemon_id = pokemon.id AND types.identifier like '%"+res.query.types+"%' AND pokemon.id = pokemon_stats.pokemon_id AND pokemon_stats.stat_id="+req.query.stat_id+" AND base_stat>"+req.query.value+" order by base_stat asc;"))

});

io.sockets.on('connection', function (socket) {
	console.log("here");
	socket.on("tweets",function(name) {
		console.log("in tweets"+name);
		client.stream('statuses/filter', {track:name}, function(stream) {
  		stream.on('data', function(event) {
   		 	socket.emit("stream",event);
  			});
		});
	});
});


server.listen(3000);