	$(window).load(function(){
		// init Isotope
		var $grid = $('.grid').isotope({
		  itemSelector: '.element-item',
		  layoutMode: 'fitRows'
		});
		$('.filterlist ul').on('click', 'li', function() {
		  	  var filterValue = $(this).attr('data-filter');
			  $grid.isotope({ filter: filterValue });
			  $('.filterlist ul li span').removeClass('active');
			  $(this).find('span').toggleClass('active');
		});
	});
	/* Build-in */

	/* Ready function */
	$(function() {
		/* Body Animate */
		//$('body').animate({'opacity':1}, 1100);
		/* BG intro */
		$('[data-bg]').each(function(){
		var curBg = $(this).data('bg');
		$(this).css({'background-image':'url('+curBg+')','filter':'progid:DXImageTransform.Microsoft.AlphaImageLoader(src='+curBg+',sizingMethod=scale)'});
		});
		
		/* Mobile Menu */
		$('#nav-icon').click(function(){
			$(this).toggleClass('active');
			$('nav').toggleClass('active');
		});

		/* Focus Input Animation */
		$('.textbox').focusin(function(){
			$(this).parents('.textoverlayinput').addClass('focus');
		});
		$('.textoverlayinput label').click(function(){
			$(this).siblings('input').focus();
		});
		$('.textbox').focusout(function(){
			if($(this).val().length == 0) {
				$(this).parents('.textoverlayinput').removeClass('focus');
			}
		});

		/* Desktop Scroll */
		$('.homewall').on('mousewheel DOMMouseScroll', function(event) {
	    	if($(window).scrollTop() == 0) {
		      clearTimeout($.data(this, 'timer'));
			  $.data(this, 'timer', setTimeout(function() {
			   if(event.originalEvent.wheelDelta / 120 > 0) {
			   		$('.homewall').addClass('homeground');
			   		if($('.scrollblock.moveup').last().hasClass('firstone')) {
			   			$('.logomobiletop').removeClass('active');
			   		}
			   		if($('.scrollblock.moveup').last().hasClass('secondone')) {
			   			$('.logomobiletop img').attr("src", $('.logomobiletop img').data('whiteimg'));
			   			$('#nav-icon').removeClass('changecolor');
			   		}
			   		if($('.scrollblock.moveup').last().hasClass('thirdone')) {
			   			$('.logomobiletop img').attr("src", $('.logomobiletop img').data('redimg'));
			   			$('#nav-icon').addClass('changecolor');
			   		}
		            $('.scrollblock.moveup').last().removeClass('moveup');
		        }
		        else{
		            if(!$('.firstone').hasClass('moveup')) {
		            	$('.firstone').addClass('moveup');
		            	$('.logomobiletop').addClass('active');
		            } else {
		            	$('.scrollblock.moveup').last().next('.scrollblock').addClass('moveup');
		            }
		            if($('.secondone').hasClass('moveup')) {
		            	$('.logomobiletop img').attr("src", $('.logomobiletop img').data('redimg'));
		            	$('#nav-icon').addClass('changecolor');
		            }
		            if($('.thirdone').hasClass('moveup')) {
		            	$('.logomobiletop img').attr("src", $('.logomobiletop img').data('whiteimg'));
		            	$('#nav-icon').removeClass('changecolor');
		            }
		            if($('.fourthone').hasClass('moveup')) {
		            	$('.homewall').removeClass('homeground');
		            }
		        }
			  }, 100));
			}
		});

		/* Key Up / Down */
		$(document).keyup(function(e) {
			if($(window).scrollTop() == 0) {
			    if(e.which == 38) {
			    	// UP
			    	$('.homewall').addClass('homeground');
			   		if($('.scrollblock.moveup').last().hasClass('firstone')) {
			   			$('.logomobiletop').removeClass('active');
			   		}
			   		if($('.scrollblock.moveup').last().hasClass('secondone')) {
			   			$('.logomobiletop img').attr("src", $('.logomobiletop img').data('whiteimg'));
			   			$('#nav-icon').removeClass('changecolor');
			   		}
			   		if($('.scrollblock.moveup').last().hasClass('thirdone')) {
			   			$('.logomobiletop img').attr("src", $('.logomobiletop img').data('redimg'));
			   			$('#nav-icon').addClass('changecolor');
			   		}
		            $('.scrollblock.moveup').last().removeClass('moveup');
			    }
			    if(e.which == 40) {
			    	// Down
			    	if(!$('.firstone').hasClass('moveup')) {
		            	$('.firstone').addClass('moveup');
		            	$('.logomobiletop').addClass('active');
		            } else {
		            	$('.scrollblock.moveup').last().next('.scrollblock').addClass('moveup');
		            }
		            if($('.secondone').hasClass('moveup')) {
		            	$('.logomobiletop img').attr("src", $('.logomobiletop img').data('redimg'));
		            	$('#nav-icon').addClass('changecolor');
		            }
		            if($('.thirdone').hasClass('moveup')) {
		            	$('.logomobiletop img').attr("src", $('.logomobiletop img').data('whiteimg'));
		            	$('#nav-icon').removeClass('changecolor');
		            }
		            if($('.fourthone').hasClass('moveup')) {
		            	$('.homewall').removeClass('homeground');
		            }
			    }
			}
		});

		/* Mobile Touch */
		var ts;
		$(document).bind('touchstart', function (e){
		   ts = e.originalEvent.touches[0].clientY;
		});

		$(document).bind('touchend', function (e){
		  if($(window).scrollTop() < 150) {
			   var te = e.originalEvent.changedTouches[0].clientY;
			   if(ts > te+5){
			      if(!$('.firstone').hasClass('moveup')) {
		            	$('.firstone').addClass('moveup');
		            	$('.logomobiletop').addClass('active');
		            } else {
		            	$('.scrollblock.moveup').last().next('.scrollblock').addClass('moveup');
		            }
		            if($('.secondone').hasClass('moveup')) {
		            	$('.logomobiletop img').attr("src", $('.logomobiletop img').data('redimg'));
		            	$('#nav-icon').addClass('changecolor');
		            }
		            if($('.thirdone').hasClass('moveup')) {
		            	$('.logomobiletop img').attr("src", $('.logomobiletop img').data('whiteimg'));
		            	$('#nav-icon').removeClass('changecolor');
		            }
		            if($('.fourthone').hasClass('moveup')) {
		            	$('.homewall').removeClass('homeground');
		            }
			   }else if(ts < te-5){
				    $('.homewall').addClass('homeground');
				    if($('.scrollblock.moveup').last().hasClass('firstone')) {
			   			$('.logomobiletop').removeClass('active');
			   		}
			   		if($('.scrollblock.moveup').last().hasClass('secondone')) {
			   			$('.logomobiletop img').attr("src", $('.logomobiletop img').data('whiteimg'));
			   			$('#nav-icon').removeClass('changecolor');
			   		}
			   		if($('.scrollblock.moveup').last().hasClass('thirdone')) {
			   			$('.logomobiletop img').attr("src", $('.logomobiletop img').data('redimg'));
			   			$('#nav-icon').addClass('changecolor');
			   		}
				    $('.scrollblock.moveup').last().removeClass('moveup');  
			  	}
			}
		});
		/* Init Function */
	});

	/* Scroll */
	$(window).scroll(function() {


	});
	
	/* Resize */
	$(window).resize(function(){

		/* Init Function */

	});

	/* Orientation  */
	$(window).on("orientationchange",function(){

		/* Init Function */

	});
