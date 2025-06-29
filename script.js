$(document).ready(function() {
    // Smooth Scroll
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        }, 600, 'easeInOutQuad');
    });

    // Google Translate
    window.googleTranslateElementInit = function() {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        }, 'google_translate_element');
    };

    // Animate on Scroll
    $('.animate__animated').each(function() {
        $(this).waypoint(function() {
            $(this.element).addClass('animate__fadeIn');
        }, {
            offset: '85%'
        });
    });

    // Navbar Collapse on Mobile
    $('.navbar-nav .nav-link').on('click', function() {
        if ($(window).width() < 992) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Lazy Load Images
    $('img').each(function() {
        $(this).attr('loading', 'lazy');
    });

    // Back to Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    // Parallax Effect for Hero Section
    $('.hero-section').parallax({
        imageSrc: 'hero-bg-placeholder.jpg',
        speed: 0.3
    });
});








// # index.js
/* Google Translate Initialization */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,te,ta',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

/* Waypoint Animations for Index Page */
$(document).ready(function() {
    $('.animate__animated').each(function() {
        var $element = $(this);
        $element.waypoint(function() {
            $element.addClass('animate__animated');
        }, {
            offset: '80%'
        });
    });

    /* Smooth Scrolling for Anchor Links */
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

// # about.js
/* Google Translate Initialization */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,te,ta',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

/* Waypoint Animations for About Page */
$(document).ready(function() {
    $('.animate__animated').each(function() {
        var $element = $(this);
        $element.waypoint(function() {
            $element.addClass('animate__animated');
        }, {
            offset: '80%'
        });
    });

    /* Smooth Scrolling for Anchor Links */
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});


// # services.js
/* Google Translate Initialization */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,te,ta',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

/* Waypoint Animations for Services Page */
$(document).ready(function() {
    $('.animate__animated').each(function() {
        var $element = $(this);
        $element.waypoint(function() {
            $element.addClass('animate__animated');
        }, {
            offset: '80%'
        });
    });

    /* Smooth Scrolling for Anchor Links */
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});


// # balcony-nets.js
/* Google Translate Initialization */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,te,ta',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

/* Waypoint Animations for Balcony Nets Page */
$(document).ready(function() {
    $('.animate__animated').each(function() {
        var $element = $(this);
        $element.waypoint(function() {
            $element.addClass('animate__animated');
        }, {
            offset: '80%'
        });
    });

    /* Smooth Scrolling for Anchor Links */
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});





// # bird-nets.js
/* Google Translate Initialization */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,te,ta',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

/* Waypoint Animations for Bird Nets Page */
$(document).ready(function() {
    $('.animate__animated').each(function() {
        var $element = $(this);
        $element.waypoint(function() {
            $element.addClass('animate__animated');
        }, {
            offset: '80%'
        });
    });

    /* Smooth Scrolling for Anchor Links */
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});



// # children-safety-nets.js
/* Google Translate Initialization */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,te,ta',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

/* Waypoint Animations for Children Safety Nets Page */
$(document).ready(function() {
    $('.animate__animated').each(function() {
        var $element = $(this);
        $element.waypoint(function() {
            $element.addClass('animate__animated');
        }, {
            offset: '80%'
        });
    });

    /* Smooth Scrolling for Anchor Links */
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

// # construction-nets.js
/* Google Translate Initialization */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,te,ta',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

/* Waypoint Animations for Construction Nets Page */
$(document).ready(function() {
    $('.animate__animated').each(function() {
        var $element = $(this);
        $element.waypoint(function() {
            $element.addClass('animate__animated');
        }, {
            offset: '80%'
        });
    });

    /* Smooth Scrolling for Anchor Links */
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});


$(document).ready(function() {
    // Smooth Scroll
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        }, 600, 'easeInOutQuad');
    });

    // Google Translate
    window.googleTranslateElementInit = function() {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,hi,te,ta',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        }, 'google_translate_element');
    };

    // Animate on Scroll
    $('.animate__animated').each(function() {
        $(this).waypoint(function() {
            $(this.element).addClass('animate__fadeIn');
        }, {
            offset: '85%'
        });
    });

    // Navbar Collapse on Mobile
    $('.navbar-nav .nav-link').on('click', function() {
        if ($(window).width() < 992) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Lazy Load Images
    $('img').each(function() {
        $(this).attr('loading', 'lazy');
    });

    // Back to Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    // Hero Carousel Auto Play
    $('#heroCarousel').carousel({
        interval: 5000,
        pause: 'hover'
    });
});




$(document).ready(function() {
    // Smooth Scroll
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        }, 600, 'easeInOutQuad');
    });

    // Google Translate
    window.googleTranslateElementInit = function() {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,hi,te,ta',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        }, 'google_translate_element');
    };

    // Animate on Scroll
    $('.animate__animated').each(function() {
        $(this).waypoint(function() {
            $(this.element).addClass('animate__fadeIn');
        }, {
            offset: '85%'
        });
    });

    // Navbar Collapse on Mobile
    $('.navbar-nav .nav-link').on('click', function() {
        if ($(window).width() < 992) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Lazy Load Images
    $('img').each(function() {
        $(this).attr('loading', 'lazy');
    });

    // Back to Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    // Hero Carousel Auto Play
    $('#heroCarousel').carousel({
        interval: 3000,
        pause: 'hover'
    });

    // Gallery Carousel Auto Play with Infinite Loop
    $('#galleryCarousel').carousel({
        interval: 3000,
        pause: 'hover',
        wrap: true
    });
});





/* ==========================================================================
   Global JavaScript (All Pages)
   ========================================================================== */
$(document).ready(function() {
    // Smooth scrolling for anchor links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 600, 'swing');
        }
    });

    // Google Translate initialization
    window.googleTranslateElementInit = function() {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,hi,te,ta',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        }, 'google_translate_element');
    };

    // Animate on scroll with Waypoints
    $('.animate__animated').each(function() {
        $(this).waypoint(function() {
            $(this.element).addClass('animate__fadeIn');
        }, {
            offset: '85%'
        });
    });

    // Collapse navbar on mobile after link click
    $('.navbar-nav .nav-link').on('click', function() {
        if ($(window).width() < 992) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Lazy load images for performance
    $('img').each(function() {
        $(this).attr('loading', 'lazy');
    });

    // Back to top button visibility
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').addClass('visible');
        } else {
            $('.back-to-top').removeClass('visible');
        }
    });
});

/* ==========================================================================
   Gallery Page (gallery.html)
   ========================================================================== */
$(document).ready(function() {
    // Gallery tab switching
    $('.tab-btn').on('click', function() {
        $('.tab-btn').removeClass('active');
        $('.gallery-section').removeClass('active-tab');
        $(this).addClass('active');
        $('#' + $(this).data('tab')).addClass('active-tab');
    });

    // Auto-select tab based on URL hash
    if (window.location.hash) {
        var hash = window.location.hash.substring(1);
        $('.tab-btn[data-tab="' + hash + '"]').trigger('click');
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const errorMessage = document.getElementById('errorMessage');
    
    if (!form) {
        console.error('Error: Form with ID "contactForm" not found.');
        return;
    }

    if (!errorMessage) {
        console.error('Error: Element with ID "errorMessage" not found.');
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const service = document.getElementById('service').value;
        const phone = document.getElementById('phone').value.trim();
        
        // Reset error message
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';
        
        // Validate inputs
        if (!name) {
            errorMessage.textContent = 'Please enter your name.';
            errorMessage.style.display = 'block';
            return;
        }
        if (!service) {
            errorMessage.textContent = 'Please select a service.';
            errorMessage.style.display = 'block';
            return;
        }
        if (!phone) {
            errorMessage.textContent = 'Please enter your phone number.';
            errorMessage.style.display = 'block';
            return;
        }
        if (!/^[0-9]{10}$/.test(phone)) {
            errorMessage.textContent = 'Please enter a valid 10-digit phone number.';
            errorMessage.style.display = 'block';
            return;
        }
        
        try {
            // Format WhatsApp message
            const message = `Name: ${name}\nService: ${service}\nPhone: ${phone}`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappNumber = '917288865604'; // Replace with your actual WhatsApp number (e.g., 919123456789)
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
            
            // Log for debugging
            console.log('Attempting to redirect to WhatsApp URL:', whatsappUrl);
            
            // Redirect to WhatsApp
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
            }, 100); // Slight delay to avoid browser blocking
            
            // Reset form
            form.reset();
        } catch (error) {
            console.error('Error redirecting to WhatsApp:', error);
            errorMessage.textContent = 'Failed to open WhatsApp. Please try again or contact us directly.';
            errorMessage.style.display = 'block';
        }
    });
});