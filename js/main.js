$(document).ready(function() {
    $('.rslides').responsiveSlides ({
        pager: true
    })
    $(".rslides").responsiveSlides();
    $(".slider").css('height',$(".rslides").height());
    $(window).resize(function(){
        $(".slider").css('height',$(".rslides").height());
    })


    $("#btn-nav").click(function(e){
        e.preventDefault();
        $(this).toggleClass("is-open");
        $('header nav > ul').stop().slideToggle("600");
        if(linkNavH == null) linkNavH = $('nav .has-sub-nav').height();
        $(".btn-sub-nav").css("height", linkNavH);
    });

});