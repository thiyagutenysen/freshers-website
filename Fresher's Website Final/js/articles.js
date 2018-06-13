$(document).ready(function(){
  $(".btn").click(function(){
    id = $(this).attr('value');
    $('.article-summary').hide();
    $("#"+id).show();
    $("#"+id).addClass("slide");
    $(window).scrollTop(0);
    i = 0;
    $(".back").show();
  }
    );

  $(".back").click(function(){
    location.reload();  }
    );
  var id = 0;

  $("#17").each(function(){
          $(this).addClass("slide");
    });

    $("#16").each(function(){
          $(this).addClass("slide-right");
    });

    $("#18").each(function(){
      $(this).addClass("slide-left");
        });
    var i = 1;
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
    $(".slideanim-right").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide-right");
        }
    });
    $(".slideanim-left").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide-left");
        }
    });
    if(i===0){
      $(".rig").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide-right");
        }
    });
    $(".left").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide-left");
        }
    });}

  });
});
