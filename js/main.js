(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);

// animation

function fadeInOnScroll() {
    const fadeElements = document.querySelectorAll('.animation1');

    for (let i = 0; i < fadeElements.length; i++) {
        const element = fadeElements[i];
        const elementPosition = element.getBoundingClientRect().top;

        if (elementPosition < window.innerHeight) {
            element.classList.add('animate');
        }
    }
}

window.addEventListener('scroll', fadeInOnScroll);


// slider

(() => {
//If you want to add more images, add the link name and URL image URL in the array list below.
	const images_list = [
{
    "url": "img/slider1.webp",
    "alt": "",
    "name": "",
    "link": ""
},
{
    "url": "img/slider2.webp",
    "alt": "",
    "name": "",
    "link": ""
},
{
    "url": "img/slider3.webp",
    "alt": "",
    "name": "",
    "link": ""
},
{
    "url": "img/slider4.webp",
    "alt": "",
    "name": "",
    "link": ""
},
{
    "url": "img/slider5.webp",
    "alt": "",
    "name": "",
    "link": ""
},
{
    "url": "img/slider6.webp",
    "alt": "",
    "name": "",
    "link": ""
},
{
    "url": "img/slider7.webp",
    "alt": "",
    "name": "",
    "link": ""
},
{
    "url": "img/slider8.webp",
    "alt": "",
    "name": "",
    "link": ""
}
	];


	let slider_id = document.querySelector("#hcg-slider-1");

	// append all images
	let dots_div = "";
	let images_div = "";
	for (let i = 0; i < images_list.length; i++) {
		// if no link without href="" tag
		let href = (images_list[i].link == "" ? "":' href="'+images_list[i].link+'"');
		images_div += '<a'+href+' class="hcg-slides animated"'+(i === 0 ? ' style="display:flex"':'')+'>'+
						'<span class="hcg-slide-number">'+(i+1)+'/'+images_list.length+'</span>'+
						'<img src="'+images_list[i].url+'" alt="'+images_list[i].name+'">'+
						'<span class="hcg-slide-text">'+images_list[i].name+'</span>'+
					 '</a>';
		dots_div += '<a href="#" class="hcg-slide-dot'+(i === 0 ? ' dot-active':'')+'" data-id="'+i+'"></a>';
	}
	slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
	slider_id.querySelector(".hcg-slide-dot-control").innerHTML = dots_div;

	let slide_index = 0;

	const images = slider_id.querySelectorAll(".hcg-slides");
	const dots = slider_id.querySelectorAll(".hcg-slide-dot");
	const showSlides = () => {
		if (slide_index > images.length-1) {
			slide_index = 0;
		}
		if (slide_index < 0) {
			slide_index = images.length-1;
		}
		for (let i = 0; i < images.length; i++) {
			images[i].style.display = "none";
			dots[i].classList.remove("dot-active");
			if (i == slide_index) {
				images[i].style.display = "flex";
				dots[i].classList.add("dot-active");
			}
		}
	}

	const dot_click = event => {
		event.preventDefault();
		slide_index = event.target.dataset.id;
		showSlides();
	}

	for (let i = 0; i < dots.length; i++) {
		dots[i].addEventListener("click", dot_click, false);
	}
	// auto play
	setInterval(() => {
		slide_index++;
		showSlides();
	}, 3000);

})();
