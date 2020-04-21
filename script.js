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
initMap();
function initMap() {
   let styledMapType = new google.maps.StyledMapType(
        [
          {elementType: 'geometry', stylers: [{color: '#e7e7e7'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#757575'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#f7f7f7'}]},
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{color: '#c9b2a6'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [{color: '#dcd2be'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{color: '#ae9e90'}]
          },
          {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{color: '#d6d6d6'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d6d6d6'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{color: '#dadada'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#447530'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#d6d6d6'}]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{color: '#d6d6d6'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#d6d6d6'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#d6d6d6'}]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{color: '#d6d6d6'}]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [{color: '#d6d6d6'}]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d6d6d6'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d6d6d6'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#ebe3cd'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#d5d5d5'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{color: '#b9d3c2'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#92998d'}]
          }
        ],
        {name: 'Styled Map'});
    let uluru = {lat: 40.6702125, lng: -73.8926693};
    let map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 13, 
            center: uluru, 
            mapTypeId:'styled_map',
            disableDefaultUI: true});
    map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
    let marker = new google.maps.Marker({position: uluru, map: map});
}


})