$(document).ready(function(){
	$("#submit_btn").click(function(event){
	event.preventDefault();
	alert("button clicked");
	var the_num = "1";

		for (var i = 0; i < theForm.elements.length - 1; i++) {
		    if (theForm.elements[i].value.length == 0) {
		        theForm.elements[i].focus();
		        alert("write something!")
		        break;
		    }
		    else if(i == theForm.elements.length - 2){
		    	if(!/[^a-zA-Z]/.test(theForm.elements[i].value)){
			    	// alert("you da man");
			    	$.post("/controller/practice_actions.php", $("#theForm").serialize(), function(data){
					alert(data);
					});
				}
				else{
					alert("non-alphabetic values are not allowed in the last field");
				}
		    }
		}
	});
});



