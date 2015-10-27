$(document).ready(function() {
  console.log("jQuery Working");
  $("#Announcement").html("FLASH CARDS FOR NATIONAL CAPITALS");
  var WinOrLose = $("#WinOrLose");
  var numCorrect = 0;
  var correct = "<br><br>CORRECT!<br><br>";
  var tryAgain = "<br><br>Try Again!<br><br>";
  var gameResponse = "Error: This is the Default Text."
  var targetP = "placeholder";
  var savedCapital = "placeholder";

  function checkContent(event) {
    var identity = event.target;
    var user = prompt("What is the capital of " + event.target.id + "?");
    var capital = event.target.firstChild.nextSibling;
    var theCapital =  capital.textContent.toLowerCase();
    if (user.toLowerCase() == theCapital) {
      numCorrect++;
      gameResponse = correct;
      // return true;
    } else {
      gameResponse = tryAgain;
      // return false;
    };
    WinOrLose.html("" + gameResponse + "");
  };

  var retract = function retracting(event) {
    // targetP = event.target.firstChild.nextSibling;
    targetP.removeClass("pop");
    WinOrLose.removeClass("pop2");
    WinOrLose.removeClass("pop");
    // targetP.innerHTML= savedCapital;
  };

  $(".country").on("click", function(event) {
    savedCapital = event.target.firstChild.nextSibling.innerHTML;
    var thisP = $(this).closest('div').find('p')
    // console.log("targetP set to: " + targetP + "  Should be same as thisP.");

    var addclass = function addingClass() {
      WinOrLose.addClass("pop2");
      WinOrLose.addClass("pop");
      thisP.removeClass().addClass("pop");
    }.bind(this);

    checkContent(event);

    addclass();
    targetP = thisP;
    setTimeout(retract, 2000);
    if (numCorrect === $(".country").length) {
      alert("You have been playing for a while!<br>Why not take a break and go outside?");
    };
    //this is the return to norm for savedCapital:
    // event.target.firstChild.nextSibling.innerHTML = savedCapital;
    // console.log("the return to norm for savedCapital. savedCapital = " + savedCapital);
    console.log("numCorrect: " + numCorrect);
  });
});
