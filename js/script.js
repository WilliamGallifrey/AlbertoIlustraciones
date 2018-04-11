$(document).ready(function(){

	if($(window).width() > 991)
	{

		$('#thumbs').find('img').click(function(){
    	$('#largeImage').attr(
    	'src',$(this).attr('src'));

		window.scrollTo(0, 70);

		});


	}


	$('#thumbs').find('img').click(function(){
    	

		var imgsrc =$(this).attr('src');
		

		$('#modalBack').css('display' , 'block');
		$('#imgModal').attr('src',imgsrc);


		});


	//Añadir comportamiento de las flechas

	$('#control-prev').click(function(){
		var res;
		var url = "images/gallery/";
		var num = $('#largeImage').attr('src').replace(url,'');
		console.log("nombre de archivo encontrado: "+num);
		num = num.replace('.jpeg','');
		num = parseInt(num);
		if(num == 1){num = 22;}
		else{num--;}
		res =url+num+".jpeg";
		$('#largeImage').attr(
    	'src',res);

	});


	$('#control-next').click(function(){
		var res;
		var url = "images/gallery/";
		var num = $('#largeImage').attr('src').replace(url,'');
		num = num.replace('.jpeg','');
		num = parseInt(num);
		if(num == 22){num = 1;}
		else{num++;}
		res =url+num+".jpeg";
		$('#largeImage').attr(
    	'src',res);

	});




	$('#largeImage').click(function(){

		

		var imgsrc =$('#largeImage').attr('src');

		

		$('#modalBack').css('display' , 'block');
		$('#imgModal').attr('src',imgsrc);


	});

	$('.close').click(function(){


		$('#modalBack').css('display' , 'none');

	});

})