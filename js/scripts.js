// business logic
var leapYear = function(year){
  if ((year > 0)&&(year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)&&(year>0)) {
    return true;

  } else {
    return false;
  }
};

// user iterface logic
$(document).ready(function(){
  $("form#leap-year").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);

    if (!result) {
      $(".not").text("not");

    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});

// business logic Pig Latin
  var isDigit = function(characters){
    var reg = /\d/;
    if(characters.search(reg)!== -1){
      return true;
    }else{
      return false;
    }
    //need to figure out how to work when with words
  };

// finds vowels
  var indexOfFirstVowel = function(word){
    var vowelIndex = /[aieou]/i.exec(word);
    return vowelIndex.index;
  }

  var pigLatinTranslator = function(word){
    var addAy = "";
    var vIndex =0;
    try {
     vIndex = indexOfFirstVowel(word);
     var slicedWord = word.slice(vIndex);
     var cutConsonant = word.slice(0,vIndex);
    }catch(err){
      vIndex=-1;
    }
    if (vIndex === 0) {
      return word.concat("ay");
    } else if(vIndex>0 ){ 

      if(cutConsonant.search("q")>-1){
        return slicedWord.substring(1).concat(cutConsonant + "uay");
      }
      return slicedWord.concat(cutConsonant + "ay");
    }else if(isDigit(word)){
      return word;
    }else{
      return word.concat("ay");
    }
  }

  var joinSentence =function(sentence){
    var sentenceArray = sentence.split(" ");
    var translatedSentence = "";
    sentenceArray.forEach(function(word){
      translatedSentence +=pigLatinTranslator(word)+ " ";
    });
    //var translatedSentence = sentenceArray.join(" ");
    return translatedSentence;
  }



  // user interface
  $(document).ready(function(){
    $("#pig-latin").submit(function(event){
      event.preventDefault();
      var userInput = $("#words").val();
      var pigLatin = joinSentence(userInput);
      $("#showpiglatin").text(pigLatin.toLowerCase());
    })
  })

  //Binary Converter
var binaryToDecimal = function(number){
  var splitNumbers = number.split("");
  var outputNumber = 0;
  var exponent = splitNumbers.length-1;
  for(var i=0;i<splitNumbers.length;i++){
    if(splitNumbers[i]==='1'){
      outputNumber += Math.pow(2,exponent);
    }
    exponent--;
  }
  return outputNumber;
}

$(document).ready(function(){
  $("#binary-form").submit(function(event){
      event.preventDefault();
    var inputUser = $("#number").val();
    var result = binaryToDecimal(inputUser);
    $("#binary").text(result);

  });
});
