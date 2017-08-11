// Don't do anything until the document is loaded
$(document).ready(function() {
  // Wait for a submit event to occur in the form 'user-input'
  $("form#user-input").submit(function(event) {
    event.preventDefault();
    // Gather data from the form called 'user-input' and store it in vars
    var u_name = $("#name").val();
    var company_size = $("#work-environment").val();

    alert(u_name);
    alert(company_size);
  });
});
