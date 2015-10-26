$(document).ready(function() {
  console.log("jQuery Working");
  $("#Announcement").html("WHAT ARE YOU DOING, BRYCE?");
  $(".country").on("click", function() {
    console.log("Click detected on " + $(this).html());
    var identity = $(this);

    function checkContent() {
      var sign = prompt("What is the capital of " + $(identity).attr('id') + "?");
      if (sign.toLowerCase() == "correct") {
        alert("Good Job!");
        return true;
      } else {
        return false;
      };
    };
    var retract = function retracting() {
      console.log("trying to retract...");
      // $(this).removeClass("pop");
      $(this).closest('div').find('p').removeClass("pop");
    }.bind(this);
    checkContent();
    //$(this).append("<br>" + );
    console.log("popping out!");
    console.log(this);
    // $(this).addClass("pop");
    $(this).closest('div').find('p').removeClass().addClass("pop");
    setTimeout(retract, 2000);

  });
});
