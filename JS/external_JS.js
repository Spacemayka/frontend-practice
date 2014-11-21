// start with document.ready
$( document ).ready(function() {

	$( "#submit_button" ).click(function() {
	//validate

		validate_input();

		item = create_json();

		$.post("/controller/practice_actions.php", {postname:item}, alert("posted"));
		


	});


	//put in object

	//post

});

function validate_input() {
		valid_input = true;
		valid_content = true;

			var total = $('.textfield').length;
			$('.textfield').each(function(i){
				if ($.trim($(this).val()) == '') {
					valid_input = false;
					}

				if (i == (total - 1)) {
        			if (is_alphabetic($.trim($(this).val())) == false) {
					valid_content = false; 
					}
    			}

			});


		if (valid_content == false) {
			alert("Invalid Input");
		}

		if (valid_input == false) {
			alert("Please fill out all fields");
		}

		
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

		valid_input = false;

		if (/^[a-zA-Z]+$/.test(str)) {
    		valid_input = true;
		}

		return valid_input;

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






