$(document).ready(function() {
  console.log("jQuery Working");
  $("#Announcement").html("FLASH CARDS FOR NATIONAL CAPITALS");
  var numCorrect = 0;

  function checkContent(event) {
    var identity = event.target;
    console.log("identity set to: " + identity);
    var user = prompt("What is the capital of " + event.target.id + "?");
    var theCapital = event.target.firstChild.nextSibling.textContent.toLowerCase();
    console.log("Target text: " + theCapital);
    if (user.toLowerCase() == theCapital) {
      numCorrect++;
      alert("Good Job!");
      return true;
    } else {
      alert("Try Again...")
      return false;
    };
  };
  $(".country").on("click", function(event) {
    console.log("Click detected on " + event.target.html);
    var retract = function retracting() {
      console.log("trying to retract...");
      $(this).closest('div').find('p').removeClass("pop");
    }.bind(this);
    checkContent(event);
    console.log("popping out!");
    $(this).closest('div').find('p').removeClass().addClass("pop");
    setTimeout(retract, 2000);
  });
});
