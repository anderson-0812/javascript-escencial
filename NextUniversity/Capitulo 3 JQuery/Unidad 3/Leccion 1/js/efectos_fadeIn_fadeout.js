$(document).ready(function(){
	$("button").click(function(){
		$("div").fadeIn(4000,function(){
			$("label").fadeIn(1000);
			$("p").fadeOut(100);
		});

		return false;
	});
});