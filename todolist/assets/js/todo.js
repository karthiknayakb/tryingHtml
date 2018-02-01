$("#todolist").on("click","li",function(){
	$(this).toggleClass("strike")
});

$("#todolist").on("click",".delete",function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(200,function(){
		$(this).remove()
	})
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todotext = $(this).val();
		$(this).val("")
		$("#todolist").append("<li><span class='delete'><i class='fas fa-trash-alt'></i></span> "+todotext+"</li>");
	}
});

$(".fa-plus").click(function(){
	console.log("plus")
	$("input[type='text']").fadeToggle()
})