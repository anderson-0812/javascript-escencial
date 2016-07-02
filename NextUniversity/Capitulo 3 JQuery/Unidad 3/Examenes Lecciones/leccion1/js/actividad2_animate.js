$(document).ready(function(){
	$("#start_animate").click(function(){
		$("#caja").css("background-color","#2B38F0");

		$("#caja").animate({"width":"+=1000px"},10000);
	});

	$("#stop_animate").click(function(){
		$("#caja").stop();
		$("#caja").css("background-color","#F0912B");

	});
});