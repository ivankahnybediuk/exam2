$(document).ready(function(){
  $(".nav-item").on("click","a", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 3000);
});

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
    autoplaySpeed:4000,
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
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ],
        {name: 'Styled Map'});
    let uluru = {lat: 40.6696396, lng: -73.8999948};
    let map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 13.25, 
            center: uluru, 
            mapTypeId:'styled_map',
            disableDefaultUI: true});
    map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
        let image="img/pin.png"
    let marker = new google.maps.Marker({position: uluru, map: map, icon:image});
    
}


})