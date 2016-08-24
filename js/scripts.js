//Backend
var pingPong = function(number){
  var countUpArray =[];
  for(var i =1;i<number+1;i++){
    countUpArray[i-1] = (i)%3===0 ? ((i)%5===0 ? 'Ping-Pong' :'Ping' ): ((i)%5===0 ? 'Pong' : (i));
  }
  return countUpArray;
}

//Front end
$(function(){


  $("form").submit(function(event){
      event.preventDefault();
      $(".output").empty();
      var userInput = parseInt($("input#ping-pong").val());
      if(userInput===undefined || userInput===NaN || userInput===null){
        alert("Not a number please enter again");
      }
      var pingPongArray = pingPong(userInput);
      for(var i =0;i<pingPongArray.length;i++){
        console.log(pingPongArray[i]);
        if(pingPongArray[i]==='Ping-Pong'){
          pingPongArray[i]= "<img src='img/pingpong.jpg'/>"
       }else if(pingPongArray[i]==='Ping'){
          pingPongArray[i]= "<img src='img/ping.jpg'/>"
        }else if(pingPongArray[i]==='Pong'){
          pingPongArray[i]= "<img src='img/pong.png'/>"
        }else{
          pingPongArray[i]= i+1;
        }
        $(".output").append("<li>"+pingPongArray[i]+"</li>");
      }
    });
 });
