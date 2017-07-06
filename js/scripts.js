$(document).ready(function() {
  $("form#formOne").submit(function(event){
event.preventDefault();
  var gender = $("input#gender").val();
  var age = parseInt($("input#age").val();
  var drink = $("input#drink").val();

  if (age) {
    if (gender === "female" && age < 30) {
    $(#ford).show();
  } else {
    alert("Please enter all fields");
  }
  }
  })
})
