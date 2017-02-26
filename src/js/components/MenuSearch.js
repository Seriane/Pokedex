import React from "react";



export default class MenuSearch extends React.Component {

	render() {
		return (
			<div class=" menu col-sm-3">
            		<form class = "form-group search-pokemon" >
            			
            			
            			<label>Search ByName:</label>
            			
            			<div class="input-group">
        				
        					<input type="text" class="form-control" aria-describedby="search-text"/>
        				
        					<span class="input-group-addon" id="search-text"><span class="glyphicon glyphicon-search"></span></span>
    					
    					</div>
            			
            			<label>Types:</label>
            			
            			<div class="input-group">
        				
        					<button  class="form-control btn btn-primary" aria-describedby="search-text">
        						Search
        					</button>
        					
    					
    					</div>
            		</form>
            		<button class = "toggle col-sm-1 form-control btn btn-default" >

            		</button>
        		</div>
        		
            );
	}
}