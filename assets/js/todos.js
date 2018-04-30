// check off specific todos by clicking
$("ul").on("click", "li", function(){
   $(this).toggleClass("taskComplete");
});

$("ul").on("click", "li span", function(event){
    $(this).parent().fadeOut(600, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//create a function to add a new task to the todo list
function addTask() {
    var newTodo = $("#newTodo").val();
    $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + newTodo + "</li>");
    $("#newTodo").val("");
    console.log("addTask run");
};

//add task if submit button clicked
$("#addTodo").click(function(){
    var newTodo = $("#newTodo").val();
    if(newTodo != "") {
        addTask();
    }
});
//add task if enter pressed on text input
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //alert("Enter pressed");
        addTask();
    }
});
