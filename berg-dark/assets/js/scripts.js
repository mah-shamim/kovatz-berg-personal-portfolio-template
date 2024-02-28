/*
Author       : themes_mountain
Template Name: Berg - Personal Portfolio Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/
		
		$('.main-menu').meanmenu();		
        
        /*START CHANGE MENU BACKGROUND JS*/
			var headertopoption = $(window);
			var headTop = $('.header-top-area');

			headertopoption.on('scroll', function () {
				if (headertopoption.scrollTop() > 200) {
					headTop.addClass('menu-bg');
				} else {
					headTop.removeClass('menu-bg');
				}
			});
		 /*END CHANGE MENU BACKGROUND JS*/
								
		/* START COUNTDOWN JS*/
		$('.counter-value').each(function(){
				$(this).prop('Counter',0).animate({
					Counter: $(this).text()
				},{
					duration: 3500,
					easing: 'swing',
					step: function (now){
						$(this).text(Math.ceil(now));
					}
				});
			});
		/* END COUNTDOWN JS */	
		
		/*START PROGRESS BAR*/
	    $('.progress-bar > span').each(function(){
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition' : 'width 2s'
			});
			
			setTimeout(function() {
				$this.appear(function() {
						$this.css('width', width + '%');
				});
			}, 500);
		});
		/*END PROGRESS BAR*/

		/* START JQUERY LIGHTBOX*/
		jQuery('.lightbox').venobox({
			numeratio: true,
			infinigall: true
		});	
		/* END JQUERY LIGHTBOX*/
		
		/* START MIX JS */
		$('.portfolio_item').mixItUp({
		
		});		

		/* END MIX JS */		

		/*START TESTIMONIAL JS*/	
		 $("#testimonial-slider").owlCarousel({
			items:3,
			itemsDesktop:[1000,3],
			itemsDesktopSmall:[979,2],
			itemsTablet:[768,2],
			itemsMobile:[650,1],
			pagination: false,
				navigation:true,
				navigationText:["",""],
				slideSpeed:1000,
				autoPlay:false
		});
		/*END TESTIMONIAL JS*/			
			
	}); 					
			
})(jQuery);


  

