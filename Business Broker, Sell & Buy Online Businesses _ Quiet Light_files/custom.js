jQuery(document).ready(function ($) {
	$('.nav-icon').click(function () {
		$('body').toggleClass('open');
		$('.nav-icon').toggleClass('open');
	});
	$('.sort_overlay').click(function () {
		$('body').removeClass('open');
	});


	$("ul.topmenu > li.menu-item-has-children").addClass("arrow");
	$('ul.topmenu li.menu-item-has-children').append('<span class="click_menu"></span>');

	$('ul.topmenu li .click_menu').on('click', function (event) {
		$(this).parent().siblings().removeClass('open2');
		$(this).parent().toggleClass('open2');
	});


	$('.side_filter').append('<span class="click_menu"></span>');
	$('.side_filter .click_menu').on('click', function (event) {
		$(this).parent().siblings().removeClass('open2');
		$(this).parent().toggleClass('open2');
	});

	$('.filter_head .click_menu').on('click', function (event) {
		$(this).closest('.filter_head').siblings().removeClass('open2');
		$(this).closest('.filter_head').toggleClass('open2');
	});

	$('.get_content').append('<span class="click_menu"></span>');
	$('.get_content .click_menu').on('click', function (event) {
		$(this).parent().siblings().removeClass('open2');
		$(this).parent().toggleClass('open2');
	});


	$('.get_content h4, .high_filter .filter_head > p').on('click', function (event) {
		$(this).parent().siblings().removeClass('open2');
		$(this).parent().toggleClass('open2');
	});

	$("nav ul li.search").click(function () {
		$(".nav_bg form").toggleClass("slide_right");
	});
	$(".nav_bg form i.fa-times-circle").click(function () {
		$(".nav_bg form").removeClass("slide_right");
	});

	$(".nav_bg nav .topmenu li:nth-child(3), .learn-dropdown").mouseenter(function () {
		$(".nav_bg nav .learn-dropdown").css("display", "block");
	}).mouseleave(function () {
		$(".nav_bg nav .learn-dropdown").css("display", "none");
	}).on("touchstart", function () {
		$(".nav_bg nav .learn-dropdown").remove();
	});

	$(".nav_bg nav .topmenu li:nth-child(2), .buy-dropdown").mouseenter(function () {
		$(".nav_bg nav .buy-dropdown").css("display", "block");
	}).mouseleave(function () {
		$(".nav_bg nav .buy-dropdown").css("display", "none");
	}).on("touchstart", function () {
		$(".nav_bg nav .buy-dropdown").remove();
	});

	$(".nav_bg nav .topmenu li:nth-child(4), .about-dropdown").mouseenter(function () {
		$(".nav_bg nav .about-dropdown").css("display", "block");
	}).mouseleave(function () {
		$(".nav_bg nav .about-dropdown").css("display", "none");
	}).on("touchstart", function () {
		$(".nav_bg nav .about-dropdown").remove();
	});

	$('.partner_slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplaySpeed: 8000,
		autoplay: true,
		responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});

	$('.slider-nav').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		responsive: [{
			breakpoint: 1023,
			settings: {
				slidesToShow: 6,
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 4,
			}
		}]
	});

	$(".accordian li h3").click(function () {
		$(this).parents('li').find('.cont_accordian').slideToggle();
		$(this).parents('li').siblings('li').find('.cont_accordian').slideUp();

		$(this).parents('li').toggleClass('active');
		$(this).parents('li').siblings('li').removeClass('active');
	});

	$('.horizontalTab').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion
		width: 'auto', //auto or any width like 600px
		fit: true, // 100% fit in a container
		closed: 'accordion', // Start closed if in accordion view
		activate: function (event) { // Callback function if tab is switched
			var $tab = $(this);
			var $info = $('#tabInfo');
			var $name = $('span', $info);
			$name.text($tab.text());
			$info.show();
		}
	});

	$('#horizontalTab').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion
		width: 'auto', //auto or any width like 600px
		fit: true, // 100% fit in a container
		closed: 'accordion', // Start closed if in accordion view
		activate: function (event) { // Callback function if tab is switched
			var $tab = $(this);
			var $info = $('#tabInfo');
			var $name = $('span', $info);
			$name.text($tab.text());
			$info.show();
		}
	});

	$('.verticalTab').easyResponsiveTabs({
		type: 'vertical',
		width: 'auto',
		fit: true
	});

	$('[data-fancybox]').fancybox({
		protect: true,
	});

	$("#demo_6").ionRangeSlider({
		min: 0,
		max: 100,
		from: 50,
		prefix: "$",
		max_postfix: 'million +',
		grid: false,

	});

	if ($('.team_slider>div').length > 2) {
		function shuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
			return array;
		}

		//Push child elements into an array
		var elements = Array();
		$('.team_slider>div>div').each(function () {
			elements.push($(this).html().trim());
		});

		//Shuffle array elements
		elements = shuffleArray(elements);

		//Swap children by looping elements
		var counter = 0;
		$('.team_slider>div>div').each(function () {
			$(this).html("");
			$(this).append(elements[counter]);
			counter++;
		});
	}

	$('.team_slider').slick({
		infinite: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 2500,
		dots: false,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: '0px',
		slidesToScroll: 1,
		verticalSwiping: true,
		vertical: true,
		responsive: [{
			breakpoint: 991,
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		}
		]
	});

	$(".match").matchHeight();
	$(".match-h4").matchHeight();
	$(".match_img").matchHeight();
	$(".match-h5").matchHeight();

	var randomAdvisor = Math.floor((Math.random() * ($('.advisor_main .main-list .slick-slide').length - 1)));
	$($('.advisor_main .main-list .slick-slide').toArray()[randomAdvisor]).trigger('click');

	createAdvisorsListForMobile();
});

function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

function createAdvisorsListForMobile() {
	var shaffledAdvisors = shuffle($('.team_slider .slick-slide').toArray());
	if (shaffledAdvisors.length > 3) {
		for (var i = 0; i < 3; i++) {
			var content = '<div class="advisor-slide">' + shaffledAdvisors[i].innerHTML + '</div>';
			$('.team_slider_mobile').append(content);
		}
	}
}

// Rati fix for category disappearance issue

if ($(window).width() < 768) {
	$(".side_content_2.ultimate_guides_sec strong").hide();
	$(".view_filter_sec div.post-type").addClass("side_filter");
	if ($(".view_filter_sec div.post-type span.click_menu").length < 1) {
		$(".view_filter_sec div.post-type").append('<span class="click_menu"></span>');
	}

	var i = setInterval(() => {
		$(".side_content_2.ultimate_guides_sec strong").hide();
		$(".view_filter_sec div.post-type").addClass("side_filter");
		if ($(".view_filter_sec div.post-type span.click_menu").length < 1) {
			$(".view_filter_sec div.post-type").append('<span class="click_menu"></span>');
		}

	}, 100);

	// function for hiding filter section
	var toggle_prepend = function () {
		$(".view_filter_sec div.post-type").addClass("open2");
		var labels = $(".view_filter_sec div.post-type.side_filter").find("label");

		$.each(labels, function (key, value) {
			$(value).hide();
		});
		$("div#wpv-view-layout-254249").addClass('test');
	}
	// for initiating classes to work toggle work on filter

	// binding click event
	$(document).on("click", "span.click_menu", function () {
		$(".view_filter_sec div.post-type").toggleClass('open2');
		$("div#wpv-view-layout-254249").toggleClass('test');

		$.each($(".view_filter_sec div.post-type.side_filter").find("label"), function (key, value) {
			$(value).toggle();
		});
	})

	// when page will refresh after click label, rerender classes for toggle

	toggle_prepend();

	$(document).on("click", ".post-categories .form-group label", function () {
		setTimeout(() => {
			toggle_prepend();
		}, 1800);
	});

	// re render after clicking search icon
	$(document).on('click', 'input.wpv-submit-trigger.js-wpv-submit-trigger', function () {
		setTimeout(() => {
			toggle_prepend();

		}, 1800);
	});

	// re render after click enter
	setInterval(() => {
		$("input.js-wpv-filter-trigger-delayed.form-control.form-control").first().keyup(function (event) {
			$(".test").removeClass("test");
		});
	}, 500);
}
// End Rati fix for category disappearance issue

jQuery('.grid').isotope({
	itemSelector: '.grid-item',
	layoutMode: 'fitRows'
});

jQuery('.filter-button-group').on('click', 'li', function () {
	var filterValue = $(this).attr('data-filter');
	jQuery('.grid').isotope({
		filter: filterValue
	});
	jQuery('.filter-button-group li').removeClass('active');
	jQuery(this).addClass('active');
});

size_li = jQuery(".wondering_sec_1").length;
y = 4;
if (size_li < 5) {
	jQuery('#load_more_brn').remove();
}
jQuery('.wondering_sec_1:lt(' + y + ')').show();
jQuery('#load_more_brn').click(function () {
	y = (y + 4 <= size_li) ? y + 4 : size_li;
	jQuery('.wondering_sec_1:lt(' + y + ')').fadeIn(1000);
	if (size_li == y) {
		jQuery(this).hide();
	}
});

$('.read-more').readMore();
$('.side_content_2 .side_filter ul').addClass('drodwn');
$('.side_content_2 .side_filter p').addClass('filt_text');
$('.filter_head ul').addClass('drodwn');
$('.get_content ul').addClass('drodwn');
$('.horizontalTab .resp-tabs-container h2').addClass('resp-tab-active');

/// this is for to remove the at time from days and time show
jQuery('.comment-list li').each(function () {
	var a = jQuery(this).find('.comment-body .comment-metadata time').text();
	var res = a.split("at");
	var b = res[0];
	jQuery(this).find('.comment-body .comment-metadata time').text(b);
});

// Valuation form styling
$('.next, .previous').click(function () {
	$('html').animate({ scrollTop: 84 }, 300);
});

$('.next, .previous, .proceed').click(function () {
	if ($('.stepone').css('display') == 'none') {
		$('.weather_sec').addClass('full-height');
	}
	else {
		$('.weather_sec').removeClass('full-height');
	}
});

$('.tosteptwo').click(function () {
	$('.weather_sec').addClass('full-height');
});

$('.tofirst').click(function () {
	$('.weather_sec').removeClass('full-height');
});
// End of valuation form styling

// FAQ accordion start
	$('.accordion-header').toggleClass('inactive-header');
	$('.accordion-header').click(function () {
		if($(this).is('.inactive-header')) {
			$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
		else {
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
	});
// FAQ accordion end

function redirectTo(url) {
	window.location.href = url;
}

function scrollTop() {
	$([document.documentElement, document.body]).animate({
		scrollTop: 100
	}, 2000);
}

window.addEventListener('message', function (event) {
	sites = [
		'http://localhost',
		'https://ac-dev.qlbadmin.com',
		'https://ac-staging.qlbadmin.com',
		'https://ac.qlbadmin.com',
		'https://ac.qlbadmin.com/'
	];

	if (!sites.includes(event.origin)) {
		return;
	}

	if (event.data.minIframeHeight) {
		$('iframe#nda').height(event.data.minIframeHeight);
		$('p#loading-message').remove();
		return;
	}
	if (event.data === 'scrollTop') {
		scrollTop();
		return;
	}

	if (event.data.require_redirect_thanks) {
		var url = event.data.url;
		redirectTo(url);
	}
});

if (window.location.pathname === '/sign-nda/') {
	var urlParams = new URLSearchParams(window.location.search);
	var listingId = urlParams.get('l_id');
	$('.guide_head h3').text($('.guide_head h3').text() + " " + listingId);


	var originalString = window.location.href;
	var match = 'iframe_url=';
	if ((originalString.indexOf(match) >= 0)) {
		var substring = originalString.substring(originalString.indexOf(match) + match.length);

		console.log(substring);

		var iframeUrl = substring;

		var iframe = document.createElement('iframe');
		iframe.src = iframeUrl;
		iframe.width = '100%';
		iframe.height = '3000px';
		iframe.id = 'nda';
		iframe.frameBorder = "0";
		iframe.scrolling = "no";
		iframe.allowfullscreen = "allowfullscreen";

		document.getElementById('nda-iframe-container').appendChild(iframe);
	}
}