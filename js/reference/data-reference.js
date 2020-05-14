$(document).ready(function()
{
	var stars = 0;
	
	$(".fa-star").each(function(index)
	{
		index++;
		$(this).hover(function()
		{
			$(".fa-star").removeClass("checked");
			var total = stars;
			if (index > total)
			{
				total = index;
			}
			for (var i = 0; i < total; i++)
			{
				$($(".fa-star")[i]).addClass("checked");
			}
		});
		$(this).mouseout(function()
		{
			// debugger
			$(".fa-star").removeClass("checked");
			for (var i = 0; i < stars; i++)
			{
				$($(".fa-star")[i]).addClass("checked");
			}
		});
		$(this).click(function()
		{
			stars = index;
			$(".fa-star").removeClass("checked");
			for (var i = 0; i < stars; i++)
			{
				$($(".fa-star")[i]).addClass("checked");
			}
		});
	});
	
	$(".fa-clipboard").click(function()
	{
		var aux = document.createElement("input");
		var text = this.parentElement.parentElement.nextElementSibling.getElementsByTagName("code")[0].innerText;
		aux.setAttribute("value", text);
		document.body.appendChild(aux);
		aux.select();
		document.execCommand("copy");
		document.body.removeChild(aux);
	});
	
	// $("img").click(function()
	// {
		// var modal = $(".modal");
		// var modal_img = $(".modal-content");
		// document.getElementById("modal_frame").style.display = "block";
		// document.getElementById("modal_img").src = this.src;
	// });
	
	// $(".close").click(function()
	// {
		// document.getElementById("modal_frame").style.display = "none";
	// });
});