$(document).ready(function() {
  console.log("jQuery Working");
  $("#Announcement").html("FLASH CARDS FOR NATIONAL CAPITALS");
  var numCorrect = 0;
  var gameResponse = "Error: This is the Default Text."
  var correct = "<br><br>CORRECT!<br><br>";
  var tryAgain = "<br><br>Try Again!<br><br>";

  function checkContent(event) {
    var identity = event.target;
    console.log("2.  identity set to: " + identity);
    var user = prompt("What is the capital of " + event.target.id + "?");
    var capital = event.target.firstChild.nextSibling;
    var theCapital =  capital.textContent.toLowerCase();
    console.log("3.  Target text: " + theCapital);
    if (user.toLowerCase() == theCapital) {
      numCorrect++;
      gameResponse = correct;
      // return true;
    } else {
      gameResponse = tryAgain;
      // return false;
    };
    var oldP = capital.innerHTML;
    capital.innerHTML = oldP + gameResponse;
    console.log(capital);
  };

  $(".country").on("click", function(event) {
    console.log("1.  Click detected on " + event.target);

    var thisP = $(this).closest('div').find('p')
    console.log("thisP is " + thisP);

    var addclass = function addingClass() {
      thisP.removeClass().addClass("pop");
    }.bind(this);

    var retract = function retracting() {
      thisP.removeClass("pop");
    }.bind(this);

    checkContent(event);
    addclass();
    setTimeout(retract, 2000);
    if (numCorrect === $(".country").length) {
      alert("You have been playing for a while!<br>Why not take a break and go outside?");
    };
    console.log("numCorrect: " + numCorrect);
  });
});
