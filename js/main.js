jQuery(document).ready(function($) {
  //console.log("ready");


  /** disable scroll zoom on embedded Google map **/

  // set pointer events to none on doc.ready
  $('#mapEmbed').addClass('scrolloff');
  $('.map').on('click', function () {
    //console.log('scroll on');
    // set pointer events true on click
    $('#mapEmbed').removeClass('scrolloff');
  });

  // disable pointer events when mouse leaves map area;
  $(".map").mouseleave(function () {
    //console.log('scroll off');
    // set pointer events to none when mouse leaves the map area
    $('#mapEmbed').addClass('scrolloff');
  });

  /*
    * Backstretch BG img slideshow
    * pass in an array of images, and a duration and fade value
  */
  $(".parties").backstretch([
    "img/parties-1.jpg",
    "img/parties-2.jpg",
    "img/parties-3.jpg",
    "img/parties-4.jpg"
  ], {duration: 2500, fade: 750});


});

