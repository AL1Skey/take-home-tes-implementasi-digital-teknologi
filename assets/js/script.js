/*----------------------------------------------------------------

	Template Name: Ethant Hunt - HTML Template 
	Version: 1.0

	-------------------------------------------------------------------------------*/

/**************************************************************
	
	Main Js Activation
	01. Preloader 
	02. Menu 
	03. Pagepiling
	04. Typed Text
	05. Parallax
	06. Carousels
	07. Ajax Forms
	__ End Js Activation

***************************************************************/

(function ($) {
	'use strict';

	/*-------------------------------------------------------------------------------
	  Preloader
	-------------------------------------------------------------------------------*/

	$(window).on('load', function() {
		if ( $('.preloader').length ) {
			$('.preloader').fadeOut('slow');
		}

		if ( $('.a-intro').length ) {
			$('.a-intro').addClass('active');
		}
	});



	/*-------------------------------------------------------------------------------
	  Menu
	-------------------------------------------------------------------------------*/

	$('.a-nav-toggle').on('click', function(){
		if ($('html').hasClass('body-menu-opened')) {
			$('html').removeClass('body-menu-opened').addClass('body-menu-close');
		} else {
			$('html').addClass('body-menu-opened').removeClass('body-menu-close');
		}
	});



	/*-------------------------------------------------------------------------------
	  Pagepiling
	-------------------------------------------------------------------------------*/

	if ( $('.a-pagepiling').length ) {
		$('.a-pagepiling').pagepiling({
			scrollingSpeed: 280,
			menu: '#menu, #menuMain',
			// anchors: ['About', 'Services', 'Skills', 'Resume', 'Portfolio', 'Clients', 'Awards', 'Contact', 'Testimonials'],
			anchors: ['About', 'Services', 'Skills', 'Resume', 'Portfolio', 'Clients', 'Contact'],
			loopTop: false,
			loopBottom: false,
			navigation: {
				'position': 'right'
			},
			onLeave: function(){
				$('.a-progressbar .progress-bar').each(function() {
					if ($('.slide-skills').hasClass('active')) {
						$(this).width($(this).attr('aria-valuenow') + '%');
					} else {
						$(this).width('0');
					}
				});

				typedText();

				// close sidebar if opened
				if ($('html').hasClass('body-menu-opened')) {
					$('html').removeClass('body-menu-opened').addClass('body-menu-close');
				}

        // var bgColor = $('.navbar-m').css('background-color');
				// if (bgColor = "#ffffff") {
				// 	$(".navbar-m").css("background-color", "#fafafa");
				// } else {
				// 	$(".navbar-m").css("background-color", "#ffffff");
				// }

				removeHash();
			}
		});
	}



	/*-------------------------------------------------------------------------------
	  Remove Anchor
	-------------------------------------------------------------------------------*/

	// when the DOM is ready
    // $(document).ready(function() {
		// get the anchor link buttons
		// const menuBtn = $('.btn-menu');
		// // when each button is clicked
		// menuBtn.click(()=>{	
		// 	// call removeHash function after set timeout
		// 	removeHash();
		// });

		// or
		$('.btn-menu').on('click', function() {
			removeHash();
		});
	// });
	
	// removeHash function
		// uses HTML5 history API to manipulate the location bar
	function removeHash(){
		history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
	}



	/*-------------------------------------------------------------------------------
	  Typed Text
	-------------------------------------------------------------------------------*/

	function typedText() {
		$('.a-slide-typed').each(function() {
			var thisSlide = $(this);
			if (thisSlide.hasClass('active')) {
				var typedDiv = '.a-typed-' + thisSlide.data('name');
				$(typedDiv).html('');
				var typedText = thisSlide.find('.a-typed').data('text');

				var typedT = new Typed(typedDiv, {
					strings: [
						typedText
					],
					typeSpeed: 60,
					startDelay: 1000,
					loop: false,
					showCursor: false
				});
			}
		});
	}

	$(window).load(function () {
		typedText();
	});



	/*-------------------------------------------------------------------------------
	  Parallax
	-------------------------------------------------------------------------------*/

	if ( $('#a-parallax').length ) {
		var scene = document.getElementById('a-parallax');
		var parallax = new Parallax(scene);
	}



	/*-------------------------------------------------------------------------------
	  Carousels
	-------------------------------------------------------------------------------*/

	if ( $('.a-portfolio-carousel').length ) {
		var owl = $('.a-portfolio-carousel');
		owl.owlCarousel({
			items: 3,
			smartSpeed: 750,
			margin: 30,
			autoplay: true,
			loop: true,
			autoplayHoverPause: true,
			
			// edit dots to false doesnt work
			dots: false,
			
			nav: false,
			dotData: false,
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				900:{
					items: 3
				}
			}
		});
	}

// 	if ( $('.a-testimonial-carousel').length ) {
// 		var owl = $('.a-testimonial-carousel');
// 		owl.owlCarousel({
// 			items: 1,
// 			smartSpeed: 750,
// 			margin: 30,
// 			autoplayHoverPause: true,
// 			dots: true,
// 			nav: false
// 		});
// 	}



	/*-------------------------------------------------------------------------------
	  Ajax Forms
	-------------------------------------------------------------------------------*/

	if ($('.a-form').length) {
		$('.a-form').each(function(){
			$(this).validate({
				errorClass: 'error',
				submitHandler: function(form){
					$.ajax({
						type: "POST",
						url:"mail.php",
						data: $(form).serialize(),
						success: function() {
							$('.form-group-message').show();
							$('#error').hide();
							$('#success').show();
						},
						error: function(){
							$('.form-group-message').show();
							$('#success').hide();
							$('#error').show();
						}
					});
				}
			});
		});
	}



	/*-------------------------------------------------------------------------------
	  Multi-Lang
	-------------------------------------------------------------------------------*/

	$('.menu-lang-item').on('click', function() {
		var lang = $(this).data('lang')
		if(lang == localStorage.getItem('language')) {
			if ($('html').hasClass('body-menu-opened')) {
				$('html').removeClass('body-menu-opened').addClass('body-menu-close');
			}
		} else {
			setLanguage(lang);
		}
		$('.menu-lang-item').removeClass('active');
		$(this).addClass('active');
	});

	var language; 
	function getLanguage() {
		(localStorage.getItem('language') == null) ? setLanguage('id') : false;
		$.ajax({
			url:  'language/' +  localStorage.getItem('language') + '.json',
			dataType: 'json', 
			async: false,
			success: function (lang) { 
				var language = lang;
				$('#text-about-1').html(language.about1);
				$('#text-about-2').html(language.about2);
				$('#text-services-1').html(language.services1);
				$('#text-services-2').html(language.services2);
				$('#text-skills-1').html(language.skills1);
				$('#text-skills-2').html(language.skills2);
				$('#text-resume-1').html(language.resume1);
				$('#text-resume-2').html(language.resume2);
			},
		});
		if ($('html').hasClass('body-menu-opened')) {
			$('html').removeClass('body-menu-opened').addClass('body-menu-close');
		}
		typedText();
	}

	function setLanguage(lang) {
		localStorage.setItem('language', lang);
		getLanguage();
	}

	$(window).load(function () {
		getLanguage();

		var lang = localStorage.getItem('language');
		$('.menu-lang-item').each(function(){
			if($(this).data('lang') == lang) {
				$(this).addClass('active');
			}
		})
	});



	/*-------------------------------------------------------------------------------
	  Portofolio
	-------------------------------------------------------------------------------*/

	// Filter Selection
	$('.btn').on('click', function() {
        var filter = $(this).data('filter');

        if ($('.item').hasClass('show')) {
			$('.item').removeClass('show');
        }

        if (filter == '*') {
			$('.item').each(function(){
				$(this).addClass('show');
			});
        } else {
			$('.item').each(function(){
				if($(this).hasClass(filter)) {
					$(this).addClass('show');
				}
			});
        }

        if($('.btn').hasClass('active')) {
			$('.btn').removeClass('active');
        }
        $(this).addClass('active');
	});

    $(document).ready(function() {
        $('.portofolio-web').height($('.portofolio-vid').height());
    });


	// .portofolio-web detail
	// $('.portofolio-web').on('click', function() {
    //     // var title = $(this).find('.desc').html();
    //     var imgSrc = $(this).find('img').attr('src');
    //     $('#img-web').attr('src', imgSrc);
    //     // $('#portofolio-title').html('<h2>'+title+'</h2>');
    //     $('#portofolioWebDetail').modal('show');
    // });

	// $('#portofolioWebDetail').on('hidden.bs.modal', function (event) {
    //     $('#img-web').attr('src', '');
    // })
	// $('#portofolioWebDetail').on('hide.bs.modal', function (event) {
    //     $('#img-container').scrollTop(0);
    // })
	

	// .portofolio-vid detail
	$('.portofolio-vid').on('click', function() {
        var src = $(this).data('src');
        var title = $(this).find('.desc').html();
        $('#frame-yt').attr('src', 'https://www.youtube.com/embed/'+src);
        $('#portofolio-title').html('<h5>'+title+'</h5>');
        $('#portofolioVidDetail').modal('show');
    });

    $('#portofolioVidDetail').on('hidden.bs.modal', function (event) {
        $('#frame-yt').attr('src', '');
    }) 

}($));
