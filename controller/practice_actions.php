<?php


class Controller_Practice_Actions {

	function __construct(){
	}


	public function route(){
		// $random_var = "1";
		// if($_POST['field_' .$random_var] == "hello"){
		// 	echo "What's good?";
		// }
		// else{
		// 	echo "fuck you";
		// }

		// include "theVariable.php";
		// for ($y = 1; $y <= $num_fields; $y++){
  //   		if($_POST['field_' .$y] == ""){
		// 		echo "write something!";
		// 	}
		// 	else{
		// 		echo "Good shit breh";
		// 	}
		// } 
		
		//loop that runs $numfields number of times,
		//to check if any of the fields are not filled out
		//and if the last field has non-alphabetic characters in it

		//handle POSTs and GETs
		//make if statements checking if the code is valid
		echo json_encode("Thank you. Your information has been saved.");
	}



}

$actions = new Controller_Practice_Actions();
$actions->route();