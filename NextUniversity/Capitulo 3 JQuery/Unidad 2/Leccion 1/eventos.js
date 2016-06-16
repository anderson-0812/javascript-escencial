$(document).ready(function(){
	$("#btn1").click(function(){
		$("#p_click").append("Texto Nuevo");
	});

	$("#btn2").mouseenter(function(){
		alert("has pasado elmouse por el boton");
	});

	$("#btn3").mouseleave(function(){
		alert("Elmouse dejo de estar sonre el boton");
	});

	$("#t_focus").focus(function(){
		$(this).css("background-color","#848484");
	});

	$("#t_focus").blur(function(){
		$(this).css("background-color","#ffffff");
	});

	$("#btn4").dblclick(function(){
		$("#p_dbclick").append("Texto Nuevo");
	});
});