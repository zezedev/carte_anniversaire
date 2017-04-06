$('button').on('click', function(e) {
  $('button').hide();
  $('h1').width("500px");
  $('#it1').show();
});

$('#it1').on('click', function(e) {
  $('#it2').show();
});

$('#it2').on('click', function(e) {
  $('#it3').show();
});

$('#it3').on('click', function(e) {
  $('.item').text("Happy Birthday !");
  $('body').css('background-image', 'url(cupcakes.jpg)');
});



