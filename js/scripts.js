$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
}

$(".panel-heading").click(function(event){
  event.preventDefault();
  $('.panel-collapse.in').collapse('hide').not($(this));
  $(this).scrollView();
});

$(".mcq").click(function() {
	$('span#'+question_id).text("");
	var question_id = $(this).parent().attr("id");
	var user_answer = $(this).parent().find("input:checked").val();
	var data = question_id+user_answer;
	$.get( "http://fju-aaa.appspot.com/checkAnswer?data="+data, function( data ) {
		if (data == "correct") {
			$('span#'+question_id).html('<span id="'+question_id+'" class="correct">'+data+'</span>');
		}else{
			$('span#'+question_id).html('<span id="'+question_id+' class="wrong">'+data+'</span>');
		}
      
    });
	
});
