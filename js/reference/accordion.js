
$(document).ready(function()
{
	$(".accordion").click(function()
	{
		// $(".panel").hide();
		// $(".accordion").not(this).removeClass("active");
		$(this).toggleClass("active");

		var panel = this.nextElementSibling;
		// $(panel).toggle();
		// if (panel.is(":visible"))
		// {
			// $(panel).show();
			// alert("HIDDEN");
		// }
		if (panel.style.display === "block") 
		{
			panel.style.display = "none";
		} else 
		{
			panel.style.display = "block";
		}
	});
});