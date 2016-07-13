<?php

include 'Base.php';


class Controller_Practice extends Controller_Base {

    function __construct() {
        parent::__construct();
    }



    public function route() {


    	// set num of fields

    	// dynamicall make array

    	$num_fields = 10;
    	$data["myData"] = [];
    	for ($x = 1; $x < $num_fields + 1; $x++){
    		array_push($data["myData"], ["name" => "field " .$x]);
    		// echo json_encode($data);
    	}
      	// $data["name"] = "Josh";
      	// $data["email"] = "josh@researchconnection.com";
      	// $data["bday"] = "February 4th, 1993";
      	// $data["status"] = "chillin like a villain";
    	// $data["myData"] = [
    	// 	["name" => "Josh"],
    	// 	["name" => "Zach"],
    	// 	["name" => "Ariel"],
    	// 	["name" => "Kal"]

    	// ];

        return $data;
    }


}




