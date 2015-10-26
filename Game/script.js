$(document).ready(function() {
  console.log("jQuery Working");
  $("#Announcement").html("FLASH CARDS FOR NATIONAL CAPITALS");
  var numCorrect = 0;
  $(".country").on("click", function() {
    console.log("Click detected on " + $(this));
    var identity = $(this);

    function checkContent() {
      var sign = prompt("What is the capital of " + $(identity).attr('id') + "?");
      // The following two lines do not work. I do not know why (this) is not successfully referencing the element that has been clicked on.
      //If I console.log($(".country")[0].firstChild.nextSibling.textContent.toLowerCase()) It correctly returns "canberra"  This probably has something to do with the way prompt works...
      console.log($(this).firstChild.nextSibling.textContent.toLowerCase());
      if (sign.toLowerCase() == $(this).firstChild.nextSibling.textContent.toLowerCase()) {
        numCorrect++;
        alert("Good Job!");
        return true;
      } else {
        alert("Try Again...")
        return false;
      };
    };
    var retract = function retracting() {
      console.log("trying to retract...");
      $(this).closest('div').find('p').removeClass("pop");
    }.bind(this);
    checkContent();
    console.log("popping out!");
    console.log(this);
    $(this).closest('div').find('p').removeClass().addClass("pop");
    setTimeout(retract, 2000);
  });
});
