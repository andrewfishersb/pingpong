//Backend
var pingPong = function(number){
  var countUpArray =[];
  for(var i =0;i<number;i++){
    countUpArray[i] = (i+1)%3===0 ? ((i+1)%5===0 ? '<img src="img/pingpong.jpg"/>' :'<img src="img/ping.jpg"/>' ): ((i+1)%5===0 ? '<img src="img/pong.png"/>' : (i+1));
    }
  return countUpArray;
}

var rowCreation = function(number){
  var numberOfRows = number/5;
  numberOfRows= Math.ceil(numberOfRows);
  return numberOfRows;
}

//Front end
$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#ping-pong").val());
    var rows = rowCreation(userInput);
    var pingPongArray = pingPong(userInput);
    var pingPongArray = pingPong(userInput);
    $(".output").text("").append("<li>"+pingPongArray[0]+"</li>");
    for(var i =1;i<pingPongArray.length;i++){
      $(".output").append("<li>"+pingPongArray[i]+"</li>");
    }
  });
});
