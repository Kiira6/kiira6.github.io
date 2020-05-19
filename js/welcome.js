$(document).ready(function()
{
	var slideIndex = 0;
	// var interval = window.setInterval(showSlides, 5000);
	var slides = $(".slide");
	var dots = $(".dot");
	
	$(".slide").each(function(index)
	{
		$("#dots").append('<span class="dot" id="' + index + '"></span>');
		slideIndex = 0;
		showSlides();
	});
	
	$(".prev").click(function()
	{
		debugger
		slideIndex--;
		if (slideIndex < 0)
		{
			slideIndex = slides.length - 1;
		}
		showSlides();
		// clearInterval(interval);
		// interval = window.setInterval(showSlides, 5000);
	});
	
	$(".next").click(function()
	{
		showSlides();
		// clearInterval(interval);
		// interval = window.setInterval(showSlides, 5000);
	});
	
	$(".dot").click(function()
	{
		slideIndex = $(".dot").index(this);
		showSlides(slideIndex);
		clearInterval(interval);
		interval = window.setInterval(showSlides, 5000);
	});
	
	function showSlides() 
	{
		debugger
		slides.hide();
		slides[slideIndex].style.display = "block";
		dots.removeClass("active");
		$(dots[slideIndex]).addClass("active");
		// slideIndex++;
		// slideIndex %= slides.length;
	}
});