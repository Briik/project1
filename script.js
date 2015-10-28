$(document).ready(function() {
  console.log("jQuery Working");
  $("#Announcement").html("FLASH CARDS FOR NATIONAL CAPITALS");
  var WinOrLose = $("#WinOrLose");
  var numCorrect = 0;
  var numWrong = 0;
  var correct = "<br>CORRECT!<br><br>";
  var tryItAgain = "<br>Try Again!<br><br>";
  var gameResponse = "Error: This is the Default Text."
  var targetP = "placeholder";
  var savedCapital = "placeholder";

  function cardCreate() {
    // var removeWildCard = function wildCard(){
    //   console.log("removing Wild Card");
    //   $(".img").removeClass("pop");
    //   $(".img").addClass("stuff");
    // };
    var cardName = $(".createCountry").val();
    var cardCaptial = $(".createCapital").val();
    $("#GameSpace").prepend("<div class='country' id='" + cardName + "'>" + cardName + "<p class='hidden'>" + cardCaptial + "</p></div>");
    console.log("adding card");
    // $("img").removeClass("stuff");
    // $("img").addClass("pop");
    // setTimeout(removeWildCard, 1000);
  };

  $(".form").submit(function(event) {
    event.preventDefault();
    cardCreate();
  });

  function checkContent(event) {
    var identity = event.target;
    var user = prompt("What is the capital of " + event.target.id + "?");
    var capital = event.target.firstChild.nextSibling;
    var theCapital = capital.textContent.toLowerCase();
    if (user.toLowerCase() == theCapital) {
      numCorrect++;
      $("#guessCounter").html("Good Guesses: " + numCorrect);
      gameResponse = correct;
    } else {
      numWrong++;
      $("#wrongCounter").html("Wrong Answers: " + numWrong);
      gameResponse = tryItAgain;
    };
    WinOrLose.html("" + gameResponse + "");
  };

  var retract = function retracting(event) {
    targetP.removeClass("pop");
    targetP.addClass("hidden");
    WinOrLose.removeClass("pop2");
    // WinOrLose.removeClass("pop");
    //Commented out due to classes not being added... :(
    // WinOrLose.removeClass("correct");
    // WinOrLose.removeClass("tryAgain");
    // targetP.innerHTML= savedCapital;
  };

  $("body").on("click", ".country", function(event) {
    savedCapital = event.target.firstChild.nextSibling.innerHTML;
    var thisP = $(this).closest('div').find('p')
      // console.log("targetP set to: " + targetP + "  Should be same as thisP.");

    var addclass = function addingClass() {
      WinOrLose.addClass("pop2");
      //The below function is not working..?
      // if (WinOrLose.innerHTML ==correct) {
      //   WinOrLose.addClass("correct");
      // };
      // if (WinOrLose.innerHTML ==tryItAgain) {
      //   WinOrLose.addClass("tryAgain");
      // };
      thisP.removeClass("hidden").addClass("pop");
    }.bind(this);

    checkContent(event);
    addclass();
    targetP = thisP;
    setTimeout(retract, 2000);
    if (numCorrect === $(".country").length) {
      alert("You have been playing for a while!<br>Why not take a break and go outside?");
    };
    console.log("numCorrect: " + numCorrect);
  });
});
