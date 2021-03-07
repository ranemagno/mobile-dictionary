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

// start of document element properties
$('.synonym-list').show();
$('.antonym-list').hide();
$('.entymol-list').hide();


// show synonyms BEGIN
$('.filter-synonym').click(function(){
  $('.filter-synonym').addClass('show-filter');
  $('.filter-antonym').removeClass('show-filter');
  $('.filter-entymol').removeClass('show-filter');
  $('.synonym-list').show();
  $('.antonym-list').hide();
  $('.entymol-list').hide();
});
// show synonyms ENDS

// show antonyms BEGINS
$('.filter-antonym').click(function(){
  $('.filter-antonym').addClass('show-filter');
  $('.filter-synonym').removeClass('show-filter, show-filter');
  $('.filter-entymol').removeClass('show-filter');
  $('.antonym-list').show();
  $('.synonym-list').hide();
  $('.entymol-list').hide();
});
// show antonyms ENDS

// show entymology BEGINS
$('.filter-entymol').click(function(){
  $('.filter-entymol').addClass('show-filter');
  $('.filter-synonym').removeClass('show-filter, show-filter');
  $('.filter-antonym').removeClass('show-filter');
  $('.entymol-list').show();
  $('.synonym-list').hide();
  $('.antonym-list').hide();
});
// show entymology ENDS
