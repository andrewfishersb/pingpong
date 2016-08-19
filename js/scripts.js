//Backend
var pingPong = function(number){
  var countUpArray =[];
  for(var i =0;i<number;i++){
  countUpArray[i] = (i+1)%3===0 ? ((i+1)%5===0 ? "Ping-Pong" :"Ping" ): ((i+1)%5===0 ? "Pong" : (i+1));
  }
  return countUpArray;
}


//Front end
$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#ping-pong").val());
    var pingPongArray = pingPong(userInput);
    $(".output").text("").append("<li>"+pingPongArray[0]+"</li>");
    for(var i =1;i<pingPongArray.length-1;i++){
      $(".output").append("<li>"+pingPongArray[i]+"</li>");
    }
    $(".output").append("<li>"+pingPongArray[i]+"</li>");
  });
});
