// business logic 
var beeparr = [];

// UI logic
$(document).ready(function() {
  $("#beep").submit(function(event) {
    event.preventDefault();
   
    var input = $('#input').val();
    for  (var i=0; i<=input; i++){
      beeparr.push(i);
    }
    alert(beeparr);
  });
});