$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Ensure that the typing animation is only applied after DOM is fully loaded
    $(document).ready(function() {
        // typing text animation script for Home Page (.typing)
        if ($('.typing').length > 0) {
            console.log('Typing animation for .typing initialized.');
            var typed = new Typed(".typing", {
                strings: ["Sip,", "Relax,", "Enjoy."],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });
        }

       
    });

    
});
