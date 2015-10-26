$(document).ready(function() {
  console.log("jQuery Working");
  $("#Announcement").html("WHAT ARE YOU DOING, BRYCE?");
  $(".country").on("click", function() {
    console.log("Click detected on " + $(this).html());
    var identity = $(this).id;
    function checkContent() {
      var sign = prompt("Ask for data here");

      if (sign.toLowerCase() == "correct") {
        alert("Good Job!");
        return true;
      } else {
        return false;
      };
      //CHECK the user's input against correct answer.
      //Return true or false boolean value.
      //true if user is correct.
      //false if user if incorrect.
    };
    checkContent();
    //$(this).append("<br>" + );
    console.log("popping out!");
    console.log(this);
    // $(this).addClass("pop");
    $(this).closest('div').find('p').removeClass().addClass("pop");
    var retract = function retracting() {
      console.log("trying to retract...");
      // $(this).removeClass("pop");
      $(this).closest('div').find('p').removeClass("pop");
    }.bind(this);
    setTimeout(retract, 2000);
  });
});
