$(document).ready(function() {
		$('#rumble-credit').hide(0).fadeIn(1000);

		setTimeout(function(){
			$('#rumble-credit').fadeOut(1000);
		}, 1500);

		setTimeout(function(){
			$('#project-title').show();
			$('#artist-name').show();
			$('#bars').show();
		}, 3000);

	//   setTimeout(function(){
	// 		$('#project-title').hide();
	// 		$('#artist-name').hide();
	// 		$('#bars').hide();
	//   }, 6000);
	//
	// 	//
  // setTimeout(function(){
	// 	  $('body').addClass('loaded');
	// 		$('body').removeClass("noscroll");
	// 	}, 8000);
 });
