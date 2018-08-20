$(function() {
	function ImNotAnEZbtn(button,question,ok){

// CANVAS
		var canvasWidth = $("#question-view").width(),
			canvasHeight = $("#question-view").height();
		//	canvasCenterX = canvasWidth/2,
		//	canvasCenterY = canvasHeight/2;

// BUTTON
		var button = button,
			buttonWidth = button.outerWidth(),
			buttonHeight = button.outerHeight();

		//	buttonLeft = button.offset().left,
		//	buttonRight = buttonLeft + buttonWidth,
		//	buttonTop = button.offset().top,
		//	buttonBottom = buttonTop + buttonHeight,

		//	buttonCenterX = buttonLeft + buttonWidth/2;
		//	buttonCenterY =  buttonTop + buttonHeight/2 ;


// QUESTIONS
		var question = question,
			questions = [
					"Fais moi un gros calin !!",
					"Tu veux bien venir me border ?",
					"Je peux dormir dans ton lit please ?",
					"Hey dis tu m'aimes dis hey ?",
					"Fais un rroooo bisou !!",
					"Tu m'aimerais encore si je votais Christine Boutin ?",
					"Un tout petit Calinouuuuuu ?",
				];
// BUTTON OK
		var ok = ok,
			scaleM = 1,
			saturate = 1;


		
// RANDOM MOVE & CHANGE QUESTION
		button.on('mouseover touchstart' ,function(){
			$(this).css({
				'position':'absolute',
				'transition':'0.5s cubic-bezier(0, 1.04, 0.14, 1.02)',
				'transform': 'scale('+scaleM+')',
			});



			var randomX = Math.floor( Math.random() * (canvasWidth - buttonWidth) ) ; 
			var randomY = Math.floor( Math.random() * (canvasHeight - buttonHeight) ) ; 

			button.animate({
				left: randomX,
				top: randomY,
			}, 100 );

		// Change Question			
			var randomQuestion = Math.floor( Math.random() * questions.length ) ;
			question.html(questions[randomQuestion]);


		// Ajuster marges btn oui
				var okContainer = ok.parent().outerWidth()/2,
					okCenter = ok.outerWidth()/2,
					okMargin = okContainer - okCenter;
					
				ok.css({
					//'width':'100%',
					'margin':'0',
					'margin-left':okMargin,
				});

				ok.parent().parent().css({
					'filter': 'hue-rotate('+saturate+'deg)',
				});

				
			scaleM -= 0.05;
			saturate -= (Math.random() * 20);
		});



	}; // END ImNotAnEZbtn




// ----------------------------- LAUNCH ------------------------------------//
	var button = $('#element-a'); 
	var question = $('h1');
	var ok = $('#element-b'); 
	ImNotAnEZbtn(button, question, ok);











// element-b
ok.click(function(){

	$('h1, button').css({
		'opacity':'0'
	});
	$('#question-container div').css({
		'display':'none'
	});
	$('#question-container').css({
		"border-radius":"50px",
		"background": "none",
		"box-shadow":"none",
	})

	$('#question-container').animate({
		width:0,
		height:0,
	}, 100);
	$('#question-container').fadeOut('200');

	setTimeout(function(){
		$('#question-container').css({
			'width':'100%',
			'height':'100vh',
			'display': 'flex',
			"border":"none",
			"align-items":"center"
		});
		$('#question-container').fadeIn('500');
	}, 200);

	setTimeout(function(){
		$('h1').html('SMACK !');
		$('h1').css({
			'transition':'1s cubic-bezier(0, 1.04, 0.14, 1.02)',
			'opacity':'1',
			'text-align':'center',
			'width':'100%',
			'font-size':'5em',
			'padding':'0'
		});
		$('#question-view').css('background','#e788a4')
	}, 400);	
});





});