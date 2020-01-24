// business logic 
var beeparr = [];

var boop = function(result){

}

// UI logic
$(document).ready(function() {
  $("#beep").submit(function(event) {
    event.preventDefault();
    
    var count = beeparr.pop();
    beeparr.splice(0,count);
    var input = $('#input').val();
    for  (var i=0; i<=input; i++){
      beeparr.push(i);
    }
   $("#answer").text(beeparr);
  
  });
});