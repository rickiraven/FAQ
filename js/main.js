$(document).ready(function() {

	$('.question').click(toggleQuestion);
	$('.category').click(toggleCategory);

	$('ul li').hide();
	$('li .answer').hide();

	function toggleCategory() {
		if($(this).parent().hasClass('active')) {
			$(this).siblings().slideUp();
			$(this).siblings().removeClass('active');
			$(this).siblings().children('.answer').slideUp();
			$(this).parent().removeClass('active');
		} else {
			$(this).parent().addClass('active');
			$(this).siblings().slideDown();
		}
	}
	function toggleQuestion() {
		if($(this).parent().hasClass('active')) {
			$(this).siblings().slideUp();
			$(this).parent().removeClass('active');
		} else {
			$(this).parent().addClass('active');
			$(this).siblings().slideDown();
		}
	}

});