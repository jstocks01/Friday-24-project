// business logic 
var beeparr = [];

var word = function(input){
  var loss = beeparr.pop();
  beeparr.splice(0,loss);
for  (var i=0; i<=input; i++){
  if (i.toString().includes(1) === true ){
    beeparr.push("beep!");
  }
  else if (i.toString().includes(2) === true ){
    beeparr.push("boop!"); 
  }
  else if(i.toString().includes(3) === true ){
     beeparr.push("I can't help you Dave.");
   }
  else {
    beeparr.push(i);
  }} 
  return beeparr
}

// UI logic
$(document).ready(function() {
  $("#beep").submit(function(event) {
    event.preventDefault();
    var input = $('#input').val();
    var response = word(input);
     $("#answer").text(response);
  
  });
});