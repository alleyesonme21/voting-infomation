$(document).ready(function() {
  $("form#formVote").submit(function(event) {
    event.preventDefault();

    const age = $("#voting").val();
    $("#output").show();

    if (age >= 18) {
      $("#vote-age").show();
    } else {
      $("#minor").show();
    } 
    
  });
});