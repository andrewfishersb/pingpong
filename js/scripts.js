//Backend
var pingPong = function(number){
  var countUpArray =[];
  for(var i =0;i<number;i++){
    countUpArray[i] = (i+1)%3===0 ? ((i+1)%5===0 ? '<img src="img/pingpong.jpg"/>' :'<img src="img/ping.jpg"/>' ): ((i+1)%5===0 ? '<img src="img/pong.png"/>' : (i+1));
  }
  return countUpArray;
}

//Front end
$(function(){
  $("#ping-pong").keypress(function(event){
    var range = event.charCode;
    if(!(range>47 && range<58)){
      event.preventDefault();
    }
  });

  $("form").submit(function(event){
      event.preventDefault();
      var userInput = parseInt($("input#ping-pong").val());
      console.log(userInput);
      if(userInput===undefined || userInput===NaN || userInput===null){
        alert("Not a number please enter again");
      }
      var pingPongArray = pingPong(userInput);
      var pingPongArray = pingPong(userInput);
      $(".output").text("").append("<li>"+pingPongArray[0]+"</li>");
      for(var i =1;i<pingPongArray.length;i++){
        $(".output").append("<li>"+pingPongArray[i]+"</li>");
      }
    });
});
