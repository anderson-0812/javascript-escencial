$(document).ready(function(){
	$("#btn_desaparecer").on("click",function(){
		$("#parrafo").desaparecer_parrafo();
	});

	$("#btn_mostrar").click(function(){
		$("#parrafo").mostrar_parrafo();
	});
});

jQuery.fn.mostrar_parrafo = function(){
	this.each(function(){
		element = $(this);
		element.show(1000);
	});
}

jQuery.fn.desaparecer_parrafo = function(){
	this.each(function(){
		element = $(this);
		element.hide(1000);
	});
}
