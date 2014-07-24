$(function(){
	$('.main-block').hammer( {
	    recognizers: [
	        // RecognizerClass, [options], [recognizeWith, ...], [requireFailure, ...]
	        [Hammer.Tap],
	        [Hammer.Pinch, { enable: true }],
        	[Hammer.Swipe,{ direction: Hammer.DIRECTION_HORIZONTAL }],
	        // [Hammer.Pinch, { enable: true }, ['rotate']],
	        // [Hammer.Swipe,{ direction: Hammer.DIRECTION_HORIZONTAL }],
	    ]
	}).on("pinch", function(e){
		e.preventDefault();
        // console.log(e.gesture.scale);

	    if(e.gesture.scale > 1){
		    $('body').addClass('detail-page');
			$('.main-block').removeClass('active');
		    $(this).addClass('active');
	    } else if(e.gesture.scale < 1){
		    $('body').removeClass('detail-page');
		    $(this).removeClass('active');
	    } 
	}).on("tap", function(e){
		e.preventDefault();
        // console.log(e.gesture.scale);
	    $('body').addClass('detail-page');
		$('.main-block').removeClass('active');
	    $(this).addClass('active');
	}).on("swipe", function(e){
		e.preventDefault();
		console.log(e);
	    $('body').addClass('detail-page');
		$('.main-block').removeClass('active');

	    if(!$(this).is(':last-child')) {
		    $(this).next('.main-block').addClass('active');
	    } else {
		    $('.main-block:first-child').addClass('active');
	    }
	});

	$('#one').hammer( {
	    recognizers: [
	        // RecognizerClass, [options], [recognizeWith, ...], [requireFailure, ...]
	        [Hammer.Tap],
	        [Hammer.Pinch, { enable: true }],
        	[Hammer.Swipe,{ direction: Hammer.DIRECTION_HORIZONTAL }],
	    ]
	}).on("pinch", function(e){
		e.preventDefault();
	    if(e.gesture.scale > 1){
		    $('body').removeClass().addClass('detail-page').addClass('detail-page-one');
			$('.main-block').removeClass('active');
		    $(this).addClass('active');
	    } else if(e.gesture.scale < 1){
		    $('body').removeClass();
		    $(this).removeClass('active');
	    } 
	}).on("tap", function(e){
		e.preventDefault();
		$('body').removeClass().addClass('detail-page').addClass('detail-page-one');
		$('.main-block').removeClass('active');
	    $(this).addClass('active');
	});

	$('#two').hammer( {
	    recognizers: [
	        // RecognizerClass, [options], [recognizeWith, ...], [requireFailure, ...]
	        [Hammer.Tap],
	        [Hammer.Pinch, { enable: true }],
        	[Hammer.Swipe,{ direction: Hammer.DIRECTION_HORIZONTAL }],
	    ]
	}).on("pinch", function(e){
		e.preventDefault();
	    if(e.gesture.scale > 1){
		    $('body').removeClass().addClass('detail-page').addClass('detail-page-two');
			$('.main-block').removeClass('active');
		    $(this).addClass('active');
	    } else if(e.gesture.scale < 1){
		    $('body').removeClass();
		    $(this).removeClass('active');
	    } 
	}).on("tap", function(e){
		e.preventDefault();
		$('body').removeClass().addClass('detail-page').addClass('detail-page-two');
		$('.main-block').removeClass('active');
	    $(this).addClass('active');
	});
	/*var hammertime = new Hammer(document.getElementById('one'), {});
	hammertime.get('pinch').set({ enable: true });
	hammertime.on('pinch', function(ev) {
		ev.preventDefault();
	    console.log(ev.scale);
	    if(ev.scale > 1){
		    $('body').addClass('detail-page');
		    $('#one').addClass('active');
	    } else if (ev.scale < 1){
		    $('body').removeClass('detail-page');
		    $('#one').removeClass('active');
	    }
	});*/
})