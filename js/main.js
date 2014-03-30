$(document).ready(function() {
    $('.rslides').responsiveSlides ({
        pager: true
    })
    $(".rslides").responsiveSlides();
    $(".slider").css('height',$(".rslides").height());
});