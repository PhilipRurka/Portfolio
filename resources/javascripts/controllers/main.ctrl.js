'use strict';
app.controller('portfolioController',
['$scope',
function($scope) {
	
	$('.landing-preview a').click(function (event) {
		event.preventDefault();
		$('body').animate({
			scrollTop: $('#scroll-destination').offset().top
		});
	});

}]);
