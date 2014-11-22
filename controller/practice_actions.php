<?php



class Controller_Practice_Actions {

	function __construct(){
	}


	public function route(){
			

		$posted_data = $_POST['postname'];
		$data = json_decode($posted_data);
		return $data;
	
	}



}

$actions = new Controller_Practice_Actions();
$data = $actions->route();
