	/* ===== LOADER OVERLAY ===== */

	 jQuery(function ($) {
	'use strict';

	jQuery(document).ready(function ($) {

		/* ===== jQuery Varibles ===== */

			mainSlider();
			ContentSlider();
			testimonialSlider();
			testimonialSliderTwo();
			clientSlider();
			blogGridSlider();
			teamSlider();
			parallaxEffect();
			parallaxBackground();

		/* ===== PRELOADER  ===== */

		      $("#loader-overlay").delay(500).fadeOut();
	        $(".loader").delay(1000).fadeOut("slow");

	        $(window).trigger("scroll");
	        $(window).trigger("resize");

	        if (window.location.hash){

	            var hash_offset = $(window.location.hash).offset().top;
	            $("html, body").animate({
	                scrollTop: hash_offset
	            });
	  }


		/* ===== COUNTERS  ===== */

		$('.counter').counterUp({
            delay: 50,
            time: 4000
    });

		/* ===== SKILLS BAR ===== */

    $('.skillbar').skillBars({
        from: 0,
        speed: 4000,
        interval: 100,
        decimals: 0
    });

    /* ===== Parallax Stellar ===== */


    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    jQuery(window).stellar({
        horizontalScrolling: false,
        hideDistantElements: true,
        verticalScrolling: !isMobile.any(),
        scrollProperty: 'scroll',
        responsive: true
    });

		/* ===== PIE CHARTS  ===== */

		$(function() {
				$('.chart-01').easyPieChart({
					easing: 'easeOutBounce',
					barColor: '#212121',
					trackColor: '#eeeeee',
          scaleColor: false,
					scaleLength: 2,
					size: 150, //110
					animate:{
						duration:2000,
						enabled:true
					},
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});

				$('.chart-02').easyPieChart({
					easing: 'easeOutCirc',
					barColor: '#ffffff',
					trackColor: '#212121',
          scaleColor: false,
					scaleLength: 2,
					size: 120, //110
					animate:{
						duration:2000,
						enabled:true
					},
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});

				$('.chart-03').easyPieChart({
					easing: 'easeInQuad',
					barColor: '#BF0731',
					trackColor: '#212121',
          scaleColor: false,
					scaleLength: 2,
					size: 140, //110
					animate:{
						duration:2000,
						enabled:true
					},
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});
		});


	/* ===== COUNTDOWN ===== */

	if ($('.countdown').length > 0) {
        $(".countdown").countdown({
            date: "21 dec 2018 12:00:00",
            format: "on"
        });

	}

  /* ===== SLICK SLIDERS ===== */

	/* ~~~ Hero Half Slider ~~~ */
	function mainSlider(){
	$(".default-slider").slick({
        dots: true,
        infinite: true,
        centerMode: true,
				autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 1,
        slidesToScroll: 1,
				centerPadding: '0',
				responsive: [
		    	{
				  breakpoint: 480,
				  settings: {
					arrows: false,
				  }
				}
  		]
      });
	}

	/* ~~~ Content Slider ~~~ */
	function ContentSlider(){
	$(".text-content-slider").slick({
        dots: false,
        infinite: true,
        centerMode: true,
				autoplay: true,
        autoplaySpeed: 2000,
				fade: true,
 				cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
				centerPadding: '0',
				responsive: [
		    	{
				  breakpoint: 480,
				  settings: {
					arrows: false,
				  }
				}
  		]
      });
	}

	/* ~~~ Testimonials Slider ~~~ */
	function testimonialSlider(){
	$(".testimonial").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
		centerPadding: '0',
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});
	}

	/* ~~~ Testimonial Slider 2 ~~~ */
	function testimonialSliderTwo(){
	$(".testimonial-style-2").slick({
        dots: true,
        infinite: true,
        centerMode: true,
				autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 1,
        slidesToScroll: 1,
				centerPadding: '0',
				responsive: [
		    	{
				  breakpoint: 480,
				  settings: {
					arrows: false,
				  }
				}
  		]
      });
	}

	/* ~~~ Client Slider ~~~ */
	function clientSlider() {
	$(".client-slider").slick({
		slidesToShow: 6,
        slidesToScroll: 1,
		autoplay: true,
        autoplaySpeed: 1000,
		dots:false,
		prevArrow: false,
    	nextArrow: false,
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});
	}

	/* ~~~ Team Slider ~~~ */
	function teamSlider() {
	$(".team-slider").slick({
		slidesToShow: 3,
        slidesToScroll: 1,
		autoplay: true,
        autoplaySpeed: 4000,
		dots:false,
		prevArrow: false,
    	nextArrow: false,
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});
	}


	/* ===== ONE PAGE SCROLLER ===== */

	$('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
  });

	$(window).on("scroll", function(){
			var scrollTop = $(window).scrollTop();
			if(scrollTop >34){
					$(".nav-scrollspy-onepage").addClass("fixed-menu");
			}else {
					$(".nav-scrollspy-onepage").removeClass("fixed-menu");
			}
	});

	/* ===== TYPE IT ===== */

	$('.type-it').typeIt({
		speed: 100,
		cursor:true,
		breakLines:false,
		lifeLike:true,
		startDelete:false,
		loop:true,
    strings: ['themes', 'apps', 'design']
  });

	$('.type-it-2').typeIt({
		speed: 100,
		cursor:true,
		breakLines:false,
		lifeLike:true,
		startDelete:false,
		loop:true,
    strings: ['parallax', 'particles', 'creative', 'agency', 'marketing']
  });

  /* ===== FIT VIDEOS ===== */
	$(".fit-videos").fitVids();

  /* ===== PARALLAX EFFECTS===== */
	function parallaxEffect() {
    	$('.parallax-effect').parallax();
	}

	function parallaxBackground() {
		$('.parallax-bg').parallaxBackground();
	}

	/* ~~~ Blog Grid Slider ~~~ */
	function blogGridSlider() {
    $(".blog-grid-slider").slick({
				dots: false,
        infinite: true,
        centerMode: true,
				autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
				centerPadding: '0'
		});
	}

	/* ===== SEARCH OVERLAY ===== */

	  var wHeight = window.innerHeight;
	  //search bar middle alignment
	  $('#fullscreen-searchform').css('top', wHeight / 2);
	  //reform search bar
	  jQuery(window).resize(function() {
		wHeight = window.innerHeight;
		$('#fullscreen-searchform').css('top', wHeight / 2);
	  });
	  // Search
	  $('#search-button').on('click', function () {
	 	$("div.fullscreen-search-overlay").addClass("fullscreen-search-overlay-show");
	  });
	  $('a.fullscreen-close').on('click', function () {
		$("div.fullscreen-search-overlay").removeClass("fullscreen-search-overlay-show");
	  });


  /* ===== CONTACT FORM ===== */

//	$(function () {
//
//    $('#contact-form').validator();

//    $('#contact-form').on('submit', function (e) {
//
//        if (!e.isDefaultPrevented()) {
//            var url = "assets/php/contact.php";
//            $.ajax({
//                type: "POST",
//                url: url,
//                data: $(this).serialize(),
//                success: function (data)
//                {
//                    var messageAlert = data.class;
//                    var messageText = data.message;
//
//                    var alertBox = '<div class="' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
//                    if (messageAlert && messageText) {
//                        $('#contact-form').find('.messages').html(alertBox);
//                        $('#contact-form')[0].reset();
//                    }
//                }
//            });
//            return false;
//        }
//    	});
//	});


	/* ===== REVOLUTION SLIDER MAIN ===== */

	var revapi347,
	tpj=jQuery;

	tpj(document).ready(function() {

	if(tpj("#rev_slider_1078_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_1078_1");
				}else{
					$("#rev_slider_1078_1").show().revolution({
						sliderType:"standard",
						jsFileLocation:"revolution/js/",
						sliderLayout:"fullscreen",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
							keyboardNavigation:"off",
							keyboard_direction: "horizontal",
							mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
							onHoverStop:"off",
							touch:{
								touchenabled:"on",
								swipe_threshold: 75,
								swipe_min_touches: 1,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							}
							,
							arrows: {
								style:"hebe",
								enable:true,
								hide_onmobile:true,
								hide_under:600,
								hide_onleave:true,
								hide_delay:200,
								hide_delay_mobile:1200,
								tmp: '<div class="tp-title-wrap"> <span class="tp-arr-titleholder">{{title}}</span><span class="tp-arr-imgholder"></span></div>',
								left: {
									h_align:"left",
									v_align:"center",
									h_offset:30,
									v_offset:0
								},
								right: {
									h_align:"right",
									v_align:"center",
									h_offset:30,
									v_offset:0
								}
							}
							,
							bullets: {
								enable:true,
								hide_onmobile:false,
								hide_under:600,
								hide_onleave:true,
								hide_delay:200,
								hide_delay_mobile:1200,
								direction:"horizontal",
								h_align:"center",
								v_align:"bottom",
								h_offset:0,
								v_offset:30,
								space:15,
								style: 'uranus',
        				tmp: '<span class="tp-bullet-inner"></span>'
							}
						},
						viewPort: {
							enable:false,
							outof:"pause",
							visible_area:"80%",
							presize:false
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1240,1024,778,480],
						gridheight:[600,600,500,400],
						lazyType:"none",
						parallax: {
							type:"mouse",
							origo:"slidercenter",
							speed:2000,
							levels:[2,3,4,5,6,7,12,16,10,50,47,48,49,50,51,55],
							type:"mouse",
						},
						shadow:0,
						spinner:"off",
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,
						shuffle:"off",
						autoHeight:"off",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
			}



	/* ===== CBP PORTFOLIO ===== */

	 $(window).on('load', function(){

		 var wow = new WOW({
				offset: 100,
				mobile: false
			  }
			);
			wow.init();


		$('#portfolio-gallery').cubeportfolio({
			filters: '#portfolio-gallery-filter',
			layoutMode: 'grid',
			defaultFilter: '*',
			animationType: 'frontRow',
			gapHorizontal: 0,
			gapVertical: 0,
			gridAdjustment: '',
			mediaQueries: [{
				width: 1500,
				cols: 5
			}, {
				width: 1100,
				cols: 4
			}, {
				width: 800,
				cols: 3
			}, {
				width: 480,
				cols: 2
			}, {
				width: 320,
				cols: 1
			}],
			caption: 'overlayBottomAlong',
			displayType: 'bottomToTop',
			displayTypeSpeed: 300,

			// lightbox
			lightboxDelegate: '.cbp-lightbox',
			lightboxGallery: true,
			lightboxTitleSrc: 'data-title',
			lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'
		});

		$('#js-grid-masonry-projects').cubeportfolio({
			filters: '#js-filters-masonry-projects',
			layoutMode: 'grid',
			defaultFilter: '*',
			animationType: 'foldLeft',
			gapHorizontal: 0,
			gapVertical: 0,
			gridAdjustment: '',
			mediaQueries: [{
				width: 1500,
				cols: 5
			}, {
				width: 1100,
				cols: 4
			}, {
				width: 800,
				cols: 3
			}, {
				width: 480,
				cols: 2
			}, {
				width: 320,
				cols: 1
			}],
			caption: 'zoom',
			displayType: 'fadeIn',
			displayTypeSpeed: 100,

			// lightbox
			lightboxDelegate: '.cbp-lightbox',
			lightboxGallery: true,
			lightboxTitleSrc: 'data-title',
			lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'
		});

	});


	/* === MAGNIFIC POPUP === */

		$('.magnific-lightbox').magnificPopup({
			type: 'image',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			fixedContentPos: false
			// other options
		});

		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

	});

	/* ===== BACK TO TOP  ===== */

	$(window).on ('scroll', function(e) {
		if ($(this).scrollTop() >= 50) {
			$('#return-to-top').fadeIn(200);
		} else {
			$('#return-to-top').fadeOut(200);
		}
	});

	$('#return-to-top').on ('click', function(e) {
		$('body,html').animate({
			scrollTop : 0
		}, 500);
	});



		

	});
        
   //     Disable right-click
 document.addEventListener('contextmenu', (e) => e.preventDefault());

 function ctrlShiftKey(e, keyCode) {
   return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
 }
 
 document.onkeydown = (e) => {
   // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
   if (
	 event.keyCode === 123 ||
	 ctrlShiftKey(e, 'I') ||
	 ctrlShiftKey(e, 'J') ||
	 ctrlShiftKey(e, 'C') ||
	 (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
   )
	 return false;
};
     
        
        
        
        
/** TO DISABLE SCREEN CAPTURE **/
document.addEventListener('keyup', (e) => {
    if (e.key == 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Screenshots disabled!');
    }
});

/** TO DISABLE PRINTS WHIT CTRL+P **/
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key == 'p') {
        alert('This section is not allowed to print or export to PDF');
        e.cancelBubble = true;
        e.preventDefault();
        e.stopImmediatePropagation();
    }
});

/* TO DO: There are combinations that remain to be solved 
    --> Windows+Shift+S
*/

        
        
        
        document.addEventListener("keyup", function (e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
            if (keyCode == 44) {
                stopPrntScr();
            }
        });
function stopPrntScr() {

            var inpFld = document.createElement("input");
            inpFld.setAttribute("value", ".");
            inpFld.setAttribute("width", "0");
            inpFld.style.height = "0px";
            inpFld.style.width = "0px";
            inpFld.style.border = "0px";
            document.body.appendChild(inpFld);
            inpFld.select();
            document.execCommand("copy");
            inpFld.remove(inpFld);
        }
       function AccessClipboardData() {
            try {
                window.clipboardData.setData('text', "Access   Restricted");
            } catch (err) {
            }
        }
        setInterval("AccessClipboardData()", 300);
        




//video=getElementsByTagName('video');
//function removeControls(video){
//  video.removeAttribute('controls');
//}
//window.onload=removeControls(video);
//
//
//
//




function disableControls() { 
  x.controls = false;
  x.load();
} 
  





/*End Jquery*/
});
