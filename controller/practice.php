<?php

include 'Base.php';


class Controller_Practice extends Controller_Base {

    function __construct() {
        parent::__construct();
}


    public function route() {
    
        $data["name"] = "Isaac"; 
        $number_of_fields = 3;


        for ($i=0; $i < $number_of_fields; $i++) { 
    		
        	// Array for mustache to render
    	    $data["text_fields"][$i]["placeholder"] = "thing ".($i+1);
	    
        }



        return $data;
    }



}
