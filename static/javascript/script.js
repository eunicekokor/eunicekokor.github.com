$(document).ready(function(){

  $("#mylogo").animate({"margin-top":"12rem"}, 700);
  $("#mylogo").animate({"margin-top":"3rem"}, 500);
  $("#mylogo").animate({"margin-top":"9rem"}, 500);
  $("#mylogo").animate({"margin-top":"7rem"}, 250, function(){
      $(".intro_text").display();
  });

  $("#mylogo").click(function(){
    this.fadeOut();
  })

  $( ".page_heading" ).click(function() {
  $( ".subheading" ).toggle( "explode" );
});

  // $('.project-feature').click(function(){
  //   var src = $(this).attr("src");
  //   console.log(src);
  //   $('.overlay').css('background-image','url(' + src +')');
  //   $('overlay').show();
  //   console.log('got here');
  // })


});