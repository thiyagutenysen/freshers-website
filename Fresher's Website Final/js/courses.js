$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".dropdown-menu li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  $("#departments li").click(function() {
  	var active = $(".course-active");
  	active.hide();
  	active.removeClass('course-active');
  	var id = $(this).attr('value');
  	var depart = $(this).html();
  	$('#'+id).show();
  	 $('#'+id).addClass('course-active');
  	 $('#courses').html(depart);
  }
  	);
});