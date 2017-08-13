// BACKEND/BUSINESS LOGIC

// Creates functions to use branching to determine the user's match score
// Each function assigns points based on what your choice was and if it applied to the given track.
// If different responses awarded the same track points, it would award a fraction of a point. This
// gets averaged down and turned into a ratio at the end of the function.
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

// Uses the .max method to find the highest scoring match
var returnBestMatch = function(match1, match2, match3, match4, match5){
  var best_match = Math.max(match1, match2, match3, match4, match5);
  return best_match;
};

// FRONTEND/USER LOGIC
// Don't do anything until the document is loaded
$(document).ready(function() {
  // Wait for a submit event to occur in the form 'user-input'
  $("form#user-input").submit(function(event) {
    event.preventDefault();

    if($("#name").val() != ''){
    // Gather data from the form called 'user-input' and store it in vars
    var u_name = $("#name").val();
    var u_type = parseInt($("input:radio[name=user-type]:checked").val());
    var u_intent = parseInt($("input:radio[name=user-intent]:checked").val());
    var u_age = parseInt($("input:radio[name=user-age]:checked").val());
    var u_enviro = parseInt($("#work-environment").val());
    var u_os = parseInt($("#phone-os").val());

    // Generates data using the passed parameters and stores it in vars for increased readability
    var css_match = determineDesignMatch(u_type, u_intent, u_age, u_enviro, u_os);
    var net_match = determineNetMatch(u_type, u_intent, u_age, u_enviro, u_os);
    var java_match = determineJavaMatch(u_type, u_intent, u_age, u_enviro, u_os);
    var php_match = determinePhpMatch(u_type, u_intent, u_age, u_enviro, u_os);
    var ruby_match = determineRubyMatch(u_type, u_intent, u_age, u_enviro, u_os);

    // Calls a simple function to improve code readability and keep the backend/frontend separated
    var best_match_number = returnBestMatch(css_match, net_match, java_match, php_match, ruby_match);

    // A little bit of branching in the frontend to determine what should be displayed to the user
    if(best_match_number === parseInt(css_match)){
      $("#best-match").text("The CSS/Design Track. You had a " + css_match + "% Match");
    }else if (best_match_number === parseInt(net_match)) {
      $("#best-match").text("The C#/.Net Track. You had a "  + net_match + "% Match");
    }else if (best_match_number === parseInt(java_match)) {
      $("#best-match").text("The Java/Android Track. You had a "  + java_match + "% Match");
    }else if (best_match_number === parseInt(php_match)) {
      $("#best-match").text("The PHP/Drupal Track. You had a "  + php_match + "% Match");
    }else if (best_match_number === parseInt(ruby_match)) {
      $("#best-match").text("The Ruby/Rails Track. You had a "  + ruby_match + "% Match.");
    }else {
      alert("Error unforseen error detected. Try reloading the page and filling out the survey again.");
    }
    // Hides the form
    $("form#user-input").hide();

    // Addresses the user
    $("#name-results").text(u_name + ", based on your answers the best track for you is: ");

    // Shows the user the results
    $("#results").fadeIn();

    // Sets the text in the all data section in order to use the scope of the '_match' variables
    $("#css-match").text("CSS/Design Track: " + css_match + "% Match");
    $("#net-match").text("C#/.Net Track: "  + net_match + "% Match");
    $("#java-match").text("Java/Android Track: "  + java_match + "% Match");
    $("#php-match").text("PHP/Drupal Track: "  + php_match + "% Match");
    $("#ruby-match").text("Ruby/Rails Track: "  + ruby_match + "% Match.");
    } else {
      alert("Please Enter Your Name Before Continuing");
      $("#name-input-group").addClass('has-danger');
      $("#name").addClass('form-control-danger');
    }
  });

  // Once clicked it hides your best match and shows you all the data
  $("button#show-all").click(function(){
    $("#results").hide();
    $("#all-results").fadeIn();
  });
});
