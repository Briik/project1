$(document).ready(function() {
  console.log("jQuery Working");
  $("#Announcement").html("FLASH CARDS FOR NATIONAL CAPITALS");
  var WinOrLose = $("#WinOrLose");
  var numCorrect = 0;
  var numWrong = 0;
  var correct = "<br>CORRECT!<br><br>";
  // Boooo. Don't use `<br>` tags. The only situation in which they're allowed is when you need to separate the lines of a mailing address.
  var tryItAgain = "<br>Try Again!<br><br>";
  var gameResponse = "Error: This is the Default Text."
  var targetP = "placeholder";
  var savedCapital = "placeholder";

  function cardCreate() {
    var cardName = $(".createCountry").val();
    var cardCaptial = $(".createCapital").val();
    $("#GameSpace").prepend("<div class='country' id='" + cardName + "'>" + cardName + "<p class='hidden'>" + cardCaptial + "</p></div>");
    console.log("adding card");
    $("img").removeClass("stuff");
    $("img").addClass("pop");
  };

  // It doesn't really matter too much whether you use function functionName() or var functionName = function(), but I'd say pick one and stick with it. I prever the former because it means I can put all my functions at the very end of the file, thanks to hoisting.
  var removeWildCard = function wildCard(){
    console.log("removing Wild Card");
    $("img").removeClass("pop");
    $("img").addClass("stuff");
  };

  $(".form").submit(function(event) {
    event.preventDefault();
    cardCreate();
    setTimeout(removeWildCard, 1000);
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
    // I'm not sure what the empty strings above do...?
  };

  // When you use the var functionName = function syntax, you don't need to include a function name -- the variable's name serves as the function name.
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
    // You generally don't want to define a function inside an event handler. That's because creating functions takes memory, and this function is going to be created all over again every time the click fires. It won't add noticeable bloat to a smaller site like this, but avoiding that would be a good practice to start now.

    checkContent(event);
    addclass();
    targetP = thisP;
    setTimeout(retract, 2000);
    if (numCorrect === $(".country").length) {
      alert("You have been playing for a while!<br>Why not take a break and go outside?");
    };
    // Never!
    console.log("numCorrect: " + numCorrect);
  });
});
