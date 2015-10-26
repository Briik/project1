var FTAs = [("Australia"), ("Bahrain"), ("Chile"), ("Colombia"), ("DR-CAFTA"), ("Israel"), ("Jordan"), ("Korea"), ("Morocco"), ("NAFTA"), ("Oman"), ("Panama"), ("Peru"), ("Singapore"),];


$(document).ready(function(){
    console.log("jQuery Working");
    $("#Announcement").html("There are currently " + (FTAs.length + 1) + " Free Trade Agreements in force for the United States.<br>Learn more about them here.");
    $(".country").on("click", function(){
      console.log("Click detected on " + $(this).html());
      var identity = $(this).id;
      // $(this).append("<br>TESTTESTTEST");
      // $(this)setTimeout($(this)., 5000)
    });
});
