$(document).ready(function(){
	$("#hide").click(function(){
		$("#parrafo").hide();
	});

	$("#show").click(function(){
		$("#parrafo").show(5000,function(){
			alert("El parrafo ya no esta oculto");
		});
	});

	$("#animate").click(function(){
		$("#caja").animate({"left":"+=50px","width":"+=5px"});
	});

	$("#start").click(function(){
		$("#caja2").animate({"width":"+=200px"},1000);// segundo parametro es intervalo de tiempo
	});

	$("#stop").click(function(){
		$("caja2").stop();
	});
});