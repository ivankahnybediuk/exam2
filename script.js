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
    // dots: true
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

$(".what-we-do_container_first-line_text_button").on("click", function(){
    $(".what-we-do_container_modal_1").css("display", "block");
    $(".filter").css("display", "block")
})
})