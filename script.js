$(document).ready(function(){
$(" #item-1").on("click", function(){
    cleanStylesMenuItems();
    $("#item-1 i").addClass("fas fa-circle");
    $("#item-1 a").addClass("menu-item_active")
});
$("#item-2").on("click", function(){
    cleanStylesMenuItems();
    $("#item-2 i").addClass("fas fa-circle");
    $("#item-2 a").addClass("menu-item_active")
});
$("#item-3").on("click", function(){
    cleanStylesMenuItems();
    $("#item-3 i").addClass("fas fa-circle");
    $("#item-3 a").addClass("menu-item_active")
});
$("#item-4").on("click", function(){
    cleanStylesMenuItems();
    $("#item-4 i").addClass("fas fa-circle");
    $("#item-4 a").addClass("menu-item_active")
});
function cleanStylesMenuItems (){
    $(".nav-item i").removeClass("fas fa-circle");
    $(".nav-item i").addClass("far fa-circle");
    $(".nav-item a").removeClass("menu-item_active")
};
$(".slider-header").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    slidesPerRow:1,
    vertical: true,
    verticalSwiping: true,
    centerMode: false,
    adaptiveHeight:true,
    adaptiveWidth: true,
    edgeFriction:0,
    pauseOnHover: false,
    mobileFirst:true
  });
  $(".news_slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnHover:true,
    autoplay:true,
    autoplaySpeed:1500,
    dots:true,
    accessibility:false,
    responsive: [
        {
          breakpoint: 1155,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
    ]
  });
$("#first-article-button").on("click", function(){
    $("#first-article").css("display", "block");
    $(".filter").css("display", "block")
})
$(".filter").on("click", function(){
    $("#first-article").css("display", "none");
    $(".filter").css("display", "none")
});

$("#second-article-button").on("click", function(){
    $("#second-article").css("display", "block");
    $(".filter").css("display", "block")
})

$(".filter").on("click", function(){
    $("#second-article").css("display", "none");
    $(".filter").css("display", "none")
})
$("#short-news-1").on("click", function(){
    $("#news-1").css("display", "block");
    $(".filter").css("display", "block")
})

$(".filter").on("click", function(){
    $("#news-1").css("display", "none");
    $(".filter").css("display", "none")
})
$("#short-news-2").on("click", function(){
    $("#news-2").css("display", "block");
    $(".filter").css("display", "block")
})

$(".filter").on("click", function(){
    $("#news-2").css("display", "none");
    $(".filter").css("display", "none")
})
$("#short-news-3").on("click", function(){
    $("#news-3").css("display", "block");
    $(".filter").css("display", "block")
})

$(".filter").on("click", function(){
    $("#news-3").css("display", "none");
    $(".filter").css("display", "none")
})
$("#short-news-4").on("click", function(){
    $("#news-4").css("display", "block");
    $(".filter").css("display", "block")
})

$(".filter").on("click", function(){
    $("#news-4").css("display", "none");
    $(".filter").css("display", "none")
})
$("#short-news-5").on("click", function(){
    $("#news-5").css("display", "block");
    $(".filter").css("display", "block")
})

$(".filter").on("click", function(){
    $("#news-5").css("display", "none");
    $(".filter").css("display", "none")
});

})