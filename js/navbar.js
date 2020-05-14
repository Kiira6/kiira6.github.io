$(document).ready(function()
{
	$(".navbar a").click(function()
	{
		$(".navbar a").removeClass("active");
		$(this).toggleClass("active");

	});
});