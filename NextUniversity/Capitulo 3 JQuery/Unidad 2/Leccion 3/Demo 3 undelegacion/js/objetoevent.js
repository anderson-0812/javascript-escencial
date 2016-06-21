$(document).ready(function(){
	$("body").delegate("p","click",function(){
		$("#parrafo_nuevo").append(" <p id ='parrafo_nuevo'>Este parrafo es nuevo y tiene el mismo evento </p>");
	});

	$("#undelegate").click(function(){
		$("body").undelegate();
	});
	
});