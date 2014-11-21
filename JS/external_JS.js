// start with document.ready
$( document ).ready(function() {

	$( "#submit_button" ).click(function() {
	//validate

		if (validate_input()) {
			item = create_json();

			$.post("/controller/practice_actions.php", {postname:item}, alert("posted"));

		}

		
		


	});


	//put in object

	//post

});

function validate_input() {
		valid_input = true;
		valid_content = true;

			var total = $('.textfield').length;
			$('.textfield').each(function(i){
				//if any field is empty
				if ($.trim($(this).val()) == '') {
					valid_input = false;
					}

				//if the last field is nonempty and non-alphabetic
				if ((i == (total - 1)) && ($.trim($(this).val()) != '')) {
        			if (is_alphabetic($.trim($(this).val())) == false) {
					valid_content = false; 
					}
    			}


			});



		if (valid_input == false) {
			alert("Please fill out all fields");
			return false;
		}
		if (valid_content == false) {
			alert("Please use alphabetic characters for the last input");
			return false;
		}

		

		return true;

		
}

function create_json() {

		item = {};
	

	$("input[class=textfield]").each(function(i) {
		item['key'+i] = $(this).val();


    });

    console.log(item);
    return item;
}



function is_alphabetic(str) {

		alphabetic = false;

		if (/^[a-zA-Z]+$/.test(str)) {
    		alphabetic = true;
		}

		return alphabetic;

}


function generate_fields(num) {

	$( document ).ready(function() {
		var container = $('<form />');
     		for(var i = 1; i <= num; i++) {
         	container.append('<input type="text" id="thing_'+i+'" class="textfield"></input>');
     		}
     	$('#text_input').html(container);

	});

}


function classify_fields() {
	$( document ).ready(function() {
			$('input[type=text]').each(function(i){
    		$(this).attr("placeholder", "thing" + " " + ++i);
    		//$(this).attr("name", "thing_" + i)

			});
	});	

}






