//SLIDERS
// main-slider
if($('.main-slider__body').length>0){
	$('.main-slider__body').slick({
		adaptiveHeight: true, 
		autoplay: true,
		//infinite: false,
		//dots: true,
		arrows: true,
		//accessibility: false,
		slidesToShow:1,
		autoplaySpeed: 5000,
		speed: 1000,
		appendArrows:$('.main-slider__control'),
		nextArrow:'<button type="button" class="slick-next"></button>',
		prevArrow:'<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {
			}
		}]
	});
}

// lots__slider
if($('.slider-lots__body').length>0){
	$('.slider-lots__body').slick({
		adaptiveHeight: true, 
		draggable: true,
		//autoplay: true,
		infinite: true,
		//dots: true,
		arrows: true,
		//accessibility: false,
		slidesToShow: 3,
		//autoplaySpeed: 5000,
		speed: 1000,
		appendArrows:$('.slider-lots__control'),
		nextArrow:'<div class="control-slider-lots__arrow control-slider-lots__arrow_prev"><svg xmlns="http://www.w3.org/2000/svg" width="109" height="36" viewBox="0 0 109 36"><defs><clipPath id="enpwa"><path fill="#fff" d="M90.615 1.03l.707-.708 16.97 16.971L109 18l-.707.707-16.97 16.97-.708-.706L107.585 18z"/></clipPath><clipPath id="enpwb"><path fill="#fff" d="M83.615 1.03l.707-.708 16.97 16.971L102 18l-.707.707-16.97 16.97-.708-.706L100.585 18z"/></clipPath><clipPath id="enpwc"><path fill="#fff" d="M0 18v-1h108v1z"/></clipPath></defs><g><g><path fill="none" stroke="#bb9c66" stroke-miterlimit="20" stroke-width="2" d="M90.615 1.03l.707-.708 16.97 16.971h0L109 18l-.707.707h0l-16.97 16.97-.708-.706L107.585 18z" clip-path="url(&quot;#enpwa&quot;)"/></g><g><path fill="none" stroke="#bb9c66" stroke-miterlimit="20" stroke-width="2" d="M83.615 1.03l.707-.708 16.97 16.971h0L102 18l-.707.707h0l-16.97 16.97-.708-.706L100.585 18z" clip-path="url(&quot;#enpwb&quot;)"/></g><g><path fill="none" stroke="#bb9c66" stroke-miterlimit="20" stroke-width="6" d="M0 18v0-1 0h108v1z" clip-path="url(&quot;#enpwc&quot;)"/></g></g></svg></div>',
		prevArrow:'<div class="control-slider-lots__arrow control-slider-lots__arrow_next"><svg xmlns="http://www.w3.org/2000/svg" width="108" height="35" viewBox="0 0 108 35"><defs><clipPath id="3ekwa"><path fill="#fff" d="M.707 18.2L0 17.5l.707-.7L17.677.01l.708.7L1.415 17.5l16.97 16.79-.707.7L.708 18.2z"/></clipPath><clipPath id="3ekwb"><path fill="#fff" d="M24.678.01l.707.7L8.415 17.5l16.97 16.79-.707.7L7 17.5z"/></clipPath><clipPath id="3ekwc"><path fill="#fff" d="M108 17.5v-.99H1v.99z"/></clipPath></defs><g><g><path fill="none" stroke="#bb9c66" stroke-miterlimit="20" stroke-width="6" d="M.707 18.2L0 17.5l.707-.7h0L17.677.01l.708.7L1.415 17.5l16.97 16.79-.707.7L.708 18.2z" clip-path="url(&quot;#3ekwa&quot;)"/></g><g><path fill="none" stroke="#bb9c66" stroke-miterlimit="20" stroke-width="6" d="M24.678.01l.707.7L8.415 17.5l16.97 16.79-.707.7L7 17.5z" clip-path="url(&quot;#3ekwb&quot;)"/></g><g><path fill="none" stroke="#bb9c66" stroke-miterlimit="20" stroke-width="6" d="M108 17.5v0-.99 0H1v.99z" clip-path="url(&quot;#3ekwc&quot;)"/></g></g></svg></div>',
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});
}

// quotes__slider
if($('.slider-quotes__body').length>0){
	$('.slider-quotes__body').slick({
		adaptiveHeight: true, 
		draggable: true,
		//autoplay: true,
		infinite: true,
		//dots: true,
		arrows: true,
		//accessibility: false,
		slidesToShow: 1,
		fade: true,
		//autoplaySpeed: 5000,
		speed: 1000,
		//appendArrows:$('.slider-lots__control'),
		nextArrow:'.control-slider-quotes__circle',
		prevArrow:'',
		//mobileFirst: true,
		/* responsive: [{
				breakpoint: 320,
				settings: {
					slidesToShow: 1
				}
			}
		] */
	});
}

/*


// SLIDER ON MOBILE
if($('.reviews-object__items').length>0){
		let slider=$('.reviews-object__items');
	function reviews_object(){
		slider.slick({
			dots: true,
			arrows: false,
			accessibility:false,
			slidesToShow:1,
			autoplaySpeed: 3000,
			//asNavFor:'',
			//appendDots:
			//appendArrows:$('.mainslider-arrows .container'),
			nextArrow:'<button type="button" class="slick-next ic-arrow"></button>',
			prevArrow:'<button type="button" class="slick-prev ic-arrow"></button>',
			responsive: [{
				breakpoint: 9999,
				settings:'unslick'
			},{
				breakpoint: 768,
				settings: {
					
				}
			}]
		});
	}
		reviews_object();
	$(window).resize(function(event) {
			var w=$(this).outerWidth();
		if(w<768 && !slider.hasClass('slick-initialized')){
			reviews_object();
		}
	});
}


//SLICK FIX
function slick_fix(slider){
	//SET OPTIONS
	//$('.progress__slider').slick('slickSetOption',{autoplay:false},true);
		var sltoshow=slider.get(0).slick.options.slidesToShow;
		var all=slider.find('.slick-slide').length;
		var allactive=slider.find('.slick-slide').not('.slick-cloned').length;
	slider.on('beforeChange', function(event,slick,currentSlide,nextSlide){
		if(nextSlide==0){
				var ind=all-allactive;
			if(sltoshow==1){
				slider.find('.slick-slide').eq(ind).addClass('active');
			}else{
				sliderfix(slider,ind);
			}
		}
		if(nextSlide==allactive-1){
			if(sltoshow==1){
				slider.find('.slick-slide').eq(0).addClass('active');
			}else{
				sliderfix(slider,sltoshow-1);
			}
		}
		//DIRECTION
		if (currentSlide === 0 && nextSlide === slick.$slides.length - 1) {
			direction = 'prev';
		}else if(nextSlide > currentSlide || (currentSlide === (slick.$slides.length - 1) && nextSlide === 0 )) {
			direction = 'next';
		}else{
			direction = 'prev';
		}
		//console.log(direction);
	});
	slider.on('afterChange', function(event, slick, currentSlide){
		slider.find('.slick-slide').removeClass('active');
	});
	function sliderfix(slider,v){
		for (var i=0; i < sltoshow; i++) {
				var n=v+i;
			slider.find('.slick-slide').eq(n).addClass('active');
		}
	}
}
*/
/*
if($('.newsmodule-slider').length>0){
	//Опция
	$('.newsmodule-slider').get(0).slick.options.slidesToShow

	$('.newsmodule-items-item').click(function(event) {
		$('.newsmodule-items-item').removeClass('active');
		$(this).addClass('active');
		$('.newsmodule-slider').slick('goTo',$(this).index());
	});
	$('.newsmodule-navigator-info span').eq(1).html($('.newsmodule-items-item').length);
	
	$('.newsmodule-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.newsmodule-navigator-info span').eq(0).html(nextSlide+1);
	});
	$('.newsmodule-slider').on('afterChange', function(event, slick, currentSlide){
		$('.newsmodule-navigator-info span').eq(0).html(currentSlide+1);
	});
	$('.newsmodule-navigator__arrow.fa-angle-left').click(function(event) {
		$('.newsmodule-slider').slick('slickPrev');
	});
	$('.newsmodule-navigator__arrow.fa-angle-right').click(function(event) {
		$('.newsmodule-slider').slick('slickNext');
	});
}
*/