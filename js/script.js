/***********************************************************
                         	Var
************************************************************/



/***********************************************************
                      Append + CSS + Hide
************************************************************/





/***********************************************************
                       Event Function
************************************************************/



$('.landing-preview a').click(function (event) {
	event.preventDefault();
	$('body').animate({
	    scrollTop: $('#scroll-destination').offset().top
	});
});


/*****************
      Mouse
*****************/


/***** Outline Hack part 1/2 *****/
$('button, a').each(function() {
	$(this).click(function(event) {
		$('#outline a').focus();
	});
});
/***** Outline Hack part 1/2 *****/


/*****************
       Key
*****************/


/***********************************************************
                      Non-Event Function
************************************************************/


/***** Outline Hack part 2/2 *****/
$('a, button').each(function(){
	$(this).addClass('outline-hover');
});
/***** Outline Hack part 2/2 *****/


/***********************************************************
                       	   Test
************************************************************/
