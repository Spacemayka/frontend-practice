<?php



class Controller_Practice_Actions {

	function __construct(){
	}


	public function route(){
		
		//handle POSTs and GETs
		$data = $_POST['postname'];

		if(sizeof($_POST['postname'])) {
		echo("post");
		}
		else {
		echo("no post");
		}
		
	
	}



}

$actions = new Controller_Practice_Actions();
$actions->route();

//echo $actions;