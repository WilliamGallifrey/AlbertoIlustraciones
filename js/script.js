$(document).ready(function(){

	if($(window).width() >= 991)
	{

		$('#thumbs').find('img').click(function(){
    	$('#largeImage').attr(
    	'src',$(this).attr('src'));

		window.scrollTo(0, 70);

		});


	}


	//Añadir comportamiento de las flechas

})