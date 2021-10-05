//Check off specific Todos By Clicking
$("ul").on("click","li", function() {
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click","span", function(event) {
    $(this).parent().fadeOut(500,function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event) {
    if(event.which === 13) {
        //Checking if the input is empty
        if($(this).val()!="") {
        //Grabbing new todo text from input
        var todoText = $(this).val();
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        $(this).val("");
        }
    }
});

$("em").on("click",function() {
    $("input[type='text']").fadeToggle();
});