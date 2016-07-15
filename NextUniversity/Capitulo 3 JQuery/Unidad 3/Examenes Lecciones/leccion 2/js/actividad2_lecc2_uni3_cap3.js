$(document).ready(function(){
	$("#btn1").click(function(){
		var miDiv = $("#miDiv1");
		efectosDiv1(miDiv);

		var miDiv = $("#miDiv2");
		efectosDiv2(miDiv);
	});
	$("#btn2").click(function(){
		var miDiv = $("#miDiv1");
		// esta manera estoy diciendo que la matriz de colas se eliminen 
		// el [] va la posicion de la cola q voya a elimianr si dejo vacia elimina todas
		 miDiv.queue("fx",[]).stop();
	});

	function efectosDiv1 (miDiv){

		miDiv.hide(2000);
		miDiv.show(2000);
		miDiv.fadeIn(3000);
		miDiv.fadeOut(3000);
		miDiv.show(1000,function(){
			efectosDiv1(miDiv);
		});


	}

	function efectosDiv2(miDiv){

		miDiv.fadeIn(2000);
		miDiv.fadeOut(1000);
		miDiv.hide(2000);
		miDiv.show(1000);
		miDiv.slideToggle('normal',function(){
			efectosDiv2(miDiv);
		});
		
	}

});
