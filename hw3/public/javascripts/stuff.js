$(document).ready(function(){
	$(".dropdown-content").click(function(){		
		$(".dropbtn").html( event.target.id );		
					
	});

	<!-- Click even for dropdown to swap months -->

	$("form").on("submit",function(event) {
	event.preventDefault();	
	
<!-- https://www.geeksforgeeks.org/how-to-submit-a-form-or-a-part-of-a-form-without-a-page-refresh-using-jquery/ __>
<!-- This sight helped me figure out how to stop the pagerefresh from submit -->

	$("form").submit(function(){
	var contents = $("#notes1").val().toLowerCase();
	if(contents.includes("vegan")){
		alert("Cheesecake Includes Dairy");
	}
	var quant = $('input[name="topping_choice"]:checked').val();
	var toppi = $(".quantity").children("option:selected").text();

	$(".center").hide();
	$("#note").hide();
	$("#order").hide();

	<!-- $("#noteHead").after("#radio".val(),"#quantity".val()); -->

	var notes = $("#notes1").val();	

	$("#noteHead").after(notes, "<br>");
	$("#noteHead").after(quant, "<br>");
	$("#noteHead").after(toppi, " ");

	<!-- Vegan Check and displays info after pressing order -->
	});
  });
});

$ (function() {
	$(document).ready(readyF);
});