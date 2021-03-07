// $('document').ready(function(){
//   $('#menuIcon').click(function(){
//     $('.mobile-menu').show();
//   });
//
//   $('#closeIcon').click(function(){
//     $('.mobile-menu').hide();
//   });
//
// });


$('#menuIcon').click(function(){
  $('.mobile-menu').addClass('on-screen');
});

$('#closeIcon').click(function(){
  $('.mobile-menu').removeClass('on-screen');
});


// 1. highlight current information
//    -add class for highlight
//    -remove class for hidden
// 2. hide other information


$('.filter-antonym').click(function(){
  $('.filter-antonym').addClass('show-filter');
  $('.filter-synonym').removeClass('show-filter');
  $('.filter-entymol').removeClass('show-filter');
});

$('.filter-synonym').click(function(){
  $('.filter-synonym').addClass('show-filter');
  $('.filter-antonym').removeClass('show-filter');
  $('.filter-entymol').removeClass('show-filter');
});

$('.filter-entymol').click(function(){
  $('.filter-entymol').addClass('show-filter');
  $('.filter-antonym').removeClass('show-filter');
  $('.filter-synonym').removeClass('show-filter');
});
