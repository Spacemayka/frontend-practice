//$document.ready(function(){
	$("#submit_btn").click(function(){
		$.post("/", $("#theForm").serialize(), function(data){
			alert(data);
		});
		$("blue").append("<p>I'm a paragraph</p>");  
	});
//});


