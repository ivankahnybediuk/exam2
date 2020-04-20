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



});