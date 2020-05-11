$(document).ready(function()
{
	$(".navbar a").click(function()
	{
		$(".navbar a").not(this).removeClass("active");
		$(this).toggleClass("active");

	});
});