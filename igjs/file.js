$(document).ready(function(){
    $(".ig-closed").on("click",function(e){
        $(".ig-header,.ig-content").removeClass("hide");
        $(this).addClass("hide");
    });

    $(".ig-header").on("click",function(e){
        $(".ig-header,.ig-content").addClass("hide");
        $(".ig-closed").removeClass("hide");
    });
	
    $(".ig-opt1").on("click",function(e){
		$(".ig-panel1").removeClass("hide");
		$(".ig-panel2").addClass("hide");
		$(".ig-panel3").addClass("hide");
    });
    $(".ig-opt2").on("click",function(e){
		$(".ig-panel2").removeClass("hide");
		$(".ig-panel1").addClass("hide");
		$(".ig-panel3").addClass("hide");
    });
    $(".ig-opt3").on("click",function(e){
		$(".ig-panel3").removeClass("hide");
		$(".ig-panel1").addClass("hide");
		$(".ig-panel2").addClass("hide");
    });
});

