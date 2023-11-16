$(document).ready(function () {
    $('.team').slick({
        slidesToShow: 1,
        infinite: true,
        dots: true,
        adaptiveHeight: true
    });
});

$(document).ready(function () {
    $('.achievements__slider').slick({
        slidesToShow: 1,
        infinite: true,
        dots: true,
        adaptiveHeight: true
    });
});


$(document).ready(function () {
    $("#link-color3").addClass("color-red");
});

$("#link-color").click(function () {
    $(this).addClass("color-red");
    $("#link-color2, #link-color3").removeClass("color-red");
});
$("#link-color2").click(function () {
    $(this).addClass("color-red");
    $("#link-color, #link-color3").removeClass("color-red");
});
$("#link-color3").click(function () {
    $(this).addClass("color-red");
    $("#link-color, #link-color2").removeClass("color-red");
});


$(document).ready(function () {
    $("#experience-text1").addClass("block");
});

$("#experience-link1").click(function () {
    $("#experience-text1").addClass("block");
    $("#experience-text2, #experience-text3, #experience-text4").removeClass("block");
});
$("#experience-link2").click(function () {
    $("#experience-text2").addClass("block");
    $("#experience-text1, #experience-text3, #experience-text4").removeClass("block");
});
$("#experience-link3").click(function () {
    $("#experience-text3").addClass("block");
    $("#experience-text2, #experience-text1, #experience-text4").removeClass("block");
});
$("#experience-link4").click(function () {
    $("#experience-text4").addClass("block");
    $("#experience-text2, #experience-text3, #experience-text1").removeClass("block");
});

$("#experience-link11").click(function () {
    $("#experience-text1").addClass("block");
    $("#experience-text2, #experience-text3, #experience-text4").removeClass("block");
});
$("#experience-link22").click(function () {
    $("#experience-text2").addClass("block");
    $("#experience-text1, #experience-text3, #experience-text4").removeClass("block");
});
$("#experience-link33").click(function () {
    $("#experience-text3").addClass("block");
    $("#experience-text2, #experience-text1, #experience-text4").removeClass("block");
});
$("#experience-link44").click(function () {
    $("#experience-text4").addClass("block");
    $("#experience-text2, #experience-text3, #experience-text1").removeClass("block");
});

$(document).ready(function () {
    $("#experience-link1").addClass("color");
});

$("#experience-link1").click(function () {
    $(this).addClass("color");
    $("#experience-link2, #experience-link3, #experience-link4").removeClass("color");
});
$("#experience-link2").click(function () {
    $(this).addClass("color");
    $("#experience-link1, #experience-link3, #experience-link4").removeClass("color");
});
$("#experience-link3").click(function () {
    $(this).addClass("color");
    $("#experience-link1, #experience-link2, #experience-link4").removeClass("color");
});
$("#experience-link4").click(function () {
    $(this).addClass("color");
    $("#experience-link1, #experience-link2, #experience-link3").removeClass("color");
});

$(document).ready(function () {
    $("#experience-link11").addClass("color");
});

$("#experience-link11").click(function () {
    $(this).addClass("color");
    $("#experience-link22, #experience-link33, #experience-link44").removeClass("color");
});
$("#experience-link22").click(function () {
    $(this).addClass("color");
    $("#experience-link11, #experience-link33, #experience-link44").removeClass("color");
});
$("#experience-link33").click(function () {
    $(this).addClass("color");
    $("#experience-link11, #experience-link22, #experience-link44").removeClass("color");
});
$("#experience-link44").click(function () {
    $(this).addClass("color");
    $("#experience-link11, #experience-link22, #experience-link33").removeClass("color");
});

$('#experience-on').on('click', function (event) {
    event.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000);
});

window.onload = function () {
    var count1 = 0;
    setInterval(function () {
        var maxCount1 = 10;
        if (count1 < maxCount1) {
            count1++;
            document.getElementById("visitors").innerHTML = count1;
        } else {
            document.getElementById("visitors").innerHTML = "10+";
        }
    }, 1000);

    var count2 = 0;
    setInterval(function () {
        var maxCount2 = 30;
        if (count2 < maxCount2) {
            count2++;
            document.getElementById("activ-clients").innerHTML = count2;
        } else {
            document.getElementById("activ-clients").innerHTML = "30+";
        }
    }, 350);

    var count3 = 0;
    setInterval(function () {
        var maxCount3 = 500;
        if (count3 < maxCount3) {
            count3++;
            document.getElementById("hour").innerHTML = count3;
        } else {
            document.getElementById("hour").innerHTML = "500+";
        }
    }, 20);
};


if ($(window).width() <= 768) {
    const swiper = new Swiper('.swiper', {
        speed: 400,
        slidesPerView: 2,
        spaceBetween: 30,
    });
} else {
    $('.swiper').Swiper('unslick');
}

$(window).resize(function () {
    if ($(window).width() <= 768 && !$('.swiper').hasClass('swiper-container-initialized')) {
        const swiper = new Swiper('.swiper', {

        });
    } else if ($(window).width() > 768 && $('.swiper').hasClass('swiper-container-initialized')) {
        $('.swiper').Swiper('unslick');
    }
});


$(document).ready(function () {
    $('#menu').on('click', function () {
        $('.right-side__nav').addClass('active');
    });

    $('#close').on('click', function () {
        $('.right-side__nav').removeClass('active');
    });


    $('#menu').on('click', function () {
        $('#close').addClass('block');
    });

    $('#close').on('click', function () {
        $('#close').removeClass('block');
    });
});