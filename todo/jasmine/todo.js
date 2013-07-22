$(function(){
  var taskArray=new Array("one","two","three");
  for(var i=0;i<taskArray.length;i++)
  {
    $("ul").prepend("<li>"+taskArray[i]+"</li><button>X</button></br>");
  }

  $("#addbutton").click(function(){
    $(".addtask").show();
  });

  $("#submit").click(function(){
    var task = $("#inputtask").val();
    $("ul").prepend("<li>"+task+"</li><button>X</button></br>");
    taskArray.push(task);
    $(".addtask").hide();
  });

  $(".list button").livequery('click', function(event){
    var li = $(this).prev();
    var br= $(this).next();
    br.remove();
    li.remove();
    $(this).remove();
  });

})