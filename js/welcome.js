$(document).ready(function()
{
	var slideIndex = 0;
	var interval = window.setInterval(nextSlide, 5000);
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
		prevSlide();
		clearInterval(interval);
		interval = window.setInterval(nextSlide, 5000);
	});
	
	$(".next").click(function()
	{
		nextSlide();
		clearInterval(interval);
		interval = window.setInterval(nextSlide, 5000);
	});
	
	$(".dot").click(function()
	{
		slideIndex = $(".dot").index(this);
		showSlides(slideIndex);
		clearInterval(interval);
		interval = window.setInterval(nextSlide, 5000);
	});
	
	function prevSlide()
	{
		slideIndex++;
		slideIndex %= slides.length;
		showSlides();
	}
	
	function nextSlide()
	{
		slideIndex++;
		slideIndex %= slides.length;
		showSlides();
	}
	
	function showSlides() 
	{
		slides.hide();
		slides[slideIndex].style.display = "block";
		dots.removeClass("active");
		$(dots[slideIndex]).addClass("active");
	}
});