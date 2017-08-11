// BACKEND LOGIC
// Creates functions to use branching to determine the user's match score
var determineDesignMatch = function(choice_num1, choice_num2, choice_num3, choice_num4, choice_num5) {
  var match_points = 0;
  var match_score = 0;

  if(choice_num1 === 1){
    match_points += 1;
  }
  if(choice_num2 === 4){
    match_points += 1;
  }
  if((choice_num4 === 5) || (choice_num4 === 4) || (choice_num4 === 3)){
    match_points += (1/3);
  }
  if(choice_num5 === 1){
    match_points += 1;
  }
  match_score = ((match_points / (10/3)) * 100);
  return match_score;
};
var determineNetMatch = function(choice_num1, choice_num2, choice_num3, choice_num4, choice_num5) {

};
var determineJavaMatch = function(choice_num1, choice_num2, choice_num3, choice_num4, choice_num5) {

};
var determinePhpMatch = function(choice_num1, choice_num2, choice_num3, choice_num4, choice_num5) {

};
var determineRubyMatch = function(choice_num1, choice_num2, choice_num3, choice_num4, choice_num5) {

};

// Don't do anything until the document is loaded
$(document).ready(function() {
  // Wait for a submit event to occur in the form 'user-input'
  $("form#user-input").submit(function(event) {
    event.preventDefault();
    // Gather data from the form called 'user-input' and store it in vars
    var u_name = $("#name").val();
    var u_type = parseInt($("input:radio[name=user-type]:checked").val());
    var u_intent = parseInt($("input:radio[name=user-intent]:checked").val());
    var u_age = parseInt($("input:radio[name=user-age]:checked").val());
    var u_enviro = parseInt($("#work-environment").val());
    var u_os = parseInt($("#phone-os").val());

    alert(determineDesignMatch(u_type, u_intent, u_age, u_enviro, u_os));
    // alert(u_name);
    // alert(u_age)
    // alert(u_type);
    // alert(u_intent);
    // alert(u_enviro);
    // alert(u_os);
  });
});
