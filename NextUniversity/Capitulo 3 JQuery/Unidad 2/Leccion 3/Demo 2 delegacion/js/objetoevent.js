$(document).ready(function(){
	$("body").delegate("p","click",function(){
		$("body").append(" <p id ='parrafo_nuevo'>Este parrafo es nuevo y tiene el mismo evento </p>");
	});
	
});