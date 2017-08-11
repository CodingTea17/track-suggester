// BACKEND/BUSINESS LOGIC
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
  match_score = ((match_points / (10/3)) * 100).toFixed();
  return match_score;
};
var determineNetMatch = function(choice_num1, choice_num2, choice_num3, choice_num4, choice_num5) {
  var match_points = 0;
  var match_score = 0;

  if(choice_num1 === 3){
    match_points += 1;
  }
  if((choice_num2 === 1) || (choice_num2 === 2)){
    match_points += (1/2);
  }
  if(choice_num3 === 2){
    match_points += 1;
  }
  if((choice_num4 === 1) || (choice_num2 === 2)){
    match_points += (1/2);
  }
  match_score = ((match_points / 3) * 100).toFixed();
  return match_score;
};
var determineJavaMatch = function(choice_num1, choice_num2, choice_num3, choice_num4, choice_num5) {
  var match_points = 0;
  var match_score = 0;

  if(choice_num1 === 2){
    match_points += 1;
  }
  if(choice_num2 === 1){
    match_points += 1;
  }
  if(choice_num3 === 2){
    match_points += 1;
  }
  if((choice_num4 === 1) || (choice_num4 === 2)){
    match_points += (1/2);
  }
  if(choice_num5 === 2){
    match_points += 1;
  }
  match_score = ((match_points / (9/2)) * 100).toFixed();
  return match_score;
};
var determinePhpMatch = function(choice_num1, choice_num2, choice_num3, choice_num4, choice_num5) {
  var match_points = 0;
  var match_score = 0;

  if((choice_num1 === 2) || (choice_num1 === 3)){
    match_points += (1/2);
  }
  if((choice_num2 === 1) || (choice_num2 === 3)){
    match_points += (1/2);
  }
  if(choice_num3 === 2){
    match_points += 1;
  }
  if((choice_num4 === 5) || (choice_num4 === 4) || (choice_num4 === 3)){
    match_points += (1/3);
  }
  match_score = ((match_points / (7/3)) * 100).toFixed();
  return match_score;
};
var determineRubyMatch = function(choice_num1, choice_num2, choice_num3, choice_num4, choice_num5) {
  var match_points = 0;
  var match_score = 0;

  if(choice_num1 === 2){
    match_points += 1;
  }
  if(choice_num2 === 2){
    match_points += 1;
  }
  if(choice_num3 === 1){
    match_points += 1;
  }
  if((choice_num4 === 3) || (choice_num4 === 4)){
    match_points += (1/2);
  }
  match_score = ((match_points / (7/2)) * 100).toFixed();
  return match_score;
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
    // Generate data using the gathered data and store it in vars for increased readability
    var css_match = determineDesignMatch(u_type, u_intent, u_age, u_enviro, u_os);
    var net_match = determineNetMatch(u_type, u_intent, u_age, u_enviro, u_os);
    var java_match = determineJavaMatch(u_type, u_intent, u_age, u_enviro, u_os);
    var php_match = determinePhpMatch(u_type, u_intent, u_age, u_enviro, u_os);
    var ruby_match = determineRubyMatch(u_type, u_intent, u_age, u_enviro, u_os);



    $("form#user-input").hide();
    $("#name-results").text(u_name + ",");
    $("#css-match").text("The CSS/Design Track is a: " + css_match + "% Match");
    $("#net-match").text("The C#/.Net Track is a: "  + net_match + "% Match");
    $("#java-match").text("The Java/Android Track is a: "  + java_match + "% Match");
    $("#php-match").text("The PHP/Drupal Track is a: "  + php_match + "% Match");
    $("#ruby-match").text("The Ruby/Rails Track is a: "  + ruby_match + "% Match");
    $("#results").show();
    // alert(u_name);
    // alert(u_age)
    // alert(u_type);
    // alert(u_intent);
    // alert(u_enviro);
    // alert(u_os);
  });
});
