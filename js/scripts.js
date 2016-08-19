//Backend
var pingPong = function(number){
  var countUpArray =[];
  for(var i =0;i<number;i++){
  countUpArray[i] = (i+1)%3===0 ? ((i+1)%5===0 ? 'pingpong' :'ping' ): ((i+1)%5===0 ? 'pong' : (i+1));
  console.log(i);
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
    $(".output").text("").append(pingPongArray[0]);
    for(var i =1;i<pingPongArray.length-1;i++){
      $(".output").append(pingPongArray[i]);
    }
    $(".output").append(pingPongArray[i]);
    $("table").text("").append("<tr><td>hello</td></tr>");
    for(var i =1;i<rows;i++){
      $("table").append("<tr><td>hi</td></tr>");
      for(var j =0;j<5;j++){

       }
    //
     }//.append("<tr><td>hello</td></tr>"

  });
});
//original print out
//   var pingPongArray = pingPong(userInput);
//   $(".output").text("").append("<li>"+pingPongArray[0]+"</li>");
//   for(var i =1;i<pingPongArray.length-1;i++){
//     $(".output").append("<li>"+pingPongArray[i]+"</li>");
//   }
//   $(".output").append("<li>"+pingPongArray[i]+"</li>");


//original if statement
  // countUpArray[i] = (i+1)%3===0 ? ((i+1)%5===0 ? "Ping-Pong" :'<img src="img/ping.jpg"/>' ): ((i+1)%5===0 ? '<img src="img/pong.png"/>' : (i+1));

//  countUpArray[i] = (i+1)%3===0 ? ((i+1)%5===0 ? '<img src="img/pingpong.jpg"/>' :'<img src="img/ping.jpg"/>' ): ((i+1)%5===0 ? '<img src="img/pong.png"/>' : (i+1));
  //} --- doesnt work but has the last image entered
