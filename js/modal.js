$(document).ready(function()
{
	$("body").append("<div id='modal_frame' class='modal'><span class='close'>&times;</span><img class='modal-content' id='modal_img'></div>");
	
	$("img").click(function()
	{
		var modal = $(".modal");
		var modal_img = $(".modal-content");
		document.getElementById("modal_frame").style.display = "block";
		document.getElementById("modal_img").src = this.src;
	});
	
	$(".close").click(function()
	{
		document.getElementById("modal_frame").style.display = "none";
	});
	
	$("#modal_frame").click(function()
	{
		document.getElementById("modal_frame").style.display = "none";
	});
});