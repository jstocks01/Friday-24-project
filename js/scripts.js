// business logic 
var beeparr = [];

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

// UI logic
$(document).ready(function() {
  $("#beep").submit(function(event) {
    event.preventDefault();
    
    var count = beeparr.pop();
    beeparr.splice(0,count);
    var input = $('#input').val();

   $("#answer").text(beeparr);
  
  });
});