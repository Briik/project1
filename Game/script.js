

$(document).ready(function() {
  console.log("jQuery Working");
  $("#Announcement").html("WHAT ARE YOU DOING, BRYCE?");
  $(".country").on("click", function() {
    console.log("Click detected on " + $(this).html());
    var identity = $(this).id;
    //$(this).append("<br>" + );
    console.log("popping out!");
    $(this).addClass("pop");
    var retract = function retracting() {
      console.log("trying to retract...");
      $(this).removeClass("pop");
    }.bind(this);
    setTimeout(retract, 2000);
  });
});
