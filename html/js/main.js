//review slider
 var swiper = new Swiper(".home-product-slider", {
      slidesPerView: 6.5,
      spaceBetween: 0,
	   autoplay: {
    delay: 5000,
     pauseOnMouseEnter: true,
    disableOnInteraction: false
  },
	  loop: true,
      
	 breakpoints: {
      0: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 4.5,
      },
	   1200: {
        slidesPerView: 6.5,
      },
    },
    });
	

 var swiper = new Swiper(".popular-coffee-slider", {
      slidesPerView: 4,
      spaceBetween: 40,
	   autoplay: {
    delay: 5000,
     pauseOnMouseEnter: true,
    disableOnInteraction: false
  },
	  loop: true,
       navigation: {
        nextEl: ".popular-coffee-next",
        prevEl: ".popular-coffee-prev",
      },
	  pagination: {
        el: '.popular-coffee-dots',
        clickable: true,
      },
	
	  breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
	   1200: {
        slidesPerView: 4,
      },
    },
    });
	
	
	var swiper = new Swiper(".new-arrival-slider", {
      slidesPerView: 4,
      spaceBetween: 40,
	   autoplay: {
    delay: 5000,
     pauseOnMouseEnter: true,
    disableOnInteraction: false
  },
	  loop: true,
       navigation: {
        nextEl: ".new-arrival-next",
        prevEl: ".new-arrival-prev",
      },
	  pagination: {
        el: '.new-arrival-dots',
        clickable: true,
      },
	
	  breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
	   1200: {
        slidesPerView: 4,
      },
    },
    });


    const multiplier = {
    translate: .1,
    rotate: .01
}

var swiper = new Swiper(".our-review-slider", {
    slidesPerView: 3.75,
    spaceBetween: 100,
    initialSlide: 3,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    roundLengths: true,
    navigation: {
        nextEl: ".our-review-next",
        prevEl: ".our-review-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2.25,
        },
        1280: {
            slidesPerView: 2.75,
        },
         1281: {
            slidesPerView: 3.75,
        },
    },
    on: {
        init: function () {
            calculateWheel('.our-review-slider');  // Initial calculation for this Swiper instance
        },
        slideChange: function () {
            calculateWheel('.our-review-slider');  // Recalculate on slide change
        },
    }
});

function calculateWheel(swiperClass) {
    const slides = document.querySelectorAll(`${swiperClass} .swiper-slide`);  // Target specific Swiper instance
    slides.forEach((slide, i) => {
        const rect = slide.getBoundingClientRect();
        const r = window.innerWidth * .5 - (rect.x + rect.width * .5);
        let ty = Math.abs(r) * multiplier.translate - rect.width * multiplier.translate;

        if (ty < 0) {
            ty = 0;
        }
        const transformOrigin = r < 0 ? 'left top' : 'right top';
        slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate}deg)`;
        slide.style.transformOrigin = transformOrigin;
    });
}

function raf() {
    requestAnimationFrame(raf);
    calculateWheel('.our-review-slider');  // Continuous calculation for the specific Swiper instance
}

raf();  // Start the continuous recalculation
	
	//timeline js
$(document).ready(function() {
  var timelineBlocks = $('.howwork-timeline-block');
  var offset = 0;

  $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    timelineBlocks.each(function() {
      var blockPosition = $(this).offset().top - offset;
      if (blockPosition <= scrollTop + windowHeight * 0.75) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });
});